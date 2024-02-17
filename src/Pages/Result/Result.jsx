import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ComingSoonComp from '../../Components/Coming_soon/Coming_soon'
import Navbar from '../../Components/Nav/Nav'
import Footer from '../../Sections/Footer/Footer'
import { cricket_result_1 } from '../../Data/Result/CricketResult'
import { cricket_result_2 } from '../../Data/Result/CricketResult'
import { cricket_result_3 } from '../../Data/Result/CricketResult'
import { volleyball_result_1 } from '../../Data/Result/VolleyballResult'
import { volleyball_result_2 } from '../../Data/Result/VolleyballResult'
import { volleyball_result_3 } from '../../Data/Result/VolleyballResult'
import { throwball_result_1 } from '../../Data/Result/ThrowballResult'
import { throwball_result_2 } from '../../Data/Result/ThrowballResult'
import { throwball_result_3 } from '../../Data/Result/ThrowballResult'
import ResultCard from '../../Components/ResultCard/ResultCard'
import "./Result.css"



export default function Result() {

  const [sportResult_day1,setSportResult_day1] = useState([]);
  const [sportResult_day2,setSportResult_day2] = useState([]);
  const [sportResult_day3,setSportResult_day3] = useState([]);
    const { sport } = useParams();
    const [isLoading, setIsLoading] = useState(true);   

    useEffect(() => {
        // Fetch data based on the sport name
        switch (sport) {
            case "Cricket":
               setSportResult_day1(cricket_result_1);
               setSportResult_day2(cricket_result_2);
               setSportResult_day3(cricket_result_3);
                break;
            case "Volleyball":
              setSportResult_day1(volleyball_result_1);
              setSportResult_day2(volleyball_result_2);
              setSportResult_day3(volleyball_result_3);
                break;
            case "Throwball":
              setSportResult_day1(throwball_result_1);
              setSportResult_day2(throwball_result_2);
              setSportResult_day3(throwball_result_3);
                break;
           /*  case "Football":
               setSportResult(football_result);
                break; */
            default:
               setSportResult_day1([]);
               setSportResult_day2([]);
               setSportResult_day3([]);
                break;
        }
    }, [sport]);

    useEffect(() => {
      if (sportResult_day1.length > 0 || sportResult_day2.length > 0 || sportResult_day3.length > 0) {
          setIsLoading(false);
      }
  }, [sportResult_day1,sportResult_day2,sportResult_day3,]);

  return (
    <div>
        <Navbar />
        {isLoading ? (
            <ComingSoonComp />
        ) : (
            <div className='outer-result-cont'>
                <div>
                    <h1 className='result-title'>{sport} Result</h1>
                </div>

                
                {sportResult_day1.length > 0 && (
                    <div>
                        <h1 className='day-heading'>Day 1</h1>
                        <div className='sport-result-container'>
                            {sportResult_day1.map((mp, index) => (
                                <ResultCard key={index} result={mp} />
                            ))}
                        </div>
                    </div>
                )}

               
                {sportResult_day2.length > 0 && (
                    <div>
                        <h1 className='day-heading'>Day 2</h1>
                        <div className='sport-result-container'>
                            {sportResult_day2.map((mp, index) => (
                                <ResultCard key={index} result={mp} />
                            ))}
                        </div>
                    </div>
                )}

                
                {sportResult_day3.length > 0 && (
                    <div>
                        <h1 className='day-heading'>Day 3</h1>
                        <div className='sport-result-container'>
                            {sportResult_day3.map((mp, index) => (
                                <ResultCard key={index} result={mp} />
                            ))}
                        </div>
                    </div>
                )}

            </div>
        )}
        <Footer />
    </div>
);
}
