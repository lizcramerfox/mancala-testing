import React from 'react'
import { Link } from 'react-router-dom'
import Mancala from 'mancala'

export default function GamePreview({game}) {


  return (
      <Link to={`/games/${game.id}`} className='game-preview'>
        {game.id}
      </Link>

  )
}