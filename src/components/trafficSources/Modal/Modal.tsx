import Box from '@mui/material/Box';
import { Modal as ModalMui } from '@mui/material';
import { FC } from 'react';
import AdvSourceForm from '~/components/trafficSources/AdvSourceForm/AdvSourceForm';
import AdvertisingForm from '~/components/trafficSources/AdvertisingForm/AdvertisingForm';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '1px solid #000',
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

interface ModalProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  btnValue: string;
}

const Modal: FC<ModalProps> = ({ open, setOpen, btnValue }) => {
  const handleClose = () => setOpen(false);
  return (
    <div>
      <ModalMui
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>{btnValue === 'adv source' ? <AdvSourceForm /> : <AdvertisingForm />}</Box>
      </ModalMui>
    </div>
  );
};

export default Modal;
