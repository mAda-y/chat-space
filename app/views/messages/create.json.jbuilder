json.id @message.id
json.user_name @message.user.name
json.date @message.created_at.date = Date.today
json.content @message.content
json.image @message.image_url
json.group_id @message.group_id 

