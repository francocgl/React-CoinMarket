import React, { ReactElement } from "react"

import {
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material"

const FavouriteList = ({ coin, index }): ReactElement => {
  return (
    <ListItem alignItems="center" key={coin.id}>
      <Typography variant="body1" mr={2} sx={{ color: "gray" }}>
        {index + 1}
      </Typography>
      <ListItemAvatar>
        <Avatar
          sx={{ height: "1.5rem", width: "1.5rem" }}
          alt={coin.name}
          src={coin.image}
        />
      </ListItemAvatar>
      <ListItemText>
        <Typography variant="body1" style={{ fontWeight: "600" }}>
          {coin.name}{" "}
          <small style={{ color: "grey" }}>{coin.symbol.toUpperCase()}</small>
        </Typography>
      </ListItemText>
      <Typography variant="body1" style={{ fontWeight: "600" }}>
        {" "}
        ${coin.current_price}
      </Typography>
    </ListItem>
  );
};

export default FavouriteList;
