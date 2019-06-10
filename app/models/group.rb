class Group < ApplicationRecord
    validates :organizer_id, :location_id, :title, :description, presence: true

    belongs_to :organizer,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: 'User'

    has_many :user_memberships,
    foreign_key: :group_id,
    class_name: 'Membership'

    has_many :members,
    through: :user_memberships,
    source: 'User'

    has_one_attached :photo


end
