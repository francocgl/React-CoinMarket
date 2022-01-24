import React from 'react'

export const CoinRow = ({coin, index}) => {
    return (
        <tr>
            <td> {index}</td>
            <td> 
                <img src={coin.image} style={{width: '3%'}} alt="img symbol" className="img-fluid me-4" /> 
                <span>{coin.name}</span>
                <span className='ms-3 text-muted text-uppercase'>{coin.symbol}</span>
            </td>
            <td className="text-right"> ${coin.current_price}</td>
            <td className={ (coin.price_change_percentage_24h > 0 ) ? 'text-success' : 'text-danger'}>
                { (coin.price_change_percentage_24h > 0 ) ? '+' : '-'}
                { coin.price_change_percentage_24h }%
            </td>
            <td> ${coin.total_volume}</td>
        </tr>
    )
}
