module SchedulesHelper
  def chooseSchedulePath
    @schedule = Schedule.find_by(user_id: current_user.id)
    unless @schedule.nil?
      return edit_schedule_path(current_user)
    else
      return new_schedule_path 
    end
  end
  
  def mToCTime(mTime)
    #Convert mTime string to useable int
    mTime.sub!(/\D/,"")
    mTime = mTime.to_i 
    
    #Convert to Civilian Time
    if mTime == 0
      return "12:00 AM"
    elsif mTime > 1300 #convert to normal time
      cTime = (mTime - 1200)
    else
      cTime = mTime
    end
    
    #Choose AM or PM
    if mTime >= 1200
      amPM = " PM"
    else
      amPM = " AM"
    end
    
    #Add hyphen and combine Time and AM/PM
    if cTime <1000
      cTime = cTime.to_s
      cTime.insert 1 , ":"
      return cTime + amPM
    else
      cTime = cTime.to_s
      cTime.insert 2, ":"
      return cTime + amPM
    end
  end

  def openOrClosed(startTime, endTime)
    if (startTime == nil || endTime == nil)
      return "Closed"
    else
      mToCTime(startTime) + " - " + mToCTime(endTime)
    end
  end

  def time_format(datetime)
    #datetime.strftime('%H:%M') unless datetime.blank?
    datetime.strftime('%I:%M') unless datetime.blank?
  end
end
