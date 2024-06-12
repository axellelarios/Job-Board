
const Job = (props) => {
    return (
        <div className={`${props.className} ${props.color}`}>
             <h2>{props.title}</h2>
             <div>
                <span>{props.contratType}</span> - 
                <span>{props.country}</span> - 
                <span>{props.city}</span>
            </div>          
        </div>
    )
}

export default Job