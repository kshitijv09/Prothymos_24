import React from 'react'
import "./ScheduleCard.css"
export default function ScheduleCard({schedule}) {
    console.log(schedule)
  return (
    <div className='schedule-container'>
        <div className='top-section'>
            <div>{schedule.team1}</div>
            <div>
                VS
                </div>
                <div>{schedule.team2}</div>
       
                
        </div>
        <div className='bottom-section'>
           <div>{schedule.venue}</div>
            <div>
                {schedule.day}
            </div>
            <div>{schedule.time}</div>
        </div>
      
    </div>
  )
}
