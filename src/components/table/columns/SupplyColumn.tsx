import React, { ReactElement } from "react"

import { TableCell } from "@mui/material"
import { printNumber } from "../../../functions"

const SupplyColumn = ({ coin }): ReactElement => {
  return (
    <TableCell>
      <b>
        {printNumber(coin.circulating_supply, 0)}{" "}
        <span style={{ color: "grey" }}>{coin.symbol.toUpperCase()}</span>{" "}
      </b>
    </TableCell>
  );
};

export default SupplyColumn;
