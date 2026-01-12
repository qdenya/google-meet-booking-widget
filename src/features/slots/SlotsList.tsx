import React, { useMemo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useGetAvailableSlotsQuery } from '../../api/bookingApi';
import { setSelectedSlot, setCurrentStep } from '../booking/bookingSlice';
import styles from './SlotsList.module.css';

export const SlotsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedDate } = useAppSelector((state) => state.calendar);
  const { selectedSlot } = useAppSelector((state) => state.booking);

  const queryParams = useMemo(() => {
    if (!selectedDate) return null;

    const date = new Date(selectedDate);
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    return {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      workingHours: '9-18',
    };
  }, [selectedDate]);

  const { data, isLoading, error } = useGetAvailableSlotsQuery(queryParams!, {
    skip: !queryParams,
  });

  // Сбрасываем выбранный слот при смене даты
  useEffect(() => {
    dispatch(setSelectedSlot(null));
  }, [selectedDate, dispatch]);

  const handleSlotClick = (slot: { start: string; end: string }) => {
    dispatch(setSelectedSlot(slot));
  };

  const handleContinue = () => {
    if (selectedSlot) {
      dispatch(setCurrentStep('form'));
    }
  };

  const isSlotSelected = (slot: { start: string; end: string }) => {
    return selectedSlot?.start === slot.start && selectedSlot?.end === slot.end;
  };

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!selectedDate) {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Доступное время</h3>
        <p className={styles.message}>Выберите дату в календаре</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Доступное время</h3>
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Загрузка слотов...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h3 className={styles.title}>Доступное время</h3>
        <p className={styles.error}>Нет доступных слотов</p>
      </div>
    );
  }

  const slots = data?.data?.slots || [];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Доступное время</h3>
      
      {slots.length === 0 ? (
        <p className={styles.message}>Нет доступных слотов</p>
      ) : (
        <>
          <div className={styles.slotsList}>
            {slots.map((slot, index) => (
              <button
                key={index}
                className={`${styles.slotButton} ${
                  isSlotSelected(slot) ? styles.selected : ''
                }`}
                onClick={() => handleSlotClick(slot)}
              >
                <span className={styles.slotTime}>{formatTime(slot.start)}</span>
              </button>
            ))}
          </div>

          <button
            className={styles.continueButton}
            onClick={handleContinue}
            disabled={!selectedSlot}
          >
            Продолжить
          </button>
        </>
      )}
    </div>
  );
};
