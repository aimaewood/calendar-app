export const HourBlocks = () => {
    const hourBlocks = []
    {/*generating an array of consecutive numbers 0-23 to represent the hours in a day*/}
    for(let i=0; i<24; i++ ){hourBlocks.push(i)}
    return (
        <div>
            {/*mapping each hour-block to a div representing that time period*/}
            {hourBlocks.map((hour, index) => {
            return(
                <div key={index} className="hour-block">{hour.toString() + ":00"}</div>
            )
        })}
        </div>
    )
}



