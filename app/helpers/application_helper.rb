module ApplicationHelper

  def setTitle(page_title = '')
    default_title = "Menu Factory"
    if (page_title == '')
      return default_title;
    else
      return default_title + " | " + page_title;
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
