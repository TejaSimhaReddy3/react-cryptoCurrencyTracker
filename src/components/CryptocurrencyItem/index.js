import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails

  return (
    <li className="currencyList">
      <div className="coinTypeDetails">
        <img src={currencyLogo} className="currencyLogo" alt={currencyName} />
        <p className="currencyName">{currencyName}</p>
      </div>
      <div className="headerFlexItems">
        <p className="currencyName">{usdValue}</p>
        <p className="currencyName">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
