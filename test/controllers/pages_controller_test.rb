require 'test_helper'
class ActionController::TestCase
  include Devise::TestHelpers
end

class PagesControllerTest < ActionController::TestCase
  def setup
    @base_title = "Menu Factory"
  end

  test "should get home" do
    get :home
    assert_response :success
    assert_select "title", "#{@base_title}"
  end

  test "should get menu" do
    get :menu
    assert_response :success
    assert_select "title", "#{@base_title} | Design"
  end

  test "should get gallery" do
    get :gallery
    assert_response :success
    assert_select "title", "#{@base_title} | Gallery"
  end

  test "should get info" do
    get :info
    assert_response :success
    assert_select "title", "#{@base_title} | Contact"
  end

end
