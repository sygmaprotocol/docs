import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DomainSelect({ domainArray, setSelectedDomain, disabled }) {
  const [domain, setDomain] = React.useState("");

  const handleChange = (event) => {
    setDomain(event.target.value);
    setSelectedDomain(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: 2, marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="domain-select-label">Network</InputLabel>
        <Select
          disabled={disabled}
          labelId="domain-select-label"
          id="domain-select"
          value={domain}
          label="Network"
          onChange={handleChange}
          required
          sx={{ textTransform: "capitalize" }}
        >
          {domainArray.map((domain) => (
            <MenuItem
              value={domain}
              key={domain.name}
              sx={{ textTransform: "capitalize" }}
            >
              {domain.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}