import React from 'react'

class PrivatSearch extends React.Component {
  state = {
    city: '',
    address: '',
    kind: 'atm'
  }

  onGo = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render () {
    return (
      <div>
        <form className='ui form' onSubmit={this.onGo}>
          <h4 className='ui dividing header'>Поиск ближайших банкоматов</h4>
          <div className='three fields'>
            <div className='field'>
              <label>Город</label>
              <input
                type='text'
                value={this.state.city}
                onChange={e => this.setState({ city: e.target.value })}
              />
            </div>
            <div className='field'>
              <label>Адрес</label>
              <input
                type='text'
                value={this.state.address}
                onChange={e => this.setState({ address: e.target.value })}
              />
            </div>
            <div className='grouped fields'>
              <label>Банкомат или Терминал</label>
              <div className='field'>
                <div className='ui radio checkbox'>
                  <input
                    id='01'
                    name='atmtso'
                    tabIndex='0'
                    className='hidden'
                    type='radio'
                    value='atm'
                    onChange={e => this.setState({ kind: e.target.value })}
                    defaultChecked
                    
                  />
                  <label htmlFor='01'>Банкомат</label>
                </div>
              </div>
              <div className='field'>
                <div className='ui radio checkbox'>
                  <input
                    id='02'
                    name='atmtso'
                    tabIndex='0'
                    className='hidden'
                    type='radio'
                    value='tso'
                    onChange={e => this.setState({ kind: e.target.value })}
                  />
                  <label htmlFor='02'>Терминал</label>
                </div>
              </div>
            </div>
          </div>
          <button className='ui primary button' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default PrivatSearch
