# == Schema Information
#
# Table name: posts
#
#  id          :bigint(8)        not null, primary key
#  author_id   :integer          not null
#  caption     :text
#  location_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ApplicationRecord

  validates :author_id, presence: true
  validate :ensure_photo

  has_one_attached :photo

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "must be attached"
    end
  end

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :likes,
    foreign_key: :post_id,
    class_name: :Like

  has_many :likers,
    through: :likes,
    source: :user

end
