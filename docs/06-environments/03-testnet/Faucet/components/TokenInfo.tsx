import * as React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function TokenInfo({ tokenInfo }) {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <FormControl fullWidth>
          <TextField
            disabled
            id="contract-address"
            label="Contract address"
            value={tokenInfo.address}
          ></TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <TextField
            disabled
            id="token-type"
            label="Type"
            value={tokenInfo.type.toUpperCase()}
          ></TextField>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <TextField
            disabled
            id="mint-amount"
            label="Amount"
            value={tokenInfo.amount}
          />
        </FormControl>
      </Grid>
    </>
  );
}