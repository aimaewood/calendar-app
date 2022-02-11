export const AddNewEvent = ({updateTitle, updateStartTime, updateDuration, updateEvents}) => {

    const hourBlocks = []
    {/*generating an array of consecutive numbers 0-23 to represent the hours in a day*/}
    for(let i=0; i<24; i++ ){hourBlocks.push(i)}


    return (
        <form className="add-event-form">
            <label htmlFor="title">Event title:</label>
            <input name="title" onChange={updateTitle}/>
            <label htmlFor="start-time">Start time:</label>
            <select name="start-time" onChange={updateStartTime}>
                {/*generate an option for every hour of the day*/}
                {hourBlocks.map((hour, index) => {
                    return(
                        <option key={index} value={index}>{hour.toString() + ":00"}</option>
                    )
                })}
            </select>
            <label htmlFor="duration">Duration (hours):</label>
            <select name="duration" onChange={updateDuration}>
                <option value="0.5">0.5 hours</option>
                <option value="1">1 hour</option>
                <option value="1.5">1.5 hours</option>
                <option value="2">2 hours</option>
                <option value="2.5">2.5 hours</option>
                <option value="3">3 hours</option>
                <option value="3.5">3.5 hours</option>
                <option value="4">4 hours</option>
            </select>
            <button type="submit" onClick={updateEvents}>Add new event
            </button>
        </form>
    )
}
