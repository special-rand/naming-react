import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './RandomCard.styl'

function card (props) {
  return (
    <div className={[["card-item-"+props.id], "card-item"].join(' ')}>
      {props.name}
    </div>
  )
}

class RandomCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cardList: [card({
        id: 0,
        name: props.list[0]
      })], // init firstCard
      name: null,
      list: null
    }
  }

  startRoll () {
    // todo
  }

  loopRoll () {
    // todo
  }

  render () {
    return (
      <div className="b-random-card">
        <div>
          <div style={{
            'height': '10rem',
            'width': '100%'
          }}>
            {this.state.cardList}
          </div>
          <Button onClick={this.startRoll}>
          点击开始点名
          </Button>
        </div>
      </div>
    )
  }
}

export default RandomCard
