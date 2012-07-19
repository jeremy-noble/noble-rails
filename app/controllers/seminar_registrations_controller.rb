class SeminarRegistrationsController < ApplicationController
  # GET /seminar_registrations
  # GET /seminar_registrations.json
  def index
    @seminar_registrations = SeminarRegistration.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @seminar_registrations }
    end
  end

  # GET /seminar_registrations/1
  # GET /seminar_registrations/1.json
  def show
    @seminar_registration = SeminarRegistration.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @seminar_registration }
    end
  end

  # GET /seminar_registrations/new
  # GET /seminar_registrations/new.json
  def new
    @seminar_registration = SeminarRegistration.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @seminar_registration }
    end
  end

  # GET /seminar_registrations/1/edit
  def edit
    @seminar_registration = SeminarRegistration.find(params[:id])
  end

  # POST /seminar_registrations
  # POST /seminar_registrations.json
  def create
    @seminar_registration = SeminarRegistration.new(params[:seminar_registration])

    respond_to do |format|
      if @seminar_registration.save
        format.html { redirect_to @seminar_registration, notice: 'Seminar registration was successfully created.' }
        format.json { render json: @seminar_registration, status: :created, location: @seminar_registration }
      else
        format.html { render action: "new" }
        format.json { render json: @seminar_registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /seminar_registrations/1
  # PUT /seminar_registrations/1.json
  def update
    @seminar_registration = SeminarRegistration.find(params[:id])

    respond_to do |format|
      if @seminar_registration.update_attributes(params[:seminar_registration])
        format.html { redirect_to @seminar_registration, notice: 'Seminar registration was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @seminar_registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /seminar_registrations/1
  # DELETE /seminar_registrations/1.json
  def destroy
    @seminar_registration = SeminarRegistration.find(params[:id])
    @seminar_registration.destroy

    respond_to do |format|
      format.html { redirect_to seminar_registrations_url }
      format.json { head :no_content }
    end
  end
end
