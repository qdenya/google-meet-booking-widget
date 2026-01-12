import React, { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setSelectedDate, nextMonth, previousMonth } from './calendarSlice';
import styles from './Calendar.module.css';
import leftIcon from '../../assets/left.svg';
import rightIcon from '../../assets/right.svg';

export const Calendar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedDate, currentMonth } = useAppSelector((state) => state.calendar);

  const daysInMonth = useMemo(() => {
    const current = new Date(currentMonth);
    const year = current.getFullYear();
    const month = current.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysCount = lastDay.getDate();
    const startWeekday = firstDay.getDay();

    const days: (Date | null)[] = [];
    
    // Добавляем пустые ячейки для начала месяца
    for (let i = 0; i < (startWeekday === 0 ? 6 : startWeekday - 1); i++) {
      days.push(null);
    }

    // Добавляем дни месяца
    for (let i = 1; i <= daysCount; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  }, [currentMonth]);

  const currentDate = new Date(currentMonth);
  const monthName = currentDate.toLocaleDateString('ru-RU', {
    month: 'long',
  });
  const yearName = currentDate.getFullYear().toString();

  const handleDateClick = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (date >= today) {
      dispatch(setSelectedDate(date.toISOString()));
    }
  };

  const isDateSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    const selected = new Date(selectedDate);
    return (
      date.getDate() === selected.getDate() &&
      date.getMonth() === selected.getMonth() &&
      date.getFullYear() === selected.getFullYear()
    );
  };

  const isDateDisabled = (date: Date | null) => {
    if (!date) return true;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <div className={styles.monthYear}>
          <span className={styles.month}>{monthName}</span>
          <span className={styles.year}>{yearName}</span>
        </div>
        <div className={styles.navigation}>
          <div
            className={styles.navButton}
            onClick={() => dispatch(previousMonth())}
          >
            <img src={leftIcon} alt="←" />
          </div>
          <div  
            className={styles.navButton}
            onClick={() => dispatch(nextMonth())}
          >
            <img src={rightIcon} alt="→" />
          </div>
        </div>
      </div>

      <div className={styles.weekDays}>
        {weekDays.map((day) => (
          <div key={day} className={styles.weekDay}>
            {day}
          </div>
        ))}
      </div>

      <div className={styles.daysGrid}>
        {daysInMonth.map((date, index) => (
          <button
            key={index}
            className={`${styles.dayCell} ${
              isDateSelected(date) ? styles.selected : ''
            } ${isDateDisabled(date) ? styles.disabled : ''}`}
            onClick={() => date && handleDateClick(date)}
            disabled={isDateDisabled(date)}
          >
            {date ? date.getDate() : ''}
          </button>
        ))}
      </div>
    </div>
  );
};
