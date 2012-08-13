require 'test_helper'

class RegistrationMailerTest < ActionMailer::TestCase
  test "new_registration" do
    mail = RegistrationMailer.new_registration
    assert_equal "New registration", mail.subject
    assert_equal ["to@example.org"], mail.to
    assert_equal ["from@example.com"], mail.from
    assert_match "Hi", mail.body.encoded
  end

end
