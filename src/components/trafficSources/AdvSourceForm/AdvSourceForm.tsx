import { Button, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useAddAdvSourcesMutation, useAdvSourcesQuery } from '~/services/query';

const AdvSourceForm = () => {
  const { data: data2 } = useAdvSourcesQuery();
  const [data, setData] = useState({
    name: '',
    description: '',
    utmSource: '',
    utmCompaign: '',
    type: '',
  });
  const [trigger] = useAddAdvSourcesMutation();

  console.log(data);

  const handleChange = (event: SelectChangeEvent) => {
    setData({ ...data, type: event.target.value as string });
  };

  const addAdvSources = () => {
    trigger(data);
  };

  const unwantedKeys = ['id', 'timestamp'];

  if (!data2) return <></>;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {Object.entries(data2?.data[0])
          .filter(([key]) => !unwantedKeys.includes(key))
          .map(([el], i) => {
            return (
              <div key={i}>
                {el !== 'type' ? (
                  <TextField
                    onChange={(e) => setData({ ...data, [el]: e.target.value })}
                    multiline
                    maxRows={7}
                    fullWidth
                    label={el}
                    variant='outlined'
                  />
                ) : (
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>type</InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={data.type}
                      label='type'
                      onChange={handleChange}
                    >
                      <MenuItem value={'BLOGGER'}>BLOGGER</MenuItem>
                      <MenuItem value={'ADVSOURCE'}>ADVSOURCE</MenuItem>
                    </Select>
                  </FormControl>
                )}
              </div>
            );
          })}
        <Button onClick={addAdvSources} fullWidth variant='contained'>
          Add an advertising source
        </Button>
      </Box>
    </>
  );
};

export default AdvSourceForm;
