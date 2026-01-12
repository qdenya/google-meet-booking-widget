import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { resetBooking } from './bookingSlice';
import styles from './SuccessScreen.module.css';

export const SuccessScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bookingResult, formData } = useAppSelector((state) => state.booking);

  const handleNewBooking = () => {
    dispatch(resetBooking());
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
      <div className={styles.icon}>✅</div>
      <h2 className={styles.title}>Встреча успешно забронирована!</h2>
      <p className={styles.subtitle}>
        На ваш email отправлена ссылка на встречу
      </p>

      <div className={styles.details}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>📅 Дата:</span>
          <span className={styles.detailValue}>{date}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>🕐 Время:</span>
          <span className={styles.detailValue}>{time}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>👤 Имя:</span>
          <span className={styles.detailValue}>{formData.name}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>📧 Email:</span>
          <span className={styles.detailValue}>{formData.email}</span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>📞 Телефон:</span>
          <span className={styles.detailValue}>{formData.phone}</span>
        </div>
      </div>

      <a
        href={bookingResult.meetLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.meetLink}
      >
        Открыть Google Meet
      </a>

      <button onClick={handleNewBooking} className={styles.newBookingButton}>
        Забронировать еще одну встречу
      </button>
    </div>
  );
};
