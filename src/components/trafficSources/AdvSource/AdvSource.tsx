import AdsTable from '~/components/Table/AdsTable';

const AdvSource = ({ data }: any) => {
  return (
    <div>
      <h3>Adv_source</h3>
      <AdsTable data={data} />
    </div>
  );
};

export default AdvSource;
