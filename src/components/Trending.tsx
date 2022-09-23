import React, { ReactElement } from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  CircularProgress,
} from "@mui/material";
import TrendingList from "./TrendingList";
//Icons
import WhatshotIcon from "@mui/icons-material/Whatshot";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
// Hook
import { useTrendingFetch } from "../hooks/useTrendingFetch";

interface TrendingProps {
  sort: boolean;
  title: string;
}

const Trending = ({ sort, title }: TrendingProps): ReactElement => {
  const { isLoading, sortCoins, error } = useTrendingFetch(sort);

  if (error) return <div>Something went wrong ...</div>;

  return (
    <Card variant="outlined" sx={{ minHeight: "20rem" }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: "600",
            color: sort ? "green" : "red",
          }}
        >
          {sort && (
            <WhatshotIcon
              sx={{ fontSize: 25, marginRight: ".5rem" }}
              color="success"
            ></WhatshotIcon>
          )}
          {!sort && (
            <TrendingDownIcon
              sx={{ fontSize: 25, color: "red", marginRight: ".5rem" }}
            ></TrendingDownIcon>
          )}
          {title}
        </Typography>
        <List>
          {isLoading && <CircularProgress></CircularProgress>}
          {sortCoins
            .map((coin: any, index) => {
              return (
                <Typography variant="body2" key={coin.id}>
                  <Box alignItems="center">
                    <TrendingList coin={coin} index={index + 1} />
                  </Box>
                </Typography>
              );
            })
            .slice(0, 5)}
        </List>
      </CardContent>
    </Card>
  );
};

export default Trending;
