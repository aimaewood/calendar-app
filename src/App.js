import './App.css';

function App() {

  const hourBlocks = []
  for(let i=0; i<24; i++ ){hourBlocks.push(i)}
  console.log(hourBlocks)
  return (
    <div className="App">

      <div className="header">
         <h1>Friday 11th February 2022</h1>
         <h3>Schedule:</h3>
         <hr />
      </div>

      <div className="calendar-container">
          {/*put addNewEvent form here if time allows, and style calendar-container using display:flex
        so that the form and calendar hour-blocks are displayed side by side*/}
          {hourBlocks.map((hour, index) => {
              return(
                  <div key={index} className="hourBlock">{hour.toString() + ":00"}</div>
              )
          })}
      </div>

    </div>
  );
}

export default App;
