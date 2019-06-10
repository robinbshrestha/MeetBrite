class Membership < ApplicationRecord
    # belongs_to :user,
    # foreign_key: :user_id,
    # class_name: 'User'

    # belongs_to :group,
    # foreign_key: :group_id,
    # class_name: 'Group'

    # has_many :memberships,
    # through: :user_memberships,
    # source: 'User'

  validates :user_id, :group_id, presence: true

  belongs_to :user 
  belongs_to :group
end
