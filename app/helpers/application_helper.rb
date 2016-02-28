module ApplicationHelper

def setTitle(page_title = '')
  default_title = "Menu Factory"
  if (page_title == '')
    return default_title;
  else
    return default_title + " | " + page_title;
  end
end

end
