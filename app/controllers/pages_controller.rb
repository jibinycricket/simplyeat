class PagesController < ApplicationController
  before_action :authenticate_user!, :except => [:home]

  def home
  end

  def menu
    @sections = Section.all
  end

  def gallery
  end

  def info
  end
end
