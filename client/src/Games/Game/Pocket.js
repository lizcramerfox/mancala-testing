import React, { useState, useEffect } from 'react'

export default function Pocket({ pocket, stones }) {
  // let pieces = []
  
  // for (let i = 0; i < pocket.stones.length; i++) {
  //   pieces.push(<div className="game-piece"></div>)
  // }

  let pocketID, pocketType

  if (pocket.isMancala) {
    pocketID = `${pocket.player}M`
    pocketType = 'mancala'
  } else {
    pocketID = `${pocket.player}${pocket.index}`
    pocketType = 'non-mancala'
  }

  const classNames = ['pocket', pocketID, pocket.player, pocketType].join(' ')


  return (
    <div className={classNames}>
      <p>{pocketID}: {stones}</p>
    </div>
  )
}