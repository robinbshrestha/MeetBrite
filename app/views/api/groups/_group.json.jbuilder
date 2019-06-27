members = []

member_avatars = []

group.members.each do |member|
  members.push(member.id)
  if member.photo.attached?
    member_avatars.push(url_for(member.photo)) 
  end 
end 


# group.members.each do |member|
#   members.push(member.id)
#   # members.length
# end 

json.extract! group, :id, :organizer, :description, :location_id, :title
    if (group.photo.attached?)
        json.photo url_for(group.photo)
    end




json.membersarray members.length

json.members members

json.member_avatars member_avatars
