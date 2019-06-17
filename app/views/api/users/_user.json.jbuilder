json.extract! user, :id, :name, :email
json.group_memberships user.group_membership_ids
