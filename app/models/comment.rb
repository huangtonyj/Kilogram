# == Schema Information
#
# Table name: comments
#
#  id                :bigint(8)        not null, primary key
#  post_id           :integer          not null
#  parent_comment_id :integer
#  author_id         :integer          not null
#  comment           :text             not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Comment < ApplicationRecord

  validates :post_id, :author_id, :comment, presence: true

  belongs_to :post,
    foreign_key: :post_id,
    class_name: :Post

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

end
