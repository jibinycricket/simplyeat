class AddColumnsToSchedule < ActiveRecord::Migration
  def change
    add_column :schedules, :monStart, :time
    add_column :schedules, :monEnd, :time
    add_column :schedules, :monOpen, :boolean

    add_column :schedules, :tueStart, :time
    add_column :schedules, :tueEnd, :time
    add_column :schedules, :tueOpen, :boolean

    add_column :schedules, :wedStart, :time
    add_column :schedules, :wedEnd, :time
    add_column :schedules, :wedOpen, :boolean

    add_column :schedules, :thuStart, :time
    add_column :schedules, :thuEnd, :time
    add_column :schedules, :thuOpen, :boolean

    add_column :schedules, :friStart, :time
    add_column :schedules, :friEnd, :time
    add_column :schedules, :friOpen, :boolean
  end
end
