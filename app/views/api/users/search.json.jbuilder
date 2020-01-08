@users.each do |user|
  # debugger
  json.set! user.id do 
    json.id user.id
    json.username user.username
    if user.pic.attached?
      json.picUrl url_for(user.pic)
    end
  end
end