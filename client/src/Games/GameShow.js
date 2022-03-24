import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Context/context'
import { gameShow } from '../api/game'
import Board from './Game/Board'
import Mancala from 'mancala'

export default function GameShow() {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const [ game, setGame ] = useState('')

  let params = useParams()

  useEffect(() => {
    gameShow(user, params.id)
    .then(res => setGame(Mancala.Game.fromJSON(res.data.game)))
  }, [user, params.id])

  if (!game) {
    return <p>Loading...</p> 
  }

  let gameStatus
  if (game.isOver) {
    gameStatus = 'Game Over'
  } else {
    gameStatus = `Player ${game.currentPlayer}'s Turn`
  }

  return (
    <div className="page-wrapper">
      <h4>Game: {params.id}</h4>
      <p>{gameStatus}</p>
      <div>{<Board game={game} />}</div>
    </div>
  )
}