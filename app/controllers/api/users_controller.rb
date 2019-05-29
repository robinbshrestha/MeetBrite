class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            # render :showpage
        else
            render json: @user.errors.full_messages
        end
    end

    private
    def user_params
        params.require(:user).permit(:email, :password, :name)
    end
end
