import { IAdvertisements } from '~/interface/IAdvertisements';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import { useEditAdvertisementsMutation } from '~/services/query';
import { Button, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const AdvTable = ({ data }: { data: IAdvertisements }) => {
  const [trigger, { isLoading }] = useEditAdvertisementsMutation();
  console.log(isLoading);

  const changePublished = (published: boolean, id: string) => {
    trigger({
      id,
      published,
    });
  };
  if (!data) return <></>;
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {Object.keys(data?.data[0]).map((row) => (
                <TableCell key={row}>{row}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align='left'>{row.id}</TableCell>
                <TableCell align='left'>
                  {new Date(row.timestamp).toLocaleString('en-GB', {
                    hour12: false,
                  })}
                </TableCell>
                <TableCell align='left'>
                  {new Date(row.timestampPublished).toLocaleString('en-GB', {
                    hour12: false,
                  })}
                </TableCell>
                <TableCell align='left'>{row.idAdv}</TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='left'>{row.description}</TableCell>
                <TableCell align='left'>
                  {row.published ? (
                    <Button onClick={() => changePublished(false, row.id)} variant='contained'>
                      Опубликовано
                    </Button>
                  ) : (
                    <Button onClick={() => changePublished(true, row.id)} variant='contained'>
                      Опубликовать
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={isLoading}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <CircularProgress />
        </Box>
      </Modal>
    </div>
  );
};

export default AdvTable;
