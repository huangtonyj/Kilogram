# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  description     :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  fullname        :string
#

class User < ApplicationRecord

  attr_reader :password

  # Validations

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  # Associations

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

  has_many :likes,
    foreign_key: :user_id,
    class_name: :Like

  has_many :liked_posts,
    through: :likes,
    source: :post

  has_many :follower,
    foreign_key: :followee_id,
    class_name: :Follow
  
  has_many :followee,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followers,
    through: :follower,
    source: :follower
  
  has_many :followees,
    through: :followee,
    source: :followee

  has_many :comments,
    foreign_key: :author_id,
    class_name: :Comment
  
  
  # Auth

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.valid_password?(password) ? user : nil
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def generate_unique_session_token
    session_token = SecureRandom.urlsafe_base64
    while User.find_by(session_token: session_token)
      session_token = SecureRandom.urlsafe_base64
    end
    session_token
  end

end
