import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {title, amount, id, type} = transactionDetails
  const onDeleteTransaction = () => {
    deleteTransaction(id)
  }
  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">RS {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-container">
        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={onDeleteTransaction}
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
