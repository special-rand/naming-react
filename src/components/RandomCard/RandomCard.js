import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import random from 'lodash/random'
import { shuffle } from 'd3-array'
import Button from '@material-ui/core/Button'
import { convertToUnit } from '@/utils/helpers'
import './RandomCard.styl'

class RandomCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
  }

  height = 200

  cardList = () => {
    return shuffle(this.props.list.map((o, idx) => ({ id: idx + 1, name: o })))
  }

  state = {
    start: false
  }

  styles = {
    height: convertToUnit(this.height),
    width: convertToUnit(100, '%')
  }


  getRandomName = () => {
    const idx = random(this.props.list.length - 1)
    return this.props.list[idx]
  }

  genCardItem = (
    name = this.getRandomName(),
    id = this.props.list.length
  ) => {
    return {
      name: name,
      id: id
    }
  }

  startRoll = () => {
    this.setState({
      start: true
    })
  }

  restartRoll = () => {
    this.setState({
      start: false
    })
  }

  constructor (props) {
    super(props)
  }

  render () {
    const item = this.genCardItem()
    const card = (
      <div
        className="card"
        style={{
          'height': this.height
        }}
      >
        <span>
          {item.name}
        </span>
      </div>
    )
    return (
      <card className="b-random-card">
        <div
          style={{
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={this.styles}>
            {
              this.state.start ? card :
                <div
                  className="card"
                  style={{ height: this.height }}
                >
                  <span>点击下方按钮开始</span>
                </div>
            }
          </div>
          <Button onClick={this.startRoll}>
            点击开始点名
          </Button>
          <Button onClick={this.restartRoll}>
            重新开始
          </Button>
        </div>
      </card>
    )
  }
}

export default RandomCard
