class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @message = 'Thanks for signing up!'
      render 'new'
    else
      @message = 'There was an error in sign up, please try again'
      render 'new'
    end
  end

  private

    def user_params
      params.require(:user).permit(:email)
    end
end
