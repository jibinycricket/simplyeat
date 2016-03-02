class SiteLayoutTest < ActionDispatch::IntegrationTest
  test "layout links" do
    get root_path
    assert_template 'pages/home'
    assert_select "a[href=?]", root_path, count: 2
    assert_select "a[href=?]", menu_path
    assert_select "a[href=?]", gallery_path
    assert_select "a[href=?]", info_path
    assert_select "a[href=?]", new_user_registration_path
    assert_select "a[href=?]", new_user_session_path
  end
end
