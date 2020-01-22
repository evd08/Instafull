class Api::PostsController < ApplicationController

    def index 
        user_ids = params[:user_id].split(",").map(&:to_i)
        @posts = Post.where(user_id: user_ids)
        # @posts = (@posts.sort_by &:updated_at).reverse()
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
