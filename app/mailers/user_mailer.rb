class UserMailer < ActionMailer::Base
  default from: "web@nobledesktop.com"

  def new_user(user)
    @user = user

    mail to: "jeremy@nobledesktop.com", subject: "!!!New User"
  end

end
