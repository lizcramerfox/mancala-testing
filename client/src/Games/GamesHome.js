import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/context'
import { gameIndex } from '../api/game'

export default function GamesHome() {
  const authContext = useContext(AuthContext)
  const user = authContext.user
  const [ games, setGames ] = useState([])
  
  gameIndex(user)
    .then(res => setGames(res.data.games))
  

  console.log(games)

  // const gameJsx = (

  // )

  const gamesIndexJsx = (
    <>
      <h2>Your Games</h2>
      {/* <div>{games}</div> */}
    </>
  )
  
  return gamesIndexJsx
}