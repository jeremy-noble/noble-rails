class RegistrationMailer < ActionMailer::Base
  default from: "from@web@nobledesktop.com"

  def new_registration(registration)
    @registration = registration

    mail to: "jeremy@nobledesktop.com", subject: "!!!New Registration"
  end

  def registration_thank_you(registration, user)
    @registration = registration
    @user = user

    mail to: @user.email, subject: "You've Registered for a Noble Desktop Class"
  end

end
