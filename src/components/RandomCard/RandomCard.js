import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import random from 'lodash/random'
import Button from '@material-ui/core/Button'
import './RandomCard.styl'

class Card extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
  }

  componentDidMount = () => {
    // todo: auto swing
  }

  render () {
    return (
      <div className={[["card-item-" + this.props.id], "card-item"].join(' ')}>
        {this.props.name}
      </div>
    )
  }
}

class RandomCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
  }

  state = {
    cardList: [
      {
        name: this.props.list[0],
        id: 0
      }
    ]
  }

  getRandomName = () => {
    const list = this.props.list
    const idx = random(list.length - 1)
    return list[idx]
  }

  genCardItem = (
    name = this.getRandomName(),
    id = this.state.cardList.length
  ) => {
    return {
      name: name,
      id: id
    }
  }


  startRoll = () => {
    this.setState({
      cardList: [
        this.genCardItem()
      ]
    })
  }

  loopRoll = () => {
    // todo: loopCardWithLatestID
  }

  render () {
    return (
      <div className="b-random-card">
        <div>
          <div style={{
            'height': '10rem',
            'width': '100%'
          }}>
            {this.state.cardList.map(o =>
              <Card key={o.id} id={o.id} name={o.name}/>
            )}
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
