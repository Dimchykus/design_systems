import { Button, TableCell, TableRow, Typography } from "@mui/material";

const Buttons = () => {
  return (
    <TableRow>
      <TableCell variant="head">
        <Typography variant="body1" color="grey.100">
          Buttons
        </Typography>
      </TableCell>
      <TableCell>
        <Button variant="contained">Contained</Button>
      </TableCell>
      <TableCell>
        <Button variant="outlined">Outlined</Button>
      </TableCell>
      <TableCell>
        <Button variant="text">Text</Button>
      </TableCell>
      <TableCell>
        <Button variant="contained" href="#button-link">
          Link
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="contained" fullWidth>
          FullWidth
        </Button>
      </TableCell>
      <TableCell>
        <Button disabled>Disabled</Button>
      </TableCell>
    </TableRow>
  );
};

export default Buttons;
