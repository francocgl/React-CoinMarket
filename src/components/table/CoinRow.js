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
    const [iconState, setIconState] = React.useState(false)

    const handleState = id =>{
      let isFavourite = favourites.find( element => element === id)
      console.log(favourites) 
      if(!isFavourite){
        return setIconState(true)
      }
      return setIconState(false)
    }
  
    
    return (
        <TableRow>
            <FavColumn coin={coin}  addFavourite={addFavourite} favourites={favourites} iconState={iconState} handleState={handleState} />
            <CoinColumn coin={coin} />
            <PriceColumn coin={coin} />
            <PriceChangeColumn coin={coin} />
            <VolumeColumn coin={coin} />
            <SupplyColumn coin={coin} />
        </TableRow>
    )
}

export default CoinRow;