import React from 'react';
import { TableCell } from '@mui/material';
import {printNumber} from '../../../functions';

const VolumeColumn = ({coin}) => {
  
  return <TableCell>
       <b>${printNumber(coin.total_volume,0)}</b> 
  </TableCell>;
};

export default VolumeColumn;
