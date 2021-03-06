import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Title = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState( { 0: 0, 1: 0, 2: 0, 3:0, 4:0, 5:0 } )

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * (6-0) + 0))
  }

  const handleClickVote = () => {
    const copy = { ...vote }
    copy[selected] = copy[selected] + 1 || 1
    setVote(copy)
  }

  return (
    <div>
      <Title text="Anecdote of the day"/>
      <div>
        {props.anecdotes[selected]}
      </div>
      <div>
        has {vote[selected]} votes
      </div>
      <Button
        handleClick={handleClickVote}
        text='vote'
      />
      <Button
        handleClick={handleClick}
        text='next anecdote'
      />
      <Title text="Anecdote with most votes"/>
      <div>
        {props.anecdotes[Object.keys(vote).reduce((a, b) => vote[a] > vote[b] ? a : b)]}
      </div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)