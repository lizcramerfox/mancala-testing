import React from 'react'
import { Link } from 'react-router-dom'

export default function GamePreview({game, id}) {
  
  let gameStatus

  if (game.isOver) {
    gameStatus = 'Game Over'
  } else {
    gameStatus = `Player ${game.currentPlayer}'s Turn`
  }

  return (
      <Link to={`/games/${id}`} className='game-preview'>
        {gameStatus}
      </Link>

  )
}