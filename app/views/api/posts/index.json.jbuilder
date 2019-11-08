@posts.each do |post|
    post.set! post.id do
        post.partial! 'post', post: post
    end
end