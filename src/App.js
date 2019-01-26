import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/es/Toolbar'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/es/MenuItem/MenuItem'
import Grid from '@material-ui/core/Grid'
import './App.styl'

// local components
import RandomCard from './components/RandomCard'

// config
import { groups } from './people.json'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      groups: groups, // inject
      selectedItem: groups[0]
    }
  }

  render () {
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
          <Grid
            container
            spacing={24}
          >
            <Grid item xs={12}>
              <Select
                value={this.state.selectedItem.list}
                onChange={(e, c) => {
                  this.setState({
                    selectedItem: groups[c.key]
                  })
                }}
                autoWidth={true}
                inputProps={{
                  name: '1'
                }}
              >
                {
                  groups.map((o, i) => {
                    return (
                      <MenuItem
                        value={o.list}
                        key={i}>
                        {o.name}
                      </MenuItem>
                    )
                  })
                }
              </Select>
            </Grid>
            <Grid item>
              <RandomCard
                name={this.state.selectedItem.name}
                list={this.state.selectedItem.list}
              />
            </Grid>
          </Grid>
        </main>
      </div>
    )
  }
}

export default App
