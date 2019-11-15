class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
        @users = User.all
    end

    def show 
        @user = User.find(params[:id])
    end

    def update
        @user = User.find(params[:id])
        if user_params[:pic]
            @user.pic.attach(user_params[:pic])
            # @user.update_attribute(:pic, user_params[:pic])
        end
        render "api/users/show"
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :name, :email, :pic, :id)
    end
end