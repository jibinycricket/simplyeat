class PagesController < ApplicationController
  before_action :authenticate_user!, :except => [:home, :directory]

  def home
    @user = current_user
  end

  def menu
    @sections = Section.all
  end

  def directory
  end

  def info
  end
end
