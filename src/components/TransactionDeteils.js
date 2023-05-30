import { Utils } from 'alchemy-sdk';
import { useNavigate } from 'react-router-dom';

const TransactionDeteils = ({transaction, convTimestamp}) => {
    const navigate = useNavigate();

    return (
    <div className='t-details'>
        <h3>Transaction Data</h3>
        <div className='info'>
            <p>Transaction Hash: {transaction.hash}</p>
            <p>Block: {transaction.blockNumber}</p>
            <p>Transaction Type: {transaction.type}</p>
            <p>Confiramations: {transaction.confirmations}</p>
            <p>Nonce: {transaction.nonce}</p>
        </div>
        <hr />
        <div className='info'>
            <p>From: {transaction.from}</p>
            <p>To: {transaction.to}</p>
        </div>
        <hr />
        <div className='info'>
            <p>Value: {Utils.formatEther(transaction.value)} ETH</p>
            <p>Transaction Fee: {Utils.formatEther(transaction.maxFeePerGas)} ETH</p>
            <p>Gass Price: {Utils.formatUnits(transaction.gasPrice, "gwei")} gwei</p>
        </div>
        <div className='foot'>
            <button className='btn' onClick={() => {navigate(-1)}}>Go Back</button>
        </div>
        {console.log(transaction)}
    </div>
  )
}

export default TransactionDeteils
