import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BookingSlot, ClientConfig, BookingFormData, BookingResponse } from '../types';

interface ApiState {
  apiUrl: string;
  apiToken: string;
}

let apiState: ApiState = {
  apiUrl: 'http://localhost:3000',
  apiToken: ''
};

export const setApiConfig = (config: ApiState) => {
  apiState = config;
};

// Динамический baseQuery который использует актуальный apiState
const dynamicBaseQuery = fetchBaseQuery({
  baseUrl: '',
  prepareHeaders: (headers) => {
    headers.set('X-API-Token', apiState.apiToken);
    return headers;
  },
});

const baseQueryWithDynamicUrl: typeof dynamicBaseQuery = async (args, api, extraOptions) => {
  const urlEnd = typeof args === 'string' ? args : args.url;
  const adjustedUrl = `${apiState.apiUrl}${urlEnd}`;
  const adjustedArgs = typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl };
  return dynamicBaseQuery(adjustedArgs, api, extraOptions);
};

export const bookingApi = createApi({
  reducerPath: 'bookingApi',
  baseQuery: baseQueryWithDynamicUrl,
  tagTypes: ['Slots', 'Config'],
  endpoints: (builder) => ({
    // Получить настройки клиента
    getClientConfig: builder.query<{ success: boolean; data: ClientConfig }, void>({
      query: () => `/public/config/${apiState.apiToken}`,
      providesTags: ['Config'],
    }),

    // Получить доступные слоты
    getAvailableSlots: builder.query<
      { success: boolean; data: { slots: BookingSlot[] } },
      { startDate?: string; endDate?: string; workingHours?: string }
    >({
      query: (params) => ({
        url: '/api/slots/available',
        params,
      }),
      providesTags: ['Slots'],
    }),

    // Забронировать встречу
    createBooking: builder.mutation<
      { success: boolean; data: { booking: BookingResponse } },
      BookingFormData
    >({
      query: (body) => ({
        url: '/api/book',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Slots'],
    }),
  }),
});

export const {
  useGetClientConfigQuery,
  useGetAvailableSlotsQuery,
  useCreateBookingMutation,
} = bookingApi;
