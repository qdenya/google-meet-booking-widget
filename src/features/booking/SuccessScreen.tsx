import React from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { resetBooking } from './bookingSlice';
import { resetCalendar } from '../calendar/calendarSlice';
import approveIcon from '../../assets/Approve.svg';
import styles from './SuccessScreen.module.css';

export const SuccessScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bookingResult, formData } = useAppSelector((state) => state.booking);

  const handleNewBooking = () => {
    dispatch(resetBooking());
    dispatch(resetCalendar());
  };

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    return {
      date: date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      time: date.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  };

  if (!bookingResult) {
    return null;
  }

  const { date, time } = formatDateTime(bookingResult.startTime);

  return (
    <div className={styles.container}>
      <img src={approveIcon} alt="Успех" className={styles.icon} />
      <h2 className={styles.title}>Встреча успешно забронирована!</h2>
      <p className={styles.subtitle}>
        На ваш email отправлена ссылка на встречу
      </p>

      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Дата:</span>
          <span className={styles.detailValue}>{date}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Время:</span>
          <span className={styles.detailValue}>{time}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Имя:</span>
          <span className={styles.detailValue}>{formData.name}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Email:</span>
          <span className={styles.detailValue}>{formData.email}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>Телефон:</span>
          <span className={styles.detailValue}>{formData.phone}</span>
        </div>
      </div>

      <button onClick={handleNewBooking} className={styles.newBookingButton}>
        Забронировать еще
      </button>
    </div>
  );
};
