import React, { useState } from "react";

//Components
import TableCoins from "./components/TableCoins";
import Favourites from "./components/Favourites";
import Pagination from "./components/Pagination";
import Trending from "./components/Trending";
import Header from "./components/Header";

//Styles
import { Container, Grid, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

//hooks
import { useCoinsFetch } from "./hooks/useCoinsFetch";
import { useFavourites } from "./hooks/useFavourites";
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1Bold: true;
  }
}
function App() {
  const { favourites, addFavourite } = useFavourites();

  const { coins, isLoading, error } = useCoinsFetch();

  const [search, setSearch] = useState<Number>(0)
  const [currentPage, setCurrentPage] = useState<Number>(0)
  const [coinsPerPage] = useState<Number>(10)
  const [totalCoins] = useState<Number>(100)

  // Change page
  const paginate = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Searching Coins Input
  const searching = (coin: number): void => {
    setSearch(coin);
  };

  if (error)
    return (
      <Container maxWidth="xl">
        <Typography variant="h2">Something went wrong ..</Typography>
      </Container>
    );

  return (
    <Container maxWidth="xl">
      <Header searching={searching} title="Coin Market" />
      <Grid container spacing={2} columns={{ xs: 4, md: 12 }}>
        <Grid item xs={4}>
          <Favourites favouritesCoins={favourites} coins={coins} />
        </Grid>
        <Grid item xs={4}>
          <Trending sort={true} title="Biggest Gainers" />
        </Grid>
        <Grid item xs={4}>
          <Trending sort={false} title="Running Badly" />
        </Grid>
      </Grid>
      <TableCoins
        coins={coins}
        search={search}
        loading={isLoading}
        currentPage={currentPage}
        coinsPerPage={coinsPerPage}
        addFavourite={addFavourite}
        favourites={favourites}
      />
      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={totalCoins}
        paginate={paginate}
      />
    </Container>
  );
}

export default App;
