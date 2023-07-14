import AdvTable from '~/components/Table/AdvTable';

const Advertising = ({ data }: any) => {
  return (
    <div>
      <h3>Advertising</h3>
      <AdvTable data={data} />
    </div>
  );
};

export default Advertising;
