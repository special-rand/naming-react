import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import './RandomCard.styl'

class Card extends Component {
  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
  }

  componentDidMount () {
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

  latestID = 0  // todo

  constructor (props) {
    super(props)
    this.state = {
      cardList: []
    }
  }

  startRoll = () => {
    // todo: createFirstCard
    // this.setState({
    //   cardList: [
    //     ...this.state.cardList,
    //     {
    //       name: this.props.list[this.latestID],
    //       id: this.latestID++
    //     }
    //   ]
    // })
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
