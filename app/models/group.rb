class Group < ApplicationRecord
    validates :organizer_id, :location_id, :title, :description, presence: true

    belongs_to :organizer,
    primary_key: :id,
    foreign_key: :organizer_id,
    class_name: 'User'


end
