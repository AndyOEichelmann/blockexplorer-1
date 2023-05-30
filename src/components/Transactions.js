import {Link} from 'react-router-dom';

const Transactions = ({ transactions, setTransaction }) => {


  return (
    <div className="transactions">
      <h4>Transactions: {transactions.length}</h4>
      {transactions.map((transaction) => (
        <div key={transaction.transactionIndex}>
          <Link to={`/blockexplorer-1/transaction/${transaction.hash}`} className='link'>
            <hr />
            <div className='block'onClick={() => setTransaction(transaction)}>
              <p>Transaction Hash: {transaction.hash.slice(0, 16)}...</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Transactions
