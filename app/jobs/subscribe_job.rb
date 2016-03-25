class SubscribeJob
  include SuckerPunch::Job

  def perform(id)
    ActiveRecord::Base.connection_pool.with_connection do
      user = User.find(id)
      mailchimp_list_id = Rails.application.secrets.mailchimp_list_id
      email = user.email

      begin
        gb = Gibbon::Request.new
        gb.lists.subscribe({id: mailchimp_list_id, email: {email: email}})
      end
    end

  end


end
