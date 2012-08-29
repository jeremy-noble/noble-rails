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
    user = User.find_by_email(params[:user][:email])
    if user.nil?
      user = User.new(params[:user])
    else
      # add registrations to existing user
      params[:user][:event_ids].each do |event_id|
        event = Event.find(event_id)
        if !user.events.exists?(event_id) #prevents duplicate registrations
          user.registrations.build(event_id: event_id)
        end
      end
    end

    if user.save
      redirect_to registrations_path
    else
      render text: 'error'
      # redirect_to free_seminars_path
    end
  end

end
