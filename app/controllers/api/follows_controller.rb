class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id

    if @follow.save
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  def destroy
    @follow = Follow.where(followed_id: params[:id]).where(follower_id: current_user.id)
    @follow = @follow.first

    if @follow
      @follow.destroy
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  def index
    @followed = Follow.where(follower_id: params[:userId])
    @followers = Follow.where(followed_id: params[:userId])
    @follows = @followed.or(@followers)
  end

  def show
    @follow = Follow.find(params[:id])
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end

end
