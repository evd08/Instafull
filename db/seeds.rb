# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Like.destroy_all
Post.destroy_all
User.destroy_all


user1 = User.create( username: "demo", name: "demo", email: "demo@gmail.com", password: "Philippines" );
profilePic1 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ph1.png')
user1.picUrl.attach(io: profilePic1, filename: 'ph1.png')


user2 = User.create( username: "iceland", name:"Iceland", email: "iceland@io.com", password: "Iceland" );
profilePic2 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ice6.png')
user2.picUrl.attach(io: profilePic2, filename: 'ice6.png')


user3 = User.create( username: "thailand", name: "Thailand", email: "thailand@io.com", password: "Thailand" );
profilePic3 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/thai3.png')
user3.picUrl.attach(io: profilePic3, filename: 'thai3.png')


user4 = User.create( username: "australia", name: "Australia", email: "australia@io.com", password: "Australia" );
# profilePic4 = open('')
# user4.picUrl.attach(io: profilePic4, filename: '')


user5 = User.create( username: "bali", name: "Bali", email: "bali@io.com", password: "Bali" );
profilePic5 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/bali2.png')
user5.picUrl.attach(io: profilePic5, filename: 'bali2.png')





post1 = Post.create(caption: 'beautiful island', user_id: 1)
picture1 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ph2.png')
post1.photoUrl.attach(io: picture1, filename: 'ph2.png')

post2 = Post.create(caption: 'Chocolate hills in Bohol', user_id: 1)
picture2 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ph3.png')
post2.photoUrl.attach(io: picture2, filename: 'ph3.png')

post3 = Post.create(caption: 'serenity', user_id: 1)
picture3 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ph4.png')
post3.photoUrl.attach(io: picture3, filename: 'ph4.png')

post4 = Post.create(caption: 'beautiful disaster', user_id: 1)
picture4 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ph5.png')
post4.photoUrl.attach(io: picture4, filename: 'ph5.png')

post5 = Post.create(caption: 'best way to end the day', user_id: 1)
picture5 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ph6.png')
post5.photoUrl.attach(io: picture5, filename: 'ph6.png')

post6 = Post.create(caption: 'tagaytay', user_id: 1)
picture6 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ph7.png')
post6.photoUrl.attach(io: picture6, filename: 'ph7.png')

post7 = Post.create(caption: 'underground river', user_id: 1)
picture7 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ph8.png')
post7.photoUrl.attach(io: picture7, filename: 'ph8.png')

post8 = Post.create(caption: 'aurora borealis', user_id: 2)
picture8 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ice1.png')
post8.photoUrl.attach(io: picture8, filename: 'ice1.png')

post9 = Post.create(caption: 'water falls <3', user_id: 2)
picture9 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ice2.png')
post9.photoUrl.attach(io: picture9, filename: 'ice2.png')

post10 = Post.create(caption: '', user_id: 2)
picture10 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ice3.png')
post10.photoUrl.attach(io: picture10, filename: 'ice3.png')

post11 = Post.create(caption: '<3', user_id: 2)
picture11 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ice4.png')
post11.photoUrl.attach(io: picture11, filename: 'ice4.png')

post12 = Post.create(caption: 'heaven', user_id: 2)
picture12 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/ice5.png')
post12.photoUrl.attach(io: picture12, filename: 'ice5.png')

post13 = Post.create(caption: 'temple', user_id: 3)
picture13 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/thai1.png')
post13.photoUrl.attach(io: picture13, filename: 'thai1.png')

post14 = Post.create(caption: 'these amazing colors', user_id: 3)
picture14 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/thai2.png')
post14.photoUrl.attach(io: picture14, filename: 'thai2.png')

post15 = Post.create(caption: 'Sydney Opera House', user_id: 4)
picture15 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/aus1.png')
post15.photoUrl.attach(io: picture15, filename: 'aus1.png')

post16 = Post.create(caption: '', user_id: 5)
picture16 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/bali1.png')
post16.photoUrl.attach(io: picture16, filename: 'bali1.png')

post17 = Post.create(caption: 'The gates of heaven', user_id: 5)
picture17 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/bali3.png')
post17.photoUrl.attach(io: picture17, filename: 'bali3.png')

post18 = Post.create(caption: 'Swing', user_id: 5)
picture18 = open('https://instaclone-seeds.s3-us-west-1.amazonaws.com/bali4.png')
post18.photoUrl.attach(io: picture18, filename: 'bali4.png')







likes = Like.create!([
    { user_id: 1, post_id: 13},
    { user_id: 1, post_id: 15},
    { user_id: 1, post_id: 18},
    { user_id: 2, post_id: 3},
    { user_id: 2, post_id: 7},
    { user_id: 2, post_id: 16},
    { user_id: 3, post_id: 16},
    { user_id: 3, post_id: 7},
    { user_id: 3, post_id: 8},
    { user_id: 3, post_id: 2},
    { user_id: 3, post_id: 5},
    { user_id: 3, post_id: 18},
    { user_id: 4, post_id: 8},
    { user_id: 4, post_id: 3},
    { user_id: 5, post_id: 8},
    { user_id: 5, post_id: 2},
])

