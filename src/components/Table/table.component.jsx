import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const dataTable = [
  {id:stateName,numeric:false,label:firstLabel},
  {id:confirmed,numeric:false,label:firstLabel},
  {id:active,numeric:false,label:firstLabel},
  {id:deaths,numeric:false,label:firstLabel},
  {id:recovered,numeric:false,label:firstLabel},

];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell >Confirmed</TableCell>
            <TableCell >Active</TableCell>
            <TableCell >Deaths</TableCell>
            <TableCell >Recovered</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.states}</TableCell>
              <TableCell align="right">{row.confirmed}</TableCell>
              <TableCell align="right">{row.deaths}</TableCell>
              <TableCell align="right">{row.recovered}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
