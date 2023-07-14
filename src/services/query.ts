import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { RootState } from '~/redux/store';
import { SET_TOKEN } from '~/redux/slices/AuthSlice';
import { Routes } from '~/api/api';
import { IAdvSources } from '~/interface/IAdvSources';
import { IAdvertisements } from '~/interface/IAdvertisements';
import { IBlogs } from '~/interface/IBlogs';

type addAdvSourcesArg = {
  name: string;
  description: string;
  utmSource: string;
  utmCompaign: string;
  type: string;
};

type addAdvertisementsArg = {
  idAdv: string;
  name: string;
  description: string;
  published: boolean;
};

type editAdvertisementsArg = {
  id: string;
  published?: boolean;
};

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_DOMAIN + import.meta.env.VITE_BACKEND_PREFIX_COMPANY,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const user = (getState() as RootState).auth;

    if (user && endpoint !== 'refresh') {
      headers.set('Authorization', `Bearer ${user.token}`);
    }
    if (headers) return headers;
  },
  credentials: 'same-origin',
});

const baseQueryWithAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    api.dispatch(SET_TOKEN(''));
  }
  return result;
};

export const ProjectApi = createApi({
  reducerPath: 'ProjectApi',
  tagTypes: ['ads', 'adv', 'blogs'],
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    advSources: builder.query<IAdvSources, void>({
      query: () => ({
        url: Routes.get.adv_sources,
      }),
      providesTags: ['ads'],
    }),
    addAdvSources: builder.mutation<any, addAdvSourcesArg>({
      query: (data) => ({
        method: 'POST',
        url: Routes.post.adv_sources,
        body: data,
      }),
      invalidatesTags: ['ads'],
    }),
    advertisements: builder.query<IAdvertisements, void>({
      query: () => ({
        url: Routes.get.advertisements,
      }),
      providesTags: ['adv'],
    }),
    editAdvertisements: builder.mutation<any, editAdvertisementsArg>({
      query: (data) => ({
        method: 'POST',
        url: Routes.post.advertisements,
        body: data,
      }),
      invalidatesTags: ['adv'],
    }),
    addAdvertisements: builder.mutation<any, addAdvertisementsArg>({
      query: (data) => ({
        method: 'POST',
        url: Routes.post.advertisements,
        body: data,
      }),
      invalidatesTags: ['adv'],
    }),
    blogs: builder.query<IBlogs, void>({
      query: () => ({
        url: Routes.get.blogs,
      }),
      providesTags: ['blogs'],
    }),
    addBlogs: builder.mutation<any, addAdvertisementsArg>({
      query: (data) => ({
        method: 'POST',
        url: Routes.post.advertisements,
        body: data,
      }),
      invalidatesTags: ['blogs'],
    }),
  }),
});

export const {
  useAdvSourcesQuery,
  useAdvertisementsQuery,
  useAddAdvSourcesMutation,
  useAddAdvertisementsMutation,
  useBlogsQuery,
  useEditAdvertisementsMutation,
} = ProjectApi;
