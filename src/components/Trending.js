import React from 'react';
import { Card, CardContent, Typography, List, CircularProgress  } from '@mui/material'
import TrendingList from './TrendingList';
//Icons
import WhatshotIcon from '@mui/icons-material/Whatshot';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
// Hook
import { useTrendingFetch } from '../hooks/useTrendingFetch';

const Trending = ({ sort, title }) => {
  const {
    isLoading,
    sortCoins, 
    error
  } = useTrendingFetch(sort);

  if (error) return <div>Something went wrong ...</div>;

  return (
    <Card variant="outlined"  sx={{ minHeight: '20rem' }}>
        <CardContent>
          <Typography sx={{ fontSize: 20, fontWeight : '600', color: (sort) ? 'green' : 'red'}}  >
            {sort &&  <WhatshotIcon sx={{ fontSize: 25, marginRight: '.5rem' }} color="success" ></WhatshotIcon> }
            {!sort &&  <TrendingDownIcon sx={{ fontSize: 25, color : 'red', marginRight: '.5rem' }} ></TrendingDownIcon> }
            {title}
          </Typography>
          <List variant="body2">
            { isLoading && <CircularProgress></CircularProgress> }
            {
              sortCoins.map( (coin,index) => {
                  return <TrendingList coin={coin} index={index+1}  alignItems="center" key={coin.id} />
              }).slice(0, 5)
            }
          </List>
        </CardContent>
    </Card>
  )
};

export default Trending;
