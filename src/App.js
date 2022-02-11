import {useState} from "react";
import './App.css';
import {DateHeader} from "./components/DateHeader";
import {HourBlocks} from "./components/HourBlocks";

function App() {

    let [events, updateEvents] = useState([{
        title: "Aerial hoop class",
        start: 18,
        duration: 2.5
    }, {title: "Laka Interview",
        start: 14.5,
        duration: 1
    }, {title: "Yoga",
        start: 9,
        duration: 2}])
    let [eventTitle, setTitle] = useState("")
    let [startTime, setStartTime] = useState("")
    let [duration, setDuration] = useState("")

    return (
        <div className="app">
            {/*the DateHeader component allows the user to set the desired date and
            displays that date prominently at the top of the UI*/}
            <DateHeader date={"Friday 11th February 2022"}/>
            {/*with more time, I would have:
          a) turned the form below into a component
          b) written a function to generate all the <option> tags within the form
          c) written form validation requiring the title input to be a string of some max length
          and requiring that all fields be completed before form submission*/}
            <form className="add-event-form">
                <label htmlFor="title">Event title:</label>
                <input name="title" onChange={(event) => {
                    setTitle(event.target.value)
                }}/>
                <label htmlFor="start-time">Start time:</label>
                <select name="start-time" onChange={(event) => {
                    setStartTime(event.target.value)
                }}>
                    <option value="0">00:00</option>
                    <option value="1">01:00</option>
                    <option value="2">02:00</option>
                    <option value="3">03:00</option>
                    <option value="4">04:00</option>
                    <option value="5">05:00</option>
                    <option value="6">06:00</option>
                    <option value="7">07:00</option>
                    <option value="8">08:00</option>
                    <option value="9">09:00</option>
                    <option value="10">10:00</option>
                    <option value="11">11:00</option>
                    <option value="12">12:00</option>
                    <option value="13">13:00</option>
                    <option value="14">14:00</option>
                    <option value="15">15:00</option>
                    <option value="16">16:00</option>
                    <option value="17">17:00</option>
                </select>
                <label htmlFor="duration">Duration (hours):</label>
                <select name="duration" onChange={(event) => {
                    setDuration(event.target.value)
                }}>
                    <option value="0.5">0.5 hours</option>
                    <option value="1">1 hour</option>
                    <option value="1.5">1.5 hours</option>
                    <option value="2">2 hours</option>
                    <option value="2.5">2.5 hours</option>
                    <option value="3">3 hours</option>
                </select>
                <button type="submit" onClick={(event) => {
                    updateEvents([...events, {title: eventTitle, start: startTime, duration: duration}])
                    event.preventDefault()
                }}>Add new event
                </button>
            </form>
            <div className="calendar-container">
                {/*the HourBlocks component maps 24 divs onto the UI; one for each hour of the day*/}
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
