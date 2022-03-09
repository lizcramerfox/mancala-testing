import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/context'
import { gameIndex } from '../api/game'
// import GamePreview from './GamePreview'

export default function GamesHome() {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const [ games, setGames ] = useState([])
    
  useEffect(() => {
    if (!user) {
      console.log('Loading...')
    } else {
      gameIndex(user)
      .then(res => setGames(res.data.games))
      .catch(err => console.log('Error Loading Games: ', err))
    }
  }, [user])

  const GamePreview = (game) => {
    return (
      <Link key={game.id} to={`/games/${game.id}`}>
        <h4>{game.id}</h4>
      </Link>
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