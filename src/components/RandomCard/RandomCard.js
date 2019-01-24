import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import './RandomCard.styl'

class Card extends Component {
  propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      id: props.id,
      name: props.name
    }
  }

  render () {
    return (
      <div className={[["card-item-" + this.state.id], "card-item"].join(' ')}>
        {this.state.name}
      </div>
    )
  }
}

class RandomCard extends Component {
  propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      cardList: [Card({
        id: 0,
        name: props.list[0]
      })], // init firstCard
      name: null,
      list: null
    }
  }

  startRoll = () => {
    // todo
  }

  loopRoll = () => {
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
