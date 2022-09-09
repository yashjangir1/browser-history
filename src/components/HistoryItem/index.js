import './index.css'

function HistoryItem(props) {
  const {historyItem, deleteHistory} = props

  const onDelete = () => {
    deleteHistory(historyItem.id)
  }

  return (
    <div className="history-item-container">
      <p className="time">{historyItem.timeAccessed}</p>
      <div className="time-domain-container">
        <div className="domain-container">
          <img
            src={historyItem.logoUrl}
            alt="domain logo"
            className="domain-logo"
          />
          <div className="domain-details">
            <p className="domain-name">{historyItem.title}</p>
            <p className="domain-url">{historyItem.domainUrl}</p>
          </div>
        </div>
        <button
          testid="delete"
          type="button"
          className="delete-button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </div>
  )
}

export default HistoryItem
