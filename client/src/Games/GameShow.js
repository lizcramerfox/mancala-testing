import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Context/context'
import { gameShow } from '../api/game'
import GameBoard from './GameBoard'
import Mancala from 'mancala'

export default function GameShow () {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const [ game, setGame ] = useState('')

  let params = useParams()

  useEffect(() => {
    gameShow(user, params.id)
    .then(res => setGame(Mancala.Game.fromJSON(res.data.game)))
  }, [user, params.id])

  return (
    <ul>
      <h4>Game: {params.id}</h4>
      <p>Current Player: {game.currentPlayer}</p>
      <div>Board: {<GameBoard game={game} />}</div>
    </ul>
  )
}