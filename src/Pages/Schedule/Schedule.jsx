import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Nav/Nav';
import Footer from '../../Sections/Footer/Footer';
import ScheduleCard from '../../Components/ScheduleCard/ScheduleCard';
import { useParams } from 'react-router-dom';
import cricket_schedule from '../../Data/Schedule/CricketSchedule';
import volleyball_schedule from '../../Data/Schedule/VolleyballSchedule';
import football_schedule from '../../Data/Schedule/FootballSchedule';
import ComingSoonComp from '../../Components/Coming_soon/Coming_soon';
import './Schedule.css';

export default function Schedule() {
    const [sportSchedule, setSportSchedule] = useState([]);
    const { sport } = useParams();
    const [isLoading, setIsLoading] = useState(true);   

    useEffect(() => {
        // Fetch data based on the sport name
        switch (sport) {
            case "Cricket":
                setSportSchedule(cricket_schedule);
                break;
            case "Volleyball":
                setSportSchedule(volleyball_schedule);
                break;
           /*  case "Throwball":
                setSportSchedule(cricket_schedule);
                break;
            case "Kabaddi":
                setSportSchedule(cricket_schedule);
                break; */
            case "Football":
                setSportSchedule(football_schedule);
                break;
            default:
                setSportSchedule([]);
                break;
        }
    }, [sport]);

    useEffect(() => {
        if (sportSchedule.length > 0) {
            setIsLoading(false);
        }
    }, [sportSchedule]);

    return (
        <div>
            <Navbar />
            {isLoading ? (
                <ComingSoonComp />
            ) : (
                <div className='outer-schedule-cont'>
                    <div>
                        <h1 className='schedule-title'>{sport} Schedule</h1>
                    </div>
                    <div className='sport-schedule-container'>
                        {sportSchedule.map((mp, index) => (
                            <ScheduleCard key={index} schedule={mp} />
                        ))}
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}
