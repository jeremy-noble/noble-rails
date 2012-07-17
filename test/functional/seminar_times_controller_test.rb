require 'test_helper'

class SeminarTimesControllerTest < ActionController::TestCase
  setup do
    @seminar_time = seminar_times(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:seminar_times)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create seminar_time" do
    assert_difference('SeminarTime.count') do
      post :create, seminar_time: { end_date: @seminar_time.end_date, seminar_id: @seminar_time.seminar_id, start_date: @seminar_time.start_date }
    end

    assert_redirected_to seminar_time_path(assigns(:seminar_time))
  end

  test "should show seminar_time" do
    get :show, id: @seminar_time
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @seminar_time
    assert_response :success
  end

  test "should update seminar_time" do
    put :update, id: @seminar_time, seminar_time: { end_date: @seminar_time.end_date, seminar_id: @seminar_time.seminar_id, start_date: @seminar_time.start_date }
    assert_redirected_to seminar_time_path(assigns(:seminar_time))
  end

  test "should destroy seminar_time" do
    assert_difference('SeminarTime.count', -1) do
      delete :destroy, id: @seminar_time
    end

    assert_redirected_to seminar_times_path
  end
end
