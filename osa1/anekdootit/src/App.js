import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).join('0').split('').map(parseFloat))
  const [maxVoteIndex, setMaxVoteIndex] = useState(0)

  const selectRandom = () => {
    let random
    do {
      random = Math.floor(Math.random() * (anecdotes.length - 1))
    } while (random === selected)
    setSelected(random)
  }

  const addVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    if (newVotes[selected] > votes[maxVoteIndex]) setMaxVoteIndex(selected)
  }


  return (
    <>
      <div>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
        <Button text='next anecdote' handleClick={() => selectRandom()} />
        <Button text='vote' handleClick={() => addVote()} />
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[maxVoteIndex]}</p>
        <p>has {votes[maxVoteIndex]} votes</p>
      </div>
    </>
  )
}

export default App
