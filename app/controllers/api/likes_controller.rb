class Api::LikesController < ApplicationController
    def create
        @like = Like.new(like_params)
        @like.user_id = current_user.id

        if @like.save
            render "api/likes/show"
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        # @like = Like.find(params[:id])
        @like = Like.where(post_id: params[:data][:post_id]).where(user_id: params[:data][:currentUserId])
        @like = @like.first

        if @like
            @like.destroy 
            render "api/likes/show"
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def index
        # @likes = Like.where(post_id: params[:post_id])
        @likes = Like.all
    end

    def show
        @like = Like.find(params[:id])
    end

    private
    def like_params
        params.require(:like).permit(:user_id, :post_id)
    end
end


