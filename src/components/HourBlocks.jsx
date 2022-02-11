export const HourBlocks = () => {
    const hourBlocks = []
    for(let i=0; i<24; i++ ){hourBlocks.push(i)}
    return (
        hourBlocks.map((hour, index) => {
            return(
                <div key={index} className="hour-block">{hour.toString() + ":00"}</div>
            )
        })
    )
}



