const Display = ({anecdotes, numOfVotes}) => {
    return(
        <>
            <p>{anecdotes}</p>
            <p>has {numOfVotes} votes</p>
        </>
    )
}

export default Display