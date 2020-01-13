class Follow < ApplicationRecord
  validates :follower_id, uniqueness:{scope: :followed_id}

  belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :following,
    foreign_key: :followed_id,
    class_name: :User
end
