import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CalendarState {
  selectedDate: string | null;
  currentMonth: string; // ISO string вместо Date
}

const initialState: CalendarState = {
  selectedDate: null,
  currentMonth: new Date().toISOString(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload;
    },
    setCurrentMonth: (state, action: PayloadAction<string>) => {
      state.currentMonth = action.payload;
    },
    nextMonth: (state) => {
      const current = new Date(state.currentMonth);
      current.setMonth(current.getMonth() + 1);
      state.currentMonth = current.toISOString();
    },
    previousMonth: (state) => {
      const current = new Date(state.currentMonth);
      current.setMonth(current.getMonth() - 1);
      state.currentMonth = current.toISOString();
    },
  },
});

export const { setSelectedDate, setCurrentMonth, nextMonth, previousMonth } = calendarSlice.actions;
export default calendarSlice.reducer;
