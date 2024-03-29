import React, { ReactElement } from "react";

import { Grid, TextField, Typography } from "@mui/material";

interface HeaderProps {
  searching: (coin: any) => void;
  title: string;
}

const Header = ({ searching, title }: HeaderProps): ReactElement => {
  return (
    <Grid container mt={2} mb={2} spacing={2} columns={{ xs: 4, md: 12 }}>
      <Grid item xs={8}>
        <Typography variant="h4">{title}</Typography>
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Search"
          variant="outlined"
          placeholder="Search a coin"
          onChange={(e) => searching(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
