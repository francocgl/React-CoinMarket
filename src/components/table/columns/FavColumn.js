import React from 'react';
import { TableCell } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FavColumn = ({ coin, addFavourite, iconState, handleState, favourites}) => {
      React.useEffect(() => {
            console.log(favourites)
      })
      return <TableCell>
            { !iconState && <FavoriteBorderIcon className={`name-${coin.name}`} sx={{ fontSize: 20 }} color="primary" onClick={() => {addFavourite(coin.name); handleState(coin.name)}}></FavoriteBorderIcon>} 
            { iconState  && <FavoriteIcon sx={{ fontSize: 20 }} color="primary" onClick={() => {addFavourite(coin.name, true); handleState(coin.name)}}></FavoriteIcon> }
      </TableCell>
};

export default FavColumn;
