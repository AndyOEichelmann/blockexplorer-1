import Transactions from './Transactions';

const {Utils} = require('alchemy-sdk');

const Block = ({ block, convTimestamp, setTransaction }) => {

  return (
    <>
      {/* <>{console.log(block)}</> */}
      <h3>Block: {block.number}</h3>
    <div className='info'>
      <p>Height: {block.number}</p>
      <p>Timestamp: {convTimestamp(block.timestamp)}</p>
      <p>Extra Data: {Utils.arrayify(block.extraData)}</p>
    </div>
    <hr />
    <div className='info'>
      <p>Hash: {block.hash}</p>
      <p>Parent Hash: {block.parentHash}</p>
      <p>Nonce: {block.nonce}</p>
      <p>Dificulty: {block.difficulty}</p>
    </div>
    <hr />
    <div className='info'>
      <p>Gas Used: {parseInt(block.gasUsed)}</p>
      <p>Gas Limit: {parseInt(block.gasLimit)}</p>
      <p>Base Gass Fee: {parseInt(block.baseFeePerGas)}</p>
      <p>Miner: {block.miner}</p>
    </div>
    <hr />
    <Transactions transactions={block.transactions} setTransaction={setTransaction}/>
    </>
  )
}

export default Block
