json.id @message.id
json.user_name @message.user.name
json.date @message.created_at.date = Date.today
datetime = DateTime.now

date.to_s
=> "2019年01月10日"

# date.to_s(:date)
# => "01/10"

# datetime.to_s
# => "2019年01年10日 12時00分"

# datetime.to_s(:datetime)
# => "2019/01/10 12:00"

json.content @message.content
json.image @message.image_url


