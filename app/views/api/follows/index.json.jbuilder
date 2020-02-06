
# @follows.each do |follow|
#   json.set! follow.id do
#     json.partial! 'api/follows/follow', follow: follow
#   end
# end


json.follower @followers.each do |follower|
    json.extract! follower, :id, :follower_id
end

json.followed @followed.each do |following|
    json.extract! following, :id, :followed_id
end