import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import random from 'lodash/random'
import { shuffle } from 'd3-array'
import Button from '@material-ui/core/Button'
import { convertToUnit } from '@/utils/helpers'
import './RandomCard.styl'

function Card (props) {
  const styles = {
    position: 'absolute',
    height: props.height,
    top: 0,
  }
  // mark: top from 0 to props.height
  // const id = setInterval(() => {
  //
  // })
  return (
    <div
      className="card"
      style={styles}
    >
      <span>
          {props.name}
      </span>
    </div>
  )
}

Card.propTypes = {
  height: PropTypes.number,
  name: PropTypes.string
}

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
    position: 'relative',
    height: convertToUnit(this.height),
    width: convertToUnit(100, '%'),
    overflow: 'hidden'
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

    return (
      <card className="b-random-card">
        <div>
          <div style={this.styles}>
            {
              this.state.start ?
                (<Card
                  height={this.height}
                  name={item.name}
                />) :
                (<div
                  className="card"
                  style={{ height: this.height }}
                >
                  <span>选择下方按钮开始</span>
                </div>)
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
