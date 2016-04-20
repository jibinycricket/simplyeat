class SchedulesController < ApplicationController
  def index
  end

  def new
    @schedule = current_user.build_schedule
  end

  def create
    @schedule = current_user.create_schedule(schedule_params)
    if @schedule.save
      flash[:success] = "Schedule information has been saved"
      redirect_to current_user
    else
      flash[:alert] = "Schedule information was not saved"
      render :new
    end
  end

  def edit
    @schedule = current_user.schedule
  end

  def update
    if current_user.schedule.update(schedule_params)
      flash[:success] = "Schedule information has been updated"
      redirect_to current_user
    else
      redirect_to edit_schedule_path
      flash[:alert] = "Schedule information has been updated"
    end
  end
  private

  def schedule_params
    params.require(:schedule).permit(:monStart, :monEnd, :monOpen,
                                     :tueStart, :tueEnd, :tueOpen,
                                     :wedStart, :wedEnd, :wedOpen,
                                     :thuStart, :thuEnd, :thuOpen,
                                     :friStart, :friEnd, :friOpen,
                                     :satStart, :satEnd, :satOpen,
                                     :sunStart, :sunEnd, :sunOpen)
  end
end
