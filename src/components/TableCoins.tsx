import React, { ReactElement } from "react";
import CoinRow from "./table/CoinRow";
import {
  CircularProgress,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
// Headers array
const headers: string[] = [
  "#",
  "Coin",
  "Price",
  "24h %",
  "Volume 24hs",
  "Circulating Supply",
];

const TableCoins = ({
  coins,
  search,
  loading,
  currentPage,
  coinsPerPage,
  addFavourite,
  favourites,
}): ReactElement => {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.includes(search) ||
      coin.symbol.includes(search) ||
      coin.id.includes(search)
  );

  if (loading) return <CircularProgress></CircularProgress>;

  return (
    <Table sx={{ margin: "1.5rem 0" }}>
      <TableHead>
        <TableRow>
          {headers.map((title, index) => (
            <TableCell key={index}>{title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {search
          ? filteredCoins.map((coin) => (
              <CoinRow
                key={coin.id}
                coin={coin}
                addFavourite={addFavourite}
                favourites={favourites}
              />
            ))
          : coins
              .slice(currentPage, currentPage + 1 * coinsPerPage)
              .map((coin) => (
                <CoinRow
                  key={coin.id}
                  coin={coin}
                  addFavourite={addFavourite}
                  favourites={favourites}
                />
              ))}
      </TableBody>
    </Table>
  );
};

export default TableCoins;
