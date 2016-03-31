class ShowsController < ApplicationController
  def index
    @shows = Shows.all
    render :template => '_index'
  end
end
