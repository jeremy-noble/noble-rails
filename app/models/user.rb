class User < ActiveRecord::Base
  attr_accessible :email, :first_name, :last_name, :inactive

  has_many :registrations
  has_many :events, through: :registrations

  accepts_nested_attributes_for :registrations

  before_save { |user| user.email = email.downcase }
  after_create :new_user_notification

  # let these be blank so the enews signup on the bottom works.
  # (should prob make it so they have to type in a value there.)
    # validates :first_name, presence: true
    # validates :last_name, presence: true

  validates :first_name, length: { maximum: 80 }
  validates :last_name, length: { maximum: 80 } 
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }

  def name
    self.first_name + ' ' + self.last_name
  end

  def destroy
    run_callbacks :destroy do
      self.inactive = true
      self.save
    end
  end

   private

    def new_user_notification
      UserMailer.new_user(self).deliver
    end

end
