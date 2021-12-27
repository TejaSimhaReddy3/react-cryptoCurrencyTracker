import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {cryptoData: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const fetchAPI = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const response = await fetchAPI.json()
    const updatedData = response.map(eachCryptoData => ({
      currencyName: eachCryptoData.currency_name,
      usdValue: eachCryptoData.usd_value,
      euroValue: eachCryptoData.euro_value,
      id: eachCryptoData.id,
      currencyLogo: eachCryptoData.currency_logo,
    }))

    this.setState({cryptoData: updatedData, isLoading: false})
  }

  renderMainContent = () => {
    const {cryptoData} = this.state
    return <CryptocurrenciesList cryptocurrencyData={cryptoData} />
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="mainContainer">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderMainContent()
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
