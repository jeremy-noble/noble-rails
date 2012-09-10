class EventsController < ApplicationController
  # GET /events
  def index
    # @events = Event.joins(:sessions).order("date(start_time)").group('event_id') 
      # this unfonately will not list an event if it doesn't yet have any sessions
    @events = Event.all
  end

  def free_seminars
    # make this dynamic somehow?
    seminar_name_to_find = ['Free Seminar']

    @events = Event.joins(:sessions, :categories).
      where("categories.name = ?", seminar_name_to_find).
      where("date(start_time) > ?", DateTime.now).
      order("date(start_time) desc")

    @event_days = @events.group_by { |e| [e.start_time.beginning_of_day, e.course_id] }
  end

  # GET /events/1
  def show
    @event = Event.find(params[:id])
  end

  # GET /events/new
  def new
    @event = Event.new
  end

  # GET /events/1/edit
  def edit
    @event = Event.find(params[:id])
  end

  # POST /events
  def create
    @event = Event.new(params[:event])

    if @event.save
      redirect_to @event, notice: 'Event was successfully created.'
    else
      render action: "new"
    end
  end

  # PUT /events/1
  def update
    # raise params.inspect
    @event = Event.find(params[:id])

    if @event.update_attributes(params[:event])
      redirect_to @event, notice: 'Event was successfully updated.' 
    else
      render action: "edit" 
    end
  end

  # DELETE /events/1
  def destroy
    @event = Event.find(params[:id])
    @event.destroy

    redirect_to events_url
  end

end
