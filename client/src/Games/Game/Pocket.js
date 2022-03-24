import React from 'react'

export default function Pocket({ pocket, stones }) {
  let pocketID, pocketType

  if (pocket.isMancala) {
    pocketID = `${pocket.player}M`
    pocketType = 'mancala'
  } else {
    pocketID = `${pocket.player}${pocket.index}`
    pocketType = 'non-mancala'
  }

  let pieces = []
  for (let i = 0; i < stones; i++) {
    pieces.push(<div className="stone"></div>)
  }

  const classNames = ['pocket', pocketID, pocket.player, pocketType].join(' ')
  

  return (
    <div className={classNames}>
      <p className='hidden'>{pocketID}: {stones}</p>
      {/* <Pieces stones={stones} /> */}
      <div className='stones'>{pieces}</div>
    </div>
  )
}