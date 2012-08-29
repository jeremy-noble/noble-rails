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
    # raise params.inspect

    user = User.find_by_email(params[:user][:email])

    if user.nil?
      user = User.new(params[:user])
      if !user.save
        return redirect_to free_seminars_url
        # render 'events/free_seminars'
      end
    end

    params[:event_id].each do |event_id|
      registration = Registration.new(event_id: event_id, user_id: user.id)
      if !registration.save
        return redirect_to free_seminars_url
      end
    end

    redirect_to root_path # should be thank you or something
      
  end


end
