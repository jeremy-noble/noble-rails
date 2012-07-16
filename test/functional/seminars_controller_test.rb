require 'test_helper'

class SeminarsControllerTest < ActionController::TestCase
  setup do
    @seminar = seminars(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:seminars)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create seminar" do
    assert_difference('Seminar.count') do
      post :create, seminar: { name: @seminar.name }
    end

    assert_redirected_to seminar_path(assigns(:seminar))
  end

  test "should show seminar" do
    get :show, id: @seminar
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @seminar
    assert_response :success
  end

  test "should update seminar" do
    put :update, id: @seminar, seminar: { name: @seminar.name }
    assert_redirected_to seminar_path(assigns(:seminar))
  end

  test "should destroy seminar" do
    assert_difference('Seminar.count', -1) do
      delete :destroy, id: @seminar
    end

    assert_redirected_to seminars_path
  end
end
