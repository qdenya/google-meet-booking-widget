import React from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './SelectedDateTime.module.css';

export const SelectedDateTime: React.FC = () => {
  const { selectedDate } = useAppSelector((state) => state.calendar);
  const { selectedSlot } = useAppSelector((state) => state.booking);

  if (!selectedDate || !selectedSlot) {
    return null;
  }

  const formatDate = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Выбранное время</h3>
      </div>
      
      <div className={styles.content}>
        <div className={styles.dateBlock}>
          <div className={styles.label}>Дата</div>
          <div className={styles.value}>{formatDate(selectedDate)}</div>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.timeBlock}>
          <div className={styles.label}>Время</div>
          <div className={styles.value}>
            {formatTime(selectedSlot.start)} - {formatTime(selectedSlot.end)}
          </div>
        </div>
      </div>
    </div>
  );
};
