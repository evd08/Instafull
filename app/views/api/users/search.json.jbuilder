@users.each do |user|
  # debugger
  json.set! user.id do 
    json.id user.id
    json.username user.username
    if user.pic.attached?
      json.picUrl url_for(user.pic)
    end

    # debugger
    # if user.followers
    #   json.follower user.followers
    # end

    # if user.followings
    #   json.followed user.followings
    # end

    # json.followerCount user.followers.length
    # json.followingCount user.followings.length
    # debugger
    # debugger
    # if user.followers.include?(current_user.id)
      
    # end
  end
end