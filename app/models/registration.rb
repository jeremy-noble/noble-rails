class Registration < ActiveRecord::Base
  attr_accessible :event_id, :user_id

  belongs_to :event
  belongs_to :user

  validates :event_id, presence: true
  validates :user_id, presence: true
  validate :event_exists
  validate :user_exists

  after_create :new_registration_notification

  def event_exists
    if !Event.exists?(event_id)
      errors.add(:Event, 'does not exist.')
    end
  end

  def user_exists
    if !User.exists?(user_id)
      errors.add(:User, 'does not exist.')
    end
  end


  private

    def new_registration_notification
      RegistrationMailer.new_registration(self).deliver
    end

end
