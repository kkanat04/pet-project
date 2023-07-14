import { Button } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface CustomButtonProps {
  to: string;
  children: string;
}

const CustomButton: FC<CustomButtonProps> = ({ to, children }) => {
  return (
    <Link to={to}>
      <Button variant='contained'>{children}</Button>
    </Link>
  );
};

export default CustomButton;
