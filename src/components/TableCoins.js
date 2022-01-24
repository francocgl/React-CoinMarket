import React from 'react'
import { CoinRow } from './CoinRow';

const headers = ['#', 'Coin', 'Price', '24h %', 'Volume 24hs']


const TableCoins = ({coins, search}) => {

    const filteredCoins = coins.filter( (coin) => 
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <table className="table table-dark mt-4 table-hover ">
            <thead>
                <tr>
                   { headers.map( (title, index) => (
                       <td key={index}>{title}</td>
                   ))}
                </tr>
            </thead>
            <tbody>
                {  filteredCoins.map( (coin, index) => (
                    <CoinRow  key={index} coin={coin} index={index + 1} />
                )) }
            </tbody>
        </table>
    )
}

export default TableCoins;
