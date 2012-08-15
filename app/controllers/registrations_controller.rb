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
end
