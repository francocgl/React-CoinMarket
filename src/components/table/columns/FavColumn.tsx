import React, { ReactElement } from "react";

import { TableCell } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const FavColumn = ({ coin, addFavourite, favourites }): ReactElement => {
  const handleState = (id) => {
    let isFavourite = favourites.find((element) => element === id);
    if (!isFavourite) {
      return (coin["isFavorite"] = true);
    }
    return (coin["isFavorite"] = false);
  };

  return (
    <TableCell>
      {!coin.isFavorite && (
        <FavoriteBorderIcon
          sx={{ fontSize: 20 }}
          color="primary"
          onClick={() => {
            addFavourite(coin.name);
            handleState(coin.name);
          }}
        ></FavoriteBorderIcon>
      )}
      {coin.isFavorite && (
        <FavoriteIcon
          key={coin.id}
          sx={{ fontSize: 20 }}
          color="primary"
          onClick={() => {
            addFavourite(coin.name, true);
            handleState(coin.name);
          }}
        ></FavoriteIcon>
      )}
    </TableCell>
  );
};

export default FavColumn;
