json.extract! group, :id, :organizer_id, :description, :location_id, :title
    if (group.photo.attached?)
        json.photo url_for(group.photo)
    end