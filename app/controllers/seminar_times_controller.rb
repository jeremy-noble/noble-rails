class SeminarTimesController < ApplicationController
  # GET /seminar_times
  # GET /seminar_times.json
  def index
    # @seminar_times = SeminarTime.all

    #@seminar_times = SeminarTime.group('date(start_date), seminar_id')

    @seminar_times = SeminarTime.find(:all, :order => 'start_date, seminar_id')
    @jeremy = @seminar_times.group_by { |t| t.start_date.day }
    #@seminar_times_days_seminars = @seminar_times_days.group_by { |s| s.@seminar_times_days.seminar_id }

    #@seminar_times_by_day_and_id = @seminar_times.group_by { |s| s.start_date.day }

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @seminar_times }
    end
  end

  # GET /seminar_times/1
  # GET /seminar_times/1.json
  def show
    @seminar_time = SeminarTime.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @seminar_time }
    end
  end

  # GET /seminar_times/new
  # GET /seminar_times/new.json
  def new
    @seminar_time = SeminarTime.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @seminar_time }
    end
  end

  # GET /seminar_times/1/edit
  def edit
    @seminar_time = SeminarTime.find(params[:id])
  end

  # POST /seminar_times
  # POST /seminar_times.json
  def create
    @seminar_time = SeminarTime.new(params[:seminar_time])

    respond_to do |format|
      if @seminar_time.save
        format.html { redirect_to @seminar_time, notice: 'Seminar time was successfully created.' }
        format.json { render json: @seminar_time, status: :created, location: @seminar_time }
      else
        format.html { render action: "new" }
        format.json { render json: @seminar_time.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /seminar_times/1
  # PUT /seminar_times/1.json
  def update
    @seminar_time = SeminarTime.find(params[:id])

    respond_to do |format|
      if @seminar_time.update_attributes(params[:seminar_time])
        format.html { redirect_to @seminar_time, notice: 'Seminar time was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @seminar_time.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /seminar_times/1
  # DELETE /seminar_times/1.json
  def destroy
    @seminar_time = SeminarTime.find(params[:id])
    @seminar_time.destroy

    respond_to do |format|
      format.html { redirect_to seminar_times_url }
      format.json { head :no_content }
    end
  end
end
