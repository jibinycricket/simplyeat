module ApplicationHelper

  def setTitle(page_title = '')
    default_title = "SimplyEat"
    if (page_title == '')
      return default_title;
    else
      return page_title;
    end
  end

  def chooseRestaurantPath(user)
    if user.restaurant.blank?
      new_restaurant_path
    else
      edit_restaurant_path(user)
    end
  end

  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end

end
