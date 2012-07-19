require 'test_helper'

class SeminarRegistrationsControllerTest < ActionController::TestCase
  setup do
    @seminar_registration = seminar_registrations(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:seminar_registrations)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create seminar_registration" do
    assert_difference('SeminarRegistration.count') do
      post :create, seminar_registration: { seminar_time_id: @seminar_registration.seminar_time_id, user_id: @seminar_registration.user_id }
    end

    assert_redirected_to seminar_registration_path(assigns(:seminar_registration))
  end

  test "should show seminar_registration" do
    get :show, id: @seminar_registration
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @seminar_registration
    assert_response :success
  end

  test "should update seminar_registration" do
    put :update, id: @seminar_registration, seminar_registration: { seminar_time_id: @seminar_registration.seminar_time_id, user_id: @seminar_registration.user_id }
    assert_redirected_to seminar_registration_path(assigns(:seminar_registration))
  end

  test "should destroy seminar_registration" do
    assert_difference('SeminarRegistration.count', -1) do
      delete :destroy, id: @seminar_registration
    end

    assert_redirected_to seminar_registrations_path
  end
end
