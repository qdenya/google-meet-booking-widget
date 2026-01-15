import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { useGetClientConfigQuery } from '../../api/bookingApi';
import { setRecaptchaToken, resetBooking } from '../../features/booking/bookingSlice';
import { resetCalendar } from '../../features/calendar/calendarSlice';
import { Calendar } from '../../features/calendar/Calendar';
import { SlotsList } from '../../features/slots/SlotsList';
import { SpecialistCard } from '../../features/specialist/SpecialistCard';
import { BookingForm } from '../../features/booking/BookingForm';
import { SuccessScreen } from '../../features/booking/SuccessScreen';
import { SlotsOverlay } from '../SlotsOverlay/SlotsOverlay';
import { BookingFormOverlay } from '../BookingFormOverlay/BookingFormOverlay';
import { SelectedDateTime } from '../SelectedDateTime/SelectedDateTime';
import type { SpecialistInfo } from '../../types';
import styles from './BookingWidget.module.css';

interface BookingWidgetProps {
  specialist?: SpecialistInfo;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ specialist }) => {
  const dispatch = useAppDispatch();
  const { currentStep } = useAppSelector((state) => state.booking);
  const { selectedDate } = useAppSelector((state) => state.calendar);
  const [isSlotsOverlayOpen, setIsSlotsOverlayOpen] = useState(false);
  const [isFormOverlayOpen, setIsFormOverlayOpen] = useState(false);

  // Загружаем конфигурацию клиента (включая recaptcha токен)
  const { data: clientConfig, isLoading: isConfigLoading, error: configError } = useGetClientConfigQuery(undefined);

  useEffect(() => {
    if (clientConfig?.data?.recaptcha?.enabled && clientConfig?.data?.recaptcha?.siteKey) {
      // Загружаем Google reCAPTCHA скрипт
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${clientConfig.data.recaptcha.siteKey}`;
      script.async = true;
      document.head.appendChild(script);
      
      // Сохраняем recaptcha siteKey в store
      dispatch(setRecaptchaToken(clientConfig.data.recaptcha.siteKey));
      console.log('reCAPTCHA loaded with siteKey:', clientConfig.data.recaptcha.siteKey);
      
      return () => {
        // Cleanup
        document.head.removeChild(script);
      };
    }
  }, [clientConfig, dispatch]);

  useEffect(() => {
    // Инициализируем выбранную дату как сегодня
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  }, []);

  // Открываем overlay на мобильных и планшетах при выборе даты
  useEffect(() => {
    if (selectedDate && window.innerWidth <= 1024) {
      setIsSlotsOverlayOpen(true);
    }
  }, [selectedDate]);

  // Обработчик закрытия SlotsOverlay с возвратом к начальному состоянию
  const handleCloseSlotsOverlay = () => {
    setIsSlotsOverlayOpen(false);
    dispatch(resetBooking());
    dispatch(resetCalendar());
  };

  // Обработчик закрытия BookingFormOverlay с возвратом к начальному состоянию
  const handleCloseFormOverlay = () => {
    setIsFormOverlayOpen(false);
    dispatch(resetBooking());
    dispatch(resetCalendar());
  };

  // Открываем форму в overlay на мобильных и планшетах
  useEffect(() => {
    if (currentStep === 'form' && window.innerWidth <= 1024) {
      setIsFormOverlayOpen(true);
    } else {
      setIsFormOverlayOpen(false);
    }
  }, [currentStep]);

  return (
    <div className={styles.widget}>
      {isConfigLoading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Загрузка...</p>
        </div>
      )}

      {configError && (
        <div className={styles.error}>
          <p>Ошибка загрузки конфигурации. Проверьте API токен.</p>
        </div>
      )}

      {!isConfigLoading && !configError && (
        <>
          {currentStep === 'calendar' && (
        <>
          <div className={styles.content}>
            <div className={styles.leftColumn}>
              <SpecialistCard specialist={specialist} />
            </div>

            <div className={styles.centerColumn}>
              <Calendar />
            </div>

            <div className={styles.rightColumn}>
              <SlotsList />
            </div>
          </div>

          <SlotsOverlay 
            isOpen={isSlotsOverlayOpen} 
            onClose={handleCloseSlotsOverlay} 
          />
        </>
      )}

      {currentStep === 'form' && (
        <>
          <div className={styles.content}>
            <div className={styles.leftColumn}>
              <SpecialistCard specialist={specialist} />
            </div>

            <div className={styles.formMainContent}>
              <BookingForm />
            </div>
          </div>

          <BookingFormOverlay
            isOpen={isFormOverlayOpen}
            onClose={handleCloseFormOverlay}
          />
        </>
      )}

      {currentStep === 'success' && (
        <div className={styles.successContent}>
          <SuccessScreen />
        </div>
      )}
        </>
      )}
    </div>
  );
};
