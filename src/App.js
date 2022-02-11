import {useState} from "react";
import './App.css';
import {DateHeader} from "./components/DateHeader";
import {HourBlocks} from "./components/HourBlocks";
import {AddNewEvent} from "./components/AddNewEvent";

function App() {

    let [events, updateEvents] = useState([{
        title: "Aerial hoop class",
        start: 18,
        duration: 2.5
    }, {
        title: "Laka Interview",
        start: 14.5,
        duration: 1
    }, {
        title: "Yoga",
        start: 9,
        duration: 2
    }])
    let [eventTitle, setTitle] = useState("")
    let [startTime, setStartTime] = useState("")
    let [duration, setDuration] = useState("")

    return (
        <div className="app">
            <DateHeader
                date={"Friday 11th February 2022"}/>
            <AddNewEvent
                updateTitle={(event) => {
                    setTitle(event.target.value)
                }}
                updateStartTime={(event) => {
                    setStartTime(event.target.value)
                }}
                updateDuration={(event) => {
                    setDuration(event.target.value)
                }}
                updateEvents={(event) => {
                    updateEvents([...events, {title: eventTitle, start: startTime, duration: duration}])
                    event.preventDefault()
                }}/>
            <div className="calendar-container">
                <HourBlocks/>
                {events.map((item, index) => {
                        return (
                            <div key={index} style={{
                                height: item.duration * 60 + "px",
                                width: "40%",
                                position: "absolute",
                                top: item.start * 60,
                                left: "150px",
                                backgroundColor: "Aquamarine",
                                fontSize: "0.75rem",
                                zValue: 5
                            }}>
                                <h3>{item.title}</h3>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    );
}

export default App;
