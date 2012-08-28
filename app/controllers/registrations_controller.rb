class RegistrationsController < ApplicationController

  def index
    @registrations = Registration.all
  end

  def show
    @registration = Registration.find(params[:id])
  end

  def new
    @registration = Registration.new
  end

  def edit
    @registration = Registration.find(params[:id])
  end

  def create
    @registration = Registration.new(params[:registration])

    if @registration.save
      redirect_to @registration, notice: 'Registration was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    @registration = Registration.find(params[:id])

    if @registration.update_attributes(params[:registration])
      redirect_to @registration, notice: 'Registration was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @registration = Registration.find(params[:id])
    @registration.destroy

    redirect_to registrations_url
  end


  def seminar_signup
    # raise params[:user].inspect
    # User.create(params[:user])
    #does user not exist already?


    if !User.exists?(:email => params[:user][:email])
      
      user = User.new(params[:user])

      if user.save
        redirect_to free_seminars_path, notice: 'Registration was successfully created.'
      else
        render root_path
      end

    end

    redirect_to root_path # should be thank you or something

    # raise params.inspect
    
    # create or update user

    # loop through events in form and create new registrations

    

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


end
