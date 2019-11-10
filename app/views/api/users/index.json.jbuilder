@users.each do |user|
    json.set! user.id do
        json.partial! 'user', user: user
         # "photo" comes from post model
    end
end