import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { spring, Motion } from 'react-motion'
import random from 'lodash/random'
import Button from '@material-ui/core/Button'
import { convertToUnit } from '@/utils/helpers'
import './RandomCard.styl'

class Card extends Component {
  static propTypes = {
    height: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    callback: PropTypes.func
  }

  state = {
    styles: {
      top: this.props.height
    }
  }

  constructor (props) {
    super(props)
  }

  componentDidMount = () => {
    this.setState({
      styles: {
        top: spring(-this.props.height)
      }
    })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.props.name !== nextProps.name) {
      this.setState({
        styles: {
          top: spring(-this.props.height)
        }
      })
      return true
    }
    if (this.state.styles.top !== nextState.styles.top) {
      return true
    }
    return false
  }

  onFinishedAnimation = () => {
    this.setState({
      styles: {
        top: this.props.height
      }
    })
    this.props.callback()
  }

  render () {
    return (
      <Motion
        style={this.state.styles}
        onRest={this.onFinishedAnimation}
      >
        {
          interpolatingStyle => {
            return (
              <div
                className="card"
                style={{
                  position: 'absolute',
                  height: this.props.height,
                  ...interpolatingStyle
                }}
              >
              <span>
                {this.props.name}
              </span>
              </div>
            )
          }
        }
      </Motion>
    )
  }
}

class RandomCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
  }

  height = 200

  state = {
    cardID: 0,
    item: null,
    start: false
  }

  styles = {
    position: 'relative',
    height: convertToUnit(this.height),
    width: convertToUnit(100, '%'),
    overflow: 'hidden'
  }

  constructor () {
    super(...arguments)
  }

  componentDidMount = () => {
    this.setState({
      item: this.genCardItem()
    })
  }

  componentDidUpdate = (_, prevState) => {
    if (this.state.item !== prevState.item) {
      this.setState(state => ({
        id: state.id + 1
      }))
    }
  }

  getRandomName = () => {
    return this.props.list[random(this.props.list.length - 1)]
  }

  /**
   * generate the card info
   */
  genCardItem = (name) => {
    if (!name) {
      name = this.getRandomName()
    }
    return {
      id: this.state.cardID,
      name: name
    }
  }

  nextCardItem = () => {
    this.setState({
      item: this.genCardItem()
    })
  }

  startRoll = () => {
    this.setState({
      cardID: 0,
      start: true
    })
  }

  restartRoll = () => {
    this.setState({
      cardID: 0,
      start: false
    })
  }

  render () {
    const item = this.state.item

    return (
      <div className="b-random-card">
        <div>
          <div style={this.styles}>
            {
              this.state.start && this.state.item ?
                (
                  <Card
                    id={item.id}
                    name={item.name}
                    height={this.height}
                    callback={this.nextCardItem}
                  />
                ) :
                (
                  <div
                    className="card"
                    style={{ height: this.height }}
                  >
                    <span>选择下方按钮开始</span>
                  </div>
                )
            }
          </div>
          <Button onClick={this.startRoll}>
            点击开始点名
          </Button>
          <Button onClick={this.restartRoll}>
            重新开始
          </Button>
        </div>
      </div>
    )
  }
}

export default RandomCard
