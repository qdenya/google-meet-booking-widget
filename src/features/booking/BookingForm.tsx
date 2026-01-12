import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useCreateBookingMutation } from '../../api/bookingApi';
import { updateFormData, setCurrentStep, setBookingResult } from './bookingSlice';
import styles from './BookingForm.module.css';

export const BookingForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedSlot, formData } = useAppSelector((state) => state.booking);
  const [createBooking, { isLoading }] = useCreateBookingMutation();
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!selectedSlot) {
      setError('Слот не выбран');
      return;
    }

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Пожалуйста, заполните все обязательные поля');
      return;
    }

    try {
      const result = await createBooking({
        startTime: selectedSlot.start,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        description: formData.description,
      }).unwrap();

      if (result.success) {
        dispatch(
          setBookingResult({
            meetLink: result.data.booking.meetLink,
            startTime: result.data.booking.startTime,
            endTime: result.data.booking.endTime,
          })
        );
        dispatch(setCurrentStep('success'));
      }
    } catch (err: any) {
      setError(err?.data?.error || 'Ошибка при бронировании');
    }
  };

  const handleBack = () => {
    dispatch(setCurrentStep('calendar'));
  };

  const formatSlotTime = () => {
    if (!selectedSlot) return '';
    const start = new Date(selectedSlot.start);
    const end = new Date(selectedSlot.end);
    return `${start.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })} в ${start.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    })} - ${end.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    })}`;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Ваши контактные данные</h2>

      <div className={styles.selectedSlot}>
        <span className={styles.slotIcon}>📅</span>
        <span className={styles.slotText}>{formatSlotTime()}</span>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="Иван Петров"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="ivan@example.com"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={styles.input}
            placeholder="+7 (999) 123-45-67"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Комментарий (необязательно)
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className={styles.textarea}
            placeholder="Опишите кратко, что вы хотели бы обсудить"
            rows={3}
          />
        </div>

        <div className={styles.buttons}>
          <button
            type="button"
            onClick={handleBack}
            className={styles.backButton}
            disabled={isLoading}
          >
            ← Назад
          </button>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? 'Бронирование...' : 'Забронировать'}
          </button>
        </div>
      </form>
    </div>
  );
};
