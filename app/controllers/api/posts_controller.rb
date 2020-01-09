class Api::PostsController < ApplicationController

    def index 
        @posts = Post.where(user_id: params[:user_id])
        # debugger
        # @posts = Post.where(username: params[:username])
    end

    def show 
        @post = Post.find(params[:id])
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find(params[:id])

        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find(params[:id])

        if @post.destroy
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private

    def post_params
        params.require(:post).permit(:caption, :photo)
    end
end
