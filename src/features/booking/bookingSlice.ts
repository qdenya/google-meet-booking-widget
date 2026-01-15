import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  currentStep: 'calendar' | 'form' | 'success';
  selectedSlot: {
    start: string;
    end: string;
  } | null;
  formData: {
    name: string;
    email: string;
    phone: string;
    description: string;
  };
  bookingResult: {
    meetLink: string;
    startTime: string;
    endTime: string;
  } | null;
  recaptchaToken: string | null;
}

const initialState: BookingState = {
  currentStep: 'calendar',
  selectedSlot: null,
  formData: {
    name: '',
    email: '',
    phone: '',
    description: '',
  },
  bookingResult: null,
  recaptchaToken: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<'calendar' | 'form' | 'success'>) => {
      state.currentStep = action.payload;
    },
    setSelectedSlot: (state, action: PayloadAction<{ start: string; end: string } | null>) => {
      state.selectedSlot = action.payload;
    },
    updateFormData: (state, action: PayloadAction<Partial<BookingState['formData']>>) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setBookingResult: (state, action: PayloadAction<BookingState['bookingResult']>) => {
      state.bookingResult = action.payload;
    },
    setRecaptchaToken: (state, action: PayloadAction<string | null>) => {
      state.recaptchaToken = action.payload;
    },
    resetBooking: (state) => {
      const savedRecaptchaToken = state.recaptchaToken;
      state.currentStep = 'calendar';
      state.selectedSlot = null;
      state.formData = initialState.formData;
      state.bookingResult = null;
      state.recaptchaToken = savedRecaptchaToken;
    },
  },
});

export const {
  setCurrentStep,
  setSelectedSlot,
  updateFormData,
  setBookingResult,
  setRecaptchaToken,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
