json.extract! group, :id, :organizer, :description, :location_id, :title
    if (group.photo.attached?)
        json.photo url_for(group.photo)
    end

members = []

group.members.each do |member|
  members.push(member.id)
  # members.length
end 


json.membersarray members.length
json.members members