import {useState} from "react";
import './App.css';
import {DateHeader} from "./components/DateHeader";
function App() {

  let [events, updateEvents] = useState([{title: "Aerial hoop class", start: 18, duration: 1.5}, {title: "Laka Interview", start: 14, duration: 1}, {title: "Yoga", start: 9, duration:2}])
  const hourBlocks = []
  for(let i=0; i<24; i++ ){hourBlocks.push(i)}
  
  return (
    <div className="app">

      <DateHeader date={Friday 11th February 2022} />

      <div className="calendar-container">
          {/*put addNewEvent form here if time allows, and style calendar-container using display:flex
        so that the form and calendar hour-blocks are displayed side by side*/}
          {hourBlocks.map((hour, index) => {
              return(
                  <div key={index} className="hour-block">{hour.toString() + ":00"}</div>
              )
          })}
          {events.map((item, index) => {
            return(
                <div key={index} style={{height: item.duration*60 + "px", width: "40%", position: "absolute", top: item.start*60, left: "150px", backgroundColor: "Aquamarine", zValue: 5}}>
                  <h3>{item.title}</h3>
                </div>
            )
          })}
      </div>

    </div>
  );
}

export default App;
