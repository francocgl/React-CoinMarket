import React, { ReactElement } from "react";

import { TableCell } from "@mui/material";

const PriceChangeColumn = ({ coin }): ReactElement => {
  const is_up = coin.price_change_percentage_24h > 0 ? "+" : "";
  const volume = Math.round(coin.price_change_percentage_24h * 100) / 100;

  return (
    <>
      <TableCell
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        <b>{`${is_up}${volume}%`}</b>
      </TableCell>
    </>
  );
};

export default PriceChangeColumn;
