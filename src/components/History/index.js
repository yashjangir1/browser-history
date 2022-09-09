import './index.css'
import React from 'react'
import HistoryItem from '../HistoryItem'

function History(props) {
  const {historyList} = props

  //   const [searchText, setSearchText] = React.useState('')

  //   const deleteHistory = uniqueId => {
  //     console.log(uniqueId)
  //   }

  //   const searchBarTextUpdate = event => {
  //     setSearchText(event.target.value)
  //   }

  //   const tempHistoryList = historyList.filter(item =>
  //     item.title.toLowerCase().includes(searchText.toLowerCase()),
  //   )

  const [tempHistoryList, setTempHistoryList] = React.useState(historyList)

  const searchBarTextUpdate = event => {
    setTempHistoryList(
      historyList.filter(item =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    )
  }

  const deleteHistory = uniqueId => {
    setTempHistoryList(prevState =>
      prevState.filter(item => item.id !== uniqueId),
    )
  }

  return (
    <div className="main-container">
      <div className="logo-and-search-bar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="search-bar-container">
          <div className="search-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
          </div>
          <input
            type="search"
            className="search-bar"
            placeholder="Search history"
            onChange={searchBarTextUpdate}
          />
        </div>
      </div>
      <div className="historys-container">
        {tempHistoryList.length === 0 ? (
          <p className="empty-history-para">There is no history to show</p>
        ) : (
          <ul className="history-items-container">
            {tempHistoryList.map(item => (
              <li className="history-item-list" key={item.id}>
                <HistoryItem historyItem={item} deleteHistory={deleteHistory} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default History
