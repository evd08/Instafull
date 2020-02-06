json.extract! user, :id, :username, :email, :name
if user.pic.attached?
    json.picUrl url_for(user.pic)
end

    if user.followers
      json.follower user.followers
    end

    if user.followings
      json.followed user.followings
    end

    json.followerCount user.followers.length
    json.followingCount user.followings.length