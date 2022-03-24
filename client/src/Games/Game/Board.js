import React from 'react'
import Pocket from './Pocket'

export default function GameBoard ({ game }) {

  const pocketsArray = Array.from(game.board.pockets
    .entries())
    .map(([pocket, stones]) => {
      return <Pocket pocket={pocket} stones={stones} key={pocket.toString()} />
    }
  )

  return (
    <div className='board'>
      {pocketsArray}
    </div>
  )
}