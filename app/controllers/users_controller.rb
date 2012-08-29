class UsersController < ApplicationController

  def index
    if params.include? "inactive"# if url has ?inactive in it
      # output inactive users
      @users = User.where(inactive: true)
    else
      # output active users
      @users = User.where(inactive: false)
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
  end

  def create
    @user = User.new(params[:user])

    if @user.save
      redirect_to @user, notice: 'User was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(params[:user])
      redirect_to @user, notice: 'User was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy

    redirect_to users_url 
  end

   def seminar_signup

    if params[:user][:event_ids].nil?
      render text: 'error: no event was chosen' and return
    end

    user = User.find_by_email(params[:user][:email])
    if user.nil?
      user = User.new(params[:user])
    else
      user.update_attributes(params[:user])
      # add registrations to existing user

      # # make an array of all their current events
      # event_ids = user.event_ids
      # # update with their new registrations
      # event_ids.concat(params[:user][:event_ids])


      # # update everything from form (this will update first and last name, etc)
      # user.update_attributes(params[:user])

      # raise event_ids.inspect + user.event_ids.inspect
      # # now add in the 
      
      # params[:user][:event_ids].each do |event_id|
      #   event = Event.find(event_id)
      #   if !user.events.exists?(event_id) #prevents duplicate registrations
      #     user.registrations.build(event_id: event_id)
      #   end
      # end
    end

    if user.save
      redirect_to registrations_path
    else
      render text: 'error: user did not save' and return
      # redirect_to free_seminars_path
    end
  end

end
