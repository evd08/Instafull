class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true
    validates :session_token, presence: true
    validates :password_digest, presence: true 
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password
    before_validation :ensure_session_token

    has_many :posts
    has_many :likes
    has_many :follower
    has_many :comments

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end
end