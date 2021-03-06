class Registration < ActiveRecord::Base
  attr_accessible :event_id, :user_id

  belongs_to :event
  belongs_to :user

  validates :event_id, presence: true
  validates :user_id, presence: true
  validate :event_exists
  validate :user_exists

  after_create :new_registration_notification
  after_create :registration_thank_you_notification

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

  # def user_first_name
  #   self.user.first_name if self.user
  # end

  # def user_first_name=(str)
  #   self.event.course = Course.find_or_create_by_name(str.strip) if str.present?    
  # end

  # def add_user_to_registration(user)
  #   user = User.find_by_email(user.email)

  #   if user.nil?
  #     self.user << User.create(user)
  #   else
  #     self.user << user
  #   end
  # end

  private

    def new_registration_notification
      RegistrationMailer.new_registration(self).deliver
    end

    def registration_thank_you_notification
      @user = User.find(user_id)
      RegistrationMailer.registration_thank_you(self, @user).deliver
    end    

end
