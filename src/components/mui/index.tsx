"use client";
import { Table, TableBody, Typography, Button } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import theme from "@mui/core/theme";
import Buttons from "@mui/components/button";
import Modal from "./components/modal";
import { useState } from "react";

const Mui = () => {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography variant="h1" textAlign={"center"}>
          Material UI
        </Typography>
        <Table>
          <TableBody>
            <Buttons />
          </TableBody>
        </Table>

        <Button variant="contained" onClick={() => {
          setOpen(true);
        }}>
          Open Modal
        </Button>

        <Modal isOpen={open} handleClose={() => {
          setOpen(false);
        }}>
          <Buttons />
        </Modal>
      </ThemeProvider>
    </div>
  );
};

export default Mui;
