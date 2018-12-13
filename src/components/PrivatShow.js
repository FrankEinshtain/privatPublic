import React from 'react'
import ShowItem from './ShowItem'

class PrivatShow extends React.Component {
  renderHelper () {
    if (!this.props.result.data) {
      return <div>NOPE</div>
    }
    if (this.props.result.data) {
      const points = this.props.result.data.devices.map((point, index) => {
        return <ShowItem key={index} adr={point.fullAddressRu} place={point.placeRu} />
      })
      return points
    }
  }

  render () {
    // console.log(this.props.result)
    return (
      <div className='ui cards'>
        {this.renderHelper()}
      </div>
    )
  }
}

export default PrivatShow
