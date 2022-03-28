import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../Context/context'
import { gameIndex } from '../api/game'
import GamePreview from './GamePreview'
import Mancala from 'mancala'


export default function GamesHome() {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const [ games, setGames ] = useState([])
    
  useEffect(() => {
    if (!user) {
      return
    } else {
      gameIndex(user)
      .then(res => setGames(res.data.games))
      .catch(err => console.log('Error Loading Games: ', err))
    }
  }, [user])

  const gamesJsx = games.map(game => <GamePreview game={Mancala.Game.fromJSON(game)} id={game.id} key={game.id}/>)

  return (
    <div className='page-wrapper'>
      <h2>Your Games</h2>
      <div className='game-index'>{gamesJsx}</div>
    </div>
  )
}