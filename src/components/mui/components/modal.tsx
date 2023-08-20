import { Box, Button, SxProps, Theme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MuiModal from '@mui/material/Modal';
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

const modalStyles: SxProps<Theme> = (theme) => ({
  ".MuiBackdrop-root": {
    bgcolor: `${theme.palette.text.primary}3D`,
    backdropFilter: 'blur(7px)',
  }
})

const wrapperStyles: SxProps<Theme> = {
  position: 'absolute',
  top: '64px',
  left: '0',
  minWidth: '100vh',
  height: 'calc(100vh - 64px)',
  width: '100%',
  p: '23px 64px 64px',
  bgcolor: 'common.white',
  borderRadius: '12px 12px 0px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: 'auto',
}

const closeStyles: SxProps<Theme> = {
  position: 'absolute',
  top: 20,
  right: 20,
  width: 20,
  height: 20,
}

const Modal: React.FC<ModalProps> = ({ isOpen, handleClose, children }) => {
  return (
    <MuiModal open={isOpen} onClose={handleClose} sx={modalStyles}>
      <Box sx={wrapperStyles}>
        <Button startIcon={<CloseIcon />} sx={closeStyles} onClick={handleClose}>
        </Button>
        {children}
      </Box>
    </MuiModal>
  )
}

export default Modal;