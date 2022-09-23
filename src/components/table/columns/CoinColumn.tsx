import React, { ReactElement } from "react";
import { TableCell } from "@mui/material";

const CoinColumn = ({ coin }): ReactElement => {
  return (
    <TableCell>
      <img
        src={coin.image}
        style={{ maxWidth: "20px" }}
        alt="img symbol"
        className="img-fluid me-4"
      />
      <span>
        <b>{coin.name}</b>
      </span>
      <span className="ms-3 text-muted text-uppercase">
        <b>{coin.symbol}</b>
      </span>
    </TableCell>
  );
};

export default CoinColumn;
