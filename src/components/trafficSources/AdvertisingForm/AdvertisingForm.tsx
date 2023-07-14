import Box from '@mui/material/Box';
import { advertising } from '~/utils/constants';
import { Button, TextField } from '@mui/material';
import { useAddAdvertisementsMutation } from '~/services/query';
import { useState } from 'react';

const AdvertisingForm = () => {
  const [data, setData] = useState({
    idAdv: '',
    name: '',
    description: '',
    published: false,
  });
  const [trigger] = useAddAdvertisementsMutation();

  const addAdvertisements = () => {
    trigger(data);
  };

  const unwantedKeys = ['id', 'timestamp', 'timestampPublished', 'published'];
  return (
    <>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {Object.entries(advertising)
          .filter(([key]) => !unwantedKeys.includes(key))
          .map(([el], i) => (
            <TextField
              onChange={(e) =>
                setData({ ...data, [el === 'id_adv' ? 'idAdv' : el]: e.target.value })
              }
              multiline
              maxRows={7}
              fullWidth
              key={i}
              label={el}
              variant='outlined'
            />
          ))}
        <Button onClick={addAdvertisements} fullWidth variant='contained'>
          Add Ads
        </Button>
      </Box>
    </>
  );
};

export default AdvertisingForm;
