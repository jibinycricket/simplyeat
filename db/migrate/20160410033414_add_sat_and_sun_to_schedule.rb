class AddSatAndSunToSchedule < ActiveRecord::Migration
  def change
    add_column :schedules, :satStart, :time
    add_column :schedules, :satEnd, :time
    add_column :schedules, :satOpen, :boolean

    add_column :schedules, :sunStart, :time
    add_column :schedules, :sunEnd, :time
    add_column :schedules, :sunOpen, :boolean
  end
end
