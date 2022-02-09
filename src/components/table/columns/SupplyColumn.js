import React from 'react';
import { TableCell } from '@mui/material';
import {printNumber} from '../../../functions';

const SupplyColumn = ({coin}) => {
  return <TableCell>
       <b>{printNumber(coin.circulating_supply)} <span style={{color: 'grey'}}>{ coin.symbol.toUpperCase() }</span> </b>
  </TableCell>;
};

export default SupplyColumn;


