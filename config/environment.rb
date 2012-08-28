# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
NobleRails::Application.initialize!

# for heroku email sending
  config.action_mailer.delivery_method = :smtp

  ActionMailer::Base.smtp_settings = {
    :address  => "mail.nobledesktop.com",
    :port  => 587,
    :user_name  => "htmlemail@nobledesktop.com",
    :password  => "htmlemail",
    :authentication  => :login
  }

  config.action_mailer.raise_delivery_errors = true
