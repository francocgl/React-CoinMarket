import {useEffect, useState} from 'react'
import axios from 'axios';

//Components
import TableCoins from './components/TableCoins'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');


  const getData = async() => {
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')    
    console.log(res.data);
    setCoins(res.data)
  }
  useEffect(()=>{
    getData()
  }, []);


  return (
    <div className="container">
      <div className="row">
        <input className='form-input bg-dark text-light mt-4 col-4' placeholder='Search a coin' onChange={e => setSearch(e.target.value)} />
        <TableCoins coins={coins} search={search} />
      </div>  
    </div>
  );
}

export default App;
