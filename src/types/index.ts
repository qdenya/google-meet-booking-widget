export interface BookingSlot {
  start: string;
  end: string;
  duration: number;
}

export interface ClientConfig {
  name: string;
  domain: string;
  timezone: string;
  slotDurationMinutes: number;
  advanceDays: number;
  minHoursAhead: number;
  recaptcha: {
    enabled: boolean;
    siteKey: string | null;
  };
}

export interface SpecialistInfo {
  name: string;
  photo?: string;
  description?: string;
  email?: string;
  meetSubject?: string;
  meetDescription?: string;
  infoLabels?: {
    timeSlot?: string;
    confirmation?: string;
    videoCall?: string;
  };
}

export interface BookingFormData {
  startTime: string;
  name: string;
  email: string;
  phone: string;
  description?: string;
  recaptchaToken?: string;
}

export interface BookingResponse {
  id: string;
  clientId: number;
  startTime: string;
  endTime: string;
  clientInfo: {
    name: string;
    email: string;
    phone: string;
  };
  meetLink: string;
  status: string;
  createdAt: string;
}

export interface WidgetConfig {
  apiUrl: string;
  apiToken: string;
  specialist?: SpecialistInfo;
  theme?: {
    primaryColor?: string;
    secondaryColor?: string;
  };
}
