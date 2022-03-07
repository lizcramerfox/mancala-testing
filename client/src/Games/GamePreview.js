import React from 'react'

export default function GamePreview(game) {
  
  let gameStatus = 'In Progress'

  if (game.is_over) {
    gameStatus = 'Game Over'
  }

  const entriesArray = Array.from(game.board).entries()
  // const pocketsA = entriesArray
  //   .filter(([pocket, stones]) => pocket.player === "A" && pocket.isMancala === false)
  //   .map(([pocket, stones]) => {
  //     return <Pocket game={this.props.game} playTurn={this.props.playTurn} pocket={pocket} stones={stones} key={pocket.toString()} />
  //   })

  return (
    <div className='game-preview' key={game.id}>
      <h4>{game.id}</h4>
      <p>{gameStatus}</p>
      <p>A: {entriesArray}</p>
    </div>
  )
}