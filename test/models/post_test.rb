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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
