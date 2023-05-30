import {Link} from 'react-router-dom';

const Blocks = ({ blocks, convTimestamp, selectBlock }) => {
  return (
    <>
    <h3>Blocks</h3>
      {blocks.map((block) => (
        <div key={block.number}>
          <hr />
          <Link to={`/block/${block.number}`} className='link'>
            <div className="block" onClick={() => selectBlock(block.number)} >
              <h4>Block Number: {block.number}</h4>
              <p>{convTimestamp(block.timestamp)}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Blocks
