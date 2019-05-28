class User < ApplicationRecord
    # attr_reader :password

    # validates :email, :password_digest, :session_token presence: true
    # validates :email, uniqueness: true
    # validates :password, length: { minimum: 6, allow_nil: true }
    # after_initialize :ensure_session_token

    # def self.find_by_credentials(user_params)
    #     user = User.find_by(email: user_params[:email])
    #     user && user.is_password?(user_params[:password]) ? user : nil
    # end

    # def ensure_session_token
    #     self.session_token = SecureRandom::urlsafe_base64
    # end

    # def is_password?(password)
    #     @password = password
    #     self.password_digest = BCrypt::Password.create(password)
    # end

    # def reset_session_token
    #     update!(session_token: SecureRandom::urlsafe_base64)
    #     session_token
    # end

end