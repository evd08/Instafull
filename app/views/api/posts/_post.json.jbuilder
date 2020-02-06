json.extract! post, :id, :caption, :user_id
if post.photo.attached?
    json.photoUrl url_for(post.photo)
end
json.username post.user.username

like = current_user.likes.select {|like| like.post_id == post.id}.first
if like
    json.likeId like.id
else
    json.likeId like
end

json.countLikes post.likes.length #.likes comes from association

if post.user.pic.attached?
    json.userPic url_for(post.user.pic)
end
