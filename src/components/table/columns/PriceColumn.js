import React from 'react';
import { TableCell } from '@mui/material';
import {printNumber} from '../../../functions';
 
const PriceColumn = ({coin}) => {
  return <TableCell className="text-right">
    <b>${printNumber(coin.current_price, 2)}</b>
  </TableCell>;
};

export default PriceColumn;
