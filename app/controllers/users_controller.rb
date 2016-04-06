class UsersController < ApplicationController

  def new
    @user = User.new
    @shows = Show.all.order("date DESC")
  end

  def create
    @user = User.new(user_params)
    if @user.save
      SubscribeJob.new.async.perform(@user.id)
      @shows = Show.all.order("date DESC")
      render 'new'
    else
      format.json { render :json => { :error => @user.errors.full_messages }, :status => 422 }
      @shows = Show.all.order("date DESC")
      render 'new'
    end
  end



  private

    def user_params
      params.require(:user).permit(:email)
    end
end
