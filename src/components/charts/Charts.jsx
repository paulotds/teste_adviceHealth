import React from 'react'
import { CardsData } from '../../data/Data'
import './Charts.scss'

import Card from '../card/Card'

const Charts = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div key={id} className="parentContainer">
            <Card 
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            
            />
          </div>
        )
      })}
    </div>
  )
}

export default Charts