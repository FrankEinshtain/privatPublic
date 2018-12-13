import React from 'react'
import Privat from '../api/Privat'
import PrivatSearch from './PrivatSearch'
import PrivatShow from './PrivatShow'

class App extends React.Component {
  state = {
    result: {}
  }
  onSub = async data => {
    const { city, address, kind } = data
    let stuff = {}
    if (kind === 'tso') {
      stuff = {
        tso: 1,
        address: address,
        city: city
      }
    } else if (kind === 'atm') {
      stuff = {
        atm: 1,
        address: address,
        city: city
      }
    }
      const responce = await Privat.get('/infrastructure', {
        params: stuff
      })
      this.setState({ result: responce })
    }
  
  render () {
    return (
      <div className='ui container'>
        <div className='ui segment'>
          <PrivatSearch onSubmit={this.onSub} />
          <PrivatShow result={this.state.result} />

        </div>
      </div>
    )
  }
}

export default App

// https://api.privatbank.ua/p24api/infrastructure?json&tso&address=&city=
