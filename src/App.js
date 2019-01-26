import React, { Component } from 'react'
import memoize from 'memoize-one'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem/MenuItem'
import Grid from '@material-ui/core/Grid'
import './App.styl'

// local components
import RandomCard from './components/RandomCard'

// config
import { groups } from './people.json'

class App extends Component {
  groups = groups

  state = {
    selected: 0
  }

  selectedItem = memoize(idx => this.groups[idx])

  render () {
    const item = this.selectedItem(this.state.selected)

    return (
      <div className="app">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              点名器
            </Typography>
          </Toolbar>
        </AppBar>
        <main className="container">
          <Grid container spacing={24}>
            <Grid item>
              <Select
                autoWidth={true}
                value={this.state.selected}
                onChange={(e) => {
                  this.setState({
                    selected: e.target.value
                  })
                }}
              >{groups.map((o, idx) => {
                return (
                  <MenuItem value={idx} key={idx}>{o.name}</MenuItem>)
              })}</Select>
            </Grid>
            <Grid
              style={{
                width: '100%'
              }}
              item>
              <RandomCard
                name={item.name}
                list={item.list}
              />
            </Grid>
          </Grid>
        </main>
      </div>
    )
  }
}

export default App
