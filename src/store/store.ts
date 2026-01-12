import { configureStore } from '@reduxjs/toolkit';
import { bookingApi } from '../api/bookingApi';
import calendarReducer from '../features/calendar/calendarSlice';
import bookingReducer from '../features/booking/bookingSlice';

export const store = configureStore({
  reducer: {
    [bookingApi.reducerPath]: bookingApi.reducer,
    calendar: calendarReducer,
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
