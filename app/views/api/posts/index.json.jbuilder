@posts.each do |post|
    json.set! post.id do
        json.partial! 'post', post: post
         # "photo" comes from post model
    end
end