import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/es/Toolbar'
import Typography from '@material-ui/core/Typography'
import './App.styl'

class App extends Component {
  render () {
    return (
      <div className="app">
        <AppBar>
          <Toolbar position="static">
            <Typography variant="h6" color="inherit">
              点名器
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default App
