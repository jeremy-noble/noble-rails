class EventsController < ApplicationController
  # GET /events
  def index
    # @events = Event.joins(:sessions).order("date(start_time)").group('event_id') 
      # this unfonately will not list an event if it doesn't yet have any sessions
    @events = Event.all
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

  def free_seminars
    @errors = {}
    # make this dynamic somehow?
    seminar_name_to_find = ['Free Seminar']

    @events = Event.joins(:sessions, :categories).
      where("categories.name = ?", seminar_name_to_find).
      where("date(start_time) > ?", DateTime.now).
      order("date(start_time) desc")

    @event_days = @events.group_by { |e| [e.start_time.beginning_of_day, e.course_id] }
  end

  def free_seminars_signup

    # raise params.inspect

    user = User.find_by_email(params[:user][:email])

    if user.nil?
      user = User.new(params[:user])
    else
      user.update_attributes(params[:user])
    end

    begin
      ActiveRecord::Base.transaction do
        user.save!
        params[:event_ids].each do |e|
         registration = Registration.new({event_id: e, user_id: user.id})
         registration.save!
       end
      end
    rescue ActiveRecord::RecordInvalid => invalid
      # do whatever you wish to warn the user, or log something
      @errors = invalid.record.errors
      render action: "free_seminars"
      # raise @errors.inspect
    end

    # if params[:user][:event_ids].nil?
    #   render text: 'error: no event was chosen' and return
    # end

    # user = User.find_by_email(params[:user][:email])
    # if user.nil?
    #   user = User.new(params[:user])
    # else
    #   user.update_attributes(params[:user])
    # end

    # if user.save
    #   redirect_to registrations_path
    # else
    #   render text: 'error: user did not save' and return
    #   # redirect_to free_seminars_path
    # end

    redirect_to free_seminars_path

  end

end
