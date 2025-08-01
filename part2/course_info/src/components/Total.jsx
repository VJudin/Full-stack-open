const Total = ({parts}) => {
    
    const total = parts.reduce( 
        (acc, curr) => acc + curr.exercises,
        0,   
    )
    return (
    <b>Total {total} exercises</b>
)}

export default  Total