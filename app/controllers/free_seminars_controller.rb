class FreeSeminarsController < ApplicationController
  require 'shared' #app/modules/shared.rb

  def index
    @user = User.new

    # set defaults for page display.
    @user.attributes = {first_name: "First Name", last_name: "Last Name", email: "Email"}

    # get all the events of a certain category and group them by day
    @event_days = Shared::category_group_by_day(['Free Seminar', 'Online Seminar'])
  end

  def signup
    # get all the events of a certain category and group them by day
    @event_days = Shared::category_group_by_day(['Free Seminar', 'Online Seminar'])

    # lookup user or create new one
    @user = User.find_or_initialize_by_email(params[:user][:email])

    # update user attributes
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

    # if all is well, save
    if @user.errors.empty? && @user.save
      redirect_to registrations_path
    else
      render action: "index"
    end
  end

end
