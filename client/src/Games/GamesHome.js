import React, { useContext, useState, useEffect, Link } from 'react'
import { AuthContext } from '../Context/context'
import { gameIndex } from '../api/game'
// import GamePreview from './GamePreview'

export default function GamesHome() {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const [ games, setGames ] = useState([])
  
  const getGames = () => {
    gameIndex(user)
    .then(res => setGames(res.data.games))
  }
    
  useEffect(() => {
    getGames()
  }, [])

  const GamePreview = (game) => {
    return (
      <>
        <h4>{game.id}</h4>
        
      </>
    )    
  }

  const gamesJsx = games.map(game => GamePreview(game))

  return (
    <div className='page-wrapper'>
      <h2>Your Games</h2>
      <div className='game-index'>{gamesJsx}</div>
    </div>
  )
}