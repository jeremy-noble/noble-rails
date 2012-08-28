class UsersController < ApplicationController

  def index
    if params.include? "inactive"# if url has ?inactive in it
      # output inactive users
      @users = User.where(inactive: true)
    else
      # output active users
      @users = User.where(inactive: !true)
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


  def seminar_signup
    
    # create or update user

    # loop through events in form and create new registrations

    render :text => params.inspect

    # registrations = Array.new

    # params[:event_id].each do |event_id|
    #   registrations << {event_id: event_id, user_id: 1}
    # end

    # 

    # registrations = Array.new
    # registrations << {:event_id => 6, :user_id => 1}
    # registrations << {:event_id => 10, :user_id => ''}
    # if Registration.create!(registrations) # use create! to raise an error on failure
    #   render text: "success"
    # else
    #   render text: "failure"
    # end

    # send email
      # to admin
      # to user
      
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
end
