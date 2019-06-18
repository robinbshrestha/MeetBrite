class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    # has_many :groups,
    # primary_key: :id,
    # foreign_key: :organizer_id,
    # class_name: 'Group'

    # has_many :memberships,
    # foreign_key: :user_id,
    # class_name: 'Membership'

    # has_many :group_memberships,
    # through: :memberships,
    # source: :group
    

    # has_one_attached :photo

    has_one_attached :photo
    has_many :memberships

    has_many :group_memberships,
        through: :memberships,
        source: :group

    has_many :groups,
        foreign_key: :organizer_id,
        primary_key: :id,
        class_name: 'Group'

    after_initialize :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless (user && user.is_password?(password))
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    protected
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end