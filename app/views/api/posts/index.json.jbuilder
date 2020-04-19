@posts.each do |post|
    json.set! post.id do
        json.partial! 'api/posts/post', post: post
         # "photo" comes from post model
    end
end

json.total @total