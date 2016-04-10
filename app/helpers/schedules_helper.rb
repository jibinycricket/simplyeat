module SchedulesHelper
  def chooseSchedulePath
    @schedule = Schedule.find_by(user_id: current_user.id)
    unless @schedule.nil?
      return edit_schedule_path(current_user)
    else
      return new_schedule_path 
    end
  end
end
