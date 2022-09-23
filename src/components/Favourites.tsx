import React, { ReactElement, useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  CardActions,
  Button,
  Modal,
  Box,
} from "@mui/material";

//Icons
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavouriteList from "./FavouriteList";

//Styles
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #efefef",
  boxShadow: 24,
  p: 4,
};

interface FavouritesProps {
  favouritesCoins: Number[];
  coins?: any;
}
const Favourites = ({
  favouritesCoins,
  coins,
}: FavouritesProps): ReactElement => {
  const [open, setOpen] = useState<Boolean>(false);
  const [limit] = useState<number>(4);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card variant="outlined" sx={{ height: "100%" }}>
        <CardContent>
          <Typography color="primary" sx={{ fontSize: 20, fontWeight: "600" }}>
            <Box mr={4}>
              <FavoriteIcon
                sx={{ fontSize: 20 }}
                color="primary"
              ></FavoriteIcon>{" "}
              Favourites Coins
            </Box>
          </Typography>
          <List>
            {favouritesCoins
              .map((filteredName, index) => {
                return (
                  <span key={index}>
                    {coins.map((coin) => {
                      if (coin.name === filteredName) {
                        return (
                          <FavouriteList
                            coin={coin}
                            index={index}
                            /* alignItems="center" */
                            key={coin.id}
                          />
                        );
                      }
                      return false;
                    })}
                  </span>
                );
              })
              .slice(0, limit)}
            {favouritesCoins.length === 0 && (
              <ListItem>
                <Typography> No entries...</Typography>
              </ListItem>
            )}
          </List>
        </CardContent>
        <CardActions>
          {favouritesCoins.length > limit && (
            <Button size="small" onClick={handleOpen}>
              View All
            </Button>
          )}
        </CardActions>
      </Card>
      <Modal
        open={open ? true : false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            component="h2"
            color="primary"
            variant="h6"
            align="center"
            mb={2}
          >
            Favourites Coins
          </Typography>
          {favouritesCoins.map((filteredName, index) => {
            return (
              <span key={index}>
                {coins.map((coin) => {
                  if (coin.name === filteredName) {
                    return (
                      <Box alignItems="center">
                        <FavouriteList
                          coin={coin}
                          index={index}
                          key={coin.id}
                        />
                      </Box>
                    );
                  }
                  return false;
                })}
              </span>
            );
          })}
        </Box>
      </Modal>
    </>
  );
};

export default Favourites;
