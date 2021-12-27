import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderCryptoList = () => {
    const {cryptocurrencyData} = this.props
    return (
      <div className="bottomSectionContainer">
        <div className="headerContainer">
          <p className="cryptoType">Coin Type</p>
          <div className="headerFlexEndContainer">
            <p className="cryptoType">USD</p>
            <p className="cryptoType">EURO</p>
          </div>
        </div>
        <ul className="cryptoUlList">
          {cryptocurrencyData.map(eachData => (
            <CryptocurrencyItem key={eachData.id} cryptoDetails={eachData} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="cryptoListContainer">
        <h1 className="listHeading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="bg-img"
        />
        {this.renderCryptoList()}
      </div>
    )
  }
}

export default CryptocurrenciesList
