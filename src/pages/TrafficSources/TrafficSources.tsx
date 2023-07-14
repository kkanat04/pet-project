import styles from './TrafficSources.module.scss';

import AdvSource from '~/components/trafficSources/AdvSource/AdvSource';
import Advertising from '~/components/trafficSources/Advertising/Advertising';
import { Button, CircularProgress } from '@mui/material';
import Modal from '~/components/trafficSources/Modal/Modal';
import { useState } from 'react';
import { useAdvertisementsQuery, useAdvSourcesQuery, useBlogsQuery } from '~/services/query';
import Bloger from '~/components/trafficSources/Bloger/Bloger';

const TrafficSources = () => {
  const [btnValue, setBtnValue] = useState('');
  const [open, setOpen] = useState(false);

  const handleOpen = (value: string) => {
    setBtnValue(value);
    setOpen(true);
  };

  const { data, isLoading } = useAdvSourcesQuery();
  const { data: data2, isLoading: isLoading2 } = useAdvertisementsQuery();
  const { data: data3, isLoading: isLoading3 } = useBlogsQuery();

  return (
    <div className={styles.trafficSources}>
      <div className={styles.btn}>
        <Button onClick={() => handleOpen('adv source')} variant='contained'>
          Add Ads
        </Button>
        <Button onClick={() => handleOpen('ads')} variant='contained'>
          Add an advertising source
        </Button>
      </div>
      {isLoading && isLoading2 && isLoading3 ? (
        <CircularProgress />
      ) : (
        <>
          <AdvSource data={data} />
          <Advertising data={data2} />
          <Bloger data={data3} />
        </>
      )}

      <Modal open={open} setOpen={setOpen} btnValue={btnValue} />
    </div>
  );
};

export default TrafficSources;
