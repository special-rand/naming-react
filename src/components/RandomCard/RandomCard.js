import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './RandomCard.styl'

class RandomCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: null,
      list: null
    }
  }

  render () {
    return (
      <div className="b-random-card">
        <div>
          <div style={{
            'height': '100px',
            'width': '100px'
          }}>
          </div>
          <Button>
          点击开始点名
          </Button>
        </div>
      </div>
    )
  }
}

export default RandomCard
