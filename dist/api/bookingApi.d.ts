interface ApiState {
    apiUrl: string;
    apiToken: string;
}
export declare const setApiConfig: (config: ApiState) => void;
export declare const bookingApi: any;
export declare const useGetClientConfigQuery: any, useGetAvailableSlotsQuery: any, useCreateBookingMutation: any;
export {};
