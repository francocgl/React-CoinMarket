import React from 'react';
import { Typography, ListItem, ListItemAvatar, Avatar, ListItemText  } from '@mui/material'

const TrendingList = ({coin, index}) => {
    const is_up = (coin.price_change_percentage_24h > 0 ) ? '+' : '';
    const volume = Math.round(coin.price_change_percentage_24h * 100) / 100; 

    return (
        <ListItem alignItems="center" key={coin.id} >
            <Typography variant="body1" mr={2}>{index}</Typography>
            <ListItemAvatar>
                <Avatar  sx={{ height: '1.5rem', width: '1.5rem' }} alt={coin.name}  src={coin.image}  /> 
            </ListItemAvatar>
            <ListItemText>
                <Typography color="light" variant='body1' style={{fontWeight : '600'}}>{coin.name} <small style={{color : 'grey'}}>{coin.symbol.toUpperCase()}</small></Typography> 
            </ListItemText>
            <Typography variant='body1' style={{fontWeight : '600'}} color={(is_up) ? 'green' : 'red' }> 
                {`${is_up} ${volume}% `}
            </Typography> 
        </ListItem>
    )
};

export default TrendingList;
