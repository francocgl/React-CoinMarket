import React from 'react';
import { Card, CardContent, Typography, List, ListItem, CardActions, Button} from '@mui/material'

//Icons
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavouriteList from './FavouriteList';

const Favourites = ({ favouritesCoins, coins }) => {
  const [ limit, setLimit ] = React.useState(4)

  const handleLimit = () => {
    if(favouritesCoins.length <= 4){
      setLimit(4)
    }else{ 
      setLimit(100)
    }
  }

  return (
    <Card variant="outlined"  sx={{ height: '100%' }}>
        <CardContent>
          <Typography color="primary" sx={{ fontSize: 20, fontWeight : '600'}}  >
            <FavoriteIcon sx={{ fontSize: 20 }} color="primary" mr={4}></FavoriteIcon> Favourites Coins
          </Typography>
          <List variant="body2">
            {
              favouritesCoins.map( (filteredName,index) => {
                return <span key={index} >
                  {
                    coins.map( (coin) => {
                      if(coin.name === filteredName ){
                        return <FavouriteList coin={coin} index={index}  alignItems="center" key={coin.id} />
                      }
                      return false
                    })
                  }
                </span>
                }).slice(0, limit)
              }{
                (favouritesCoins.length === 0) && <ListItem><Typography> No entries...</Typography></ListItem> 
              }
          </List>
        </CardContent>
        <CardActions>
          { (favouritesCoins.length > limit) && <Button size="small" onClick={() => handleLimit() }>View More</Button> } 
        </CardActions>
    </Card>
  )
};

export default Favourites;
