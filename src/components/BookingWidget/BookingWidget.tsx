import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Calendar } from '../../features/calendar/Calendar';
import { SlotsList } from '../../features/slots/SlotsList';
import { SpecialistCard } from '../../features/specialist/SpecialistCard';
import { BookingForm } from '../../features/booking/BookingForm';
import { SuccessScreen } from '../../features/booking/SuccessScreen';
import type { SpecialistInfo } from '../../types';
import styles from './BookingWidget.module.css';

interface BookingWidgetProps {
  specialist?: SpecialistInfo;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({ specialist }) => {
  const { currentStep } = useAppSelector((state) => state.booking);

  useEffect(() => {
    // Инициализируем выбранную дату как сегодня
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  }, []);

  return (
    <div className={styles.widget}>

      {currentStep === 'calendar' && (
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
      )}

      {currentStep === 'form' && (
        <div className={styles.formContent}>
          <BookingForm />
        </div>
      )}

      {currentStep === 'success' && (
        <div className={styles.successContent}>
          <SuccessScreen />
        </div>
      )}
    </div>
  );
};
