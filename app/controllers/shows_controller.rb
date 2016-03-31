class ShowsController < ApplicationController
  

  def new
    @show = Show.new
  end

  def create
    @show = Show.new(show_params)
    if @show.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  private

    def show_params
      params.require(:show).permit(:title, :show_url, :venue_name, :venue_link, :date, :ticket_url, :poster_url)
    end

end
