import React from 'react'
import { TableRow } from '@mui/material';
import {
    PriceColumn,
    CoinColumn,
    PriceChangeColumn,
    VolumeColumn,
    SupplyColumn,
    FavColumn
 } from './columns'

const CoinRow = ({coin, addFavourite, favourites}) => {
    
    return (
        <TableRow>
            <FavColumn coin={coin}  addFavourite={addFavourite} favourites={favourites} />
            <CoinColumn coin={coin} />
            <PriceColumn coin={coin} />
            <PriceChangeColumn coin={coin} />
            <VolumeColumn coin={coin} />
            <SupplyColumn coin={coin} />
        </TableRow>
    )
}

export default CoinRow;