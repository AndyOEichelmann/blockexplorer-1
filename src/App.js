import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Blocks from './components/Blocks';
import Block from './components/Block';
import Header from './components/Header';
import TransactionDeteils from './components/TransactionDeteils';

import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [showBlock, setShowBlock] = useState();
  const [showTransaction, setShowTransaction] = useState();

  useEffect(() => {
    getLatestBlocks()
  }, []);

  // Obtain Latest Blocks
  const getLatestBlocks = async () => {
    // get latest block number
    const latestBlockNumber = await alchemy.core.getBlockNumber();

    // obtain the prior blocks numbers
    const latestBlocksNumber = [];
    for (let i = 0; i < 5; i++) {
      latestBlocksNumber.push(latestBlockNumber - i);
    }

    // contruct an array of all the latest blocks
    const blocks = await Promise.all(latestBlocksNumber.map( async (blockNumber) => await alchemy.core.getBlockWithTransactions(blockNumber)));

    // save the blocks array in the varaible
    setLatestBlocks(blocks);
    
    setShowBlock(await alchemy.core.getBlockWithTransactions(latestBlockNumber));
  }

  // Convert timestamp
  const convertTimestamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const dateString = date.toDateString();
    return dateString + " at " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

  // Show Block
  const selectBlock = (blockNum) => {
    const filterBlock = latestBlocks.filter((block) => block.number === blockNum);
    setShowBlock(filterBlock[0]);
  }

  return (
    <Router>
      <div className="App">
      <Header />
        <div className="container">
          <Routes>
            <Route path='/' element={
              <>
                <Blocks blocks={latestBlocks} convTimestamp={convertTimestamp} selectBlock={selectBlock} />
              </>
            } />
            <Route path='/block/:id' element={
                <>
                  <Block block={showBlock} convTimestamp={convertTimestamp} setTransaction={setShowTransaction}/>
                </>
            }/>
            <Route path='/transaction/:transactionHash' element={
              <>
                <TransactionDeteils transaction={showTransaction} convTimestamp={convertTimestamp} />
              </>
            }/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
