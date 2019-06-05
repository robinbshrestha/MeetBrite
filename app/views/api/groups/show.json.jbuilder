json.group do
   json.partial! '/api/groups/group', group: @group
end

json.user do
  json.extract! @group.organizer, :id, :name
    if (@group.organizer.photo.attached?)
      json.photo url_for(@group.organizer.photo)
    end
end