import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../Context/context'
import { gameShow } from '../api/game'

export default function GameShow () {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const [ game, setGame ] = useState('')

  let params = useParams()

  const getGame = () => {
    gameShow(user, params.id)
    .then(res => setGame(res.data.game))
  }

  useEffect(() => {
    getGame()
    console.log('game = ', Array.from(game.board.entries()))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul>
      <h4>Game: {game.id}</h4>
      <p>Current Player: {game.current_player}</p>
      <p>Board: {game.board}</p>
    </ul>
  )
}