import React from 'react'
import { Link } from 'react-router-dom'
import { mancalaStones, isWinner } from './gameHelpers'

export default function GamePreview({ game, id }) {
  
  let status, statusClass, winner

  if (!game.isOver) {
    status = `Player ${game.currentPlayer}'s Turn`
    statusClass = 'in-progress'
  } else {
    status = 'Game Over'
    statusClass = 'game-over'
  }

  if (isWinner(game, 'A') && !isWinner(game, 'B')) {
    winner = <p>Player A Wins</p>
  } else if (!isWinner(game, 'A') && isWinner(game, 'B')) {
    winner = <p>Player B Wins</p>
  } else if (isWinner(game, 'A') && isWinner(game, 'B')) {
    winner = <p>Tie Game</p>
  }

  const score = (
    <div className='score'>
      <p>A: {mancalaStones(game, 'A')}</p>
      <p>B: {mancalaStones(game, 'B')}</p>
    </div>
  )
  
  let classNames = ['game-preview', statusClass].join(' ')

  return (
      <Link to={`/games/${id}`} className={classNames}>
        <h5>{id}</h5>
        <p>{status}</p>
        { winner ? winner : score }
      </Link>

  )
}