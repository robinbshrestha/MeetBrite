class Group < ApplicationRecord
    validates :organizer_id, :location_id, :title, :description, presence: true

    has_one_attached :photo

    belongs_to :organizer,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: 'User'

    has_many :memberships
    
    has_many :members,
    through: :memberships,
    source: :user
end
