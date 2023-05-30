import {useNavigate} from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

  return (
    <div className='header'>
        <h1>Etherium Blockc Explorer</h1>
        <button className='btn' onClick={() => {
            navigate('/blockexplorer-1');
        }}>Home</button> 
    </div>
  )
}

export default Header
