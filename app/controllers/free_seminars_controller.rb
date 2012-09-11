class FreeSeminarsController < ApplicationController

  def index
    @user = User.new
    # set defaults for page display. this should really be javascripted!
    @user.attributes = {first_name: "First Name", last_name: "Last Name", email: "Email"}

    seminar_name_to_find = ['Free Seminar']

    @events = Event.joins(:sessions, :categories).
      where("categories.name = ?",seminar_name_to_find).
      where("date(start_time) > ?", DateTime.now)
    @events.sort_by! { |e| e.start_time }
    @event_days = @events.group_by { |e| [e.start_time.beginning_of_day, e.course_id] }
  end

  def signup

# NEED TO REFACTOR THIS!!!!
    seminar_name_to_find = ['Free Seminar']

    @events = Event.joins(:sessions, :categories).
      where("categories.name = ?",seminar_name_to_find).
      where("date(start_time) > ?", DateTime.now)
    @events.sort_by! { |e| e.start_time }
    @event_days = @events.group_by { |e| [e.start_time.beginning_of_day, e.course_id] }


    @user = User.find_or_initialize_by_email(params[:user][:email])

    @user.attributes = params[:user]

    # this checks to see if the user is valid. if not it will add to .errors array
    @user.valid?

    # add any existing events with events from form
    if ! params[:user][:event_ids].nil?
      event_ids = params[:user][:event_ids].map{|i| i.to_i}
      event_ids.push(@user.event_ids)
      event_ids.flatten!
      event_ids.uniq!
      @user.event_ids = event_ids
    else
      # add an error to the errors array
      @user.errors[:base] << "You must choose a seminar!"
    end

    if @user.errors.empty? && @user.save
      redirect_to registrations_path
    else
      render action: "index"
    end
  end

end
