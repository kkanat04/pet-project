import BlogsTable from '~/components/Table/BlogsTable';

const Bloger = ({ data }: any) => {
  return (
    <div>
      <h3>Bloger</h3>
      <BlogsTable data={data} />
    </div>
  );
};

export default Bloger;
