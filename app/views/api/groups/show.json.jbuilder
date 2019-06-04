json.group do
   json.partial! '/api/groups/:id', group: @group
end