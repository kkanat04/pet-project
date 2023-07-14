import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { IBlogs } from '~/interface/IBlogs';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'tags', headerName: 'Tags', width: 100 },
  { field: 'claps', headerName: 'Claps', width: 100 },
  { field: 'last_modified_at', headerName: 'Last_modified_at', width: 200 },
  { field: 'published_at', headerName: 'Published_at', width: 200 },
  { field: 'url', headerName: 'Url', width: 300 },
  { field: 'image_url', headerName: 'Image_url', width: 300 },
  { field: 'lang', headerName: 'Lang', width: 100 },
  { field: 'publication_id', headerName: 'Publication_id', width: 150 },
  { field: 'word_count', headerName: 'Word_count', width: 150 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'reading_time', headerName: 'Reading_time', width: 200 },
  { field: 'responses_count', headerName: 'Responses_count', width: 200 },
  { field: 'voters', headerName: 'Voters', width: 100 },
  { field: 'topics', headerName: 'Topics', width: 170 },
  { field: 'author', headerName: 'Author', width: 150 },
  { field: 'subtitle', headerName: 'Subtitle', width: 300 },
];

export default function BlogsTable({ data }: { data: IBlogs }) {
  if (!data) return <></>;
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data?.data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
