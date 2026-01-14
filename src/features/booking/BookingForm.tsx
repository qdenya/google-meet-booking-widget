import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useCreateBookingMutation } from '../../api/bookingApi';
import { updateFormData, setCurrentStep, setBookingResult } from './bookingSlice';
import calendarIcon from '../../assets/calendar.svg';
import styles from './BookingForm.module.css';

export const BookingForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedSlot, formData, recaptchaToken } = useAppSelector((state) => state.booking);
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
      // Получаем reCAPTCHA токен если включен
      let captchaToken = recaptchaToken;
      
      if (recaptchaToken && typeof window !== 'undefined' && (window as any).grecaptcha) {
        try {
          captchaToken = await (window as any).grecaptcha.execute(recaptchaToken, { action: 'submit' });
          console.log('reCAPTCHA token generated:', captchaToken?.substring(0, 20) + '...');
        } catch (err) {
          console.error('reCAPTCHA error:', err);
          setError('Ошибка проверки reCAPTCHA');
          return;
        }
      }

      const result = await createBooking({
        startTime: selectedSlot.start,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        description: formData.description,
        recaptchaToken: captchaToken || undefined,
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

  const formatSlotDate = () => {
    if (!selectedSlot) return '';
    const start = new Date(selectedSlot.start);
    const dayOfWeek = start.toLocaleDateString('ru-RU', { weekday: 'long' });
    const date = start.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return `${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}, ${date}`;
  };

  const formatSlotTime = () => {
    if (!selectedSlot) return '';
    const start = new Date(selectedSlot.start);
    return start.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectedSlot}>
        <img src={calendarIcon} alt="Календарь" className={styles.slotIcon} />
        <div className={styles.slotInfo}>
          <div className={styles.slotDate}>{formatSlotDate()}</div>
          <div className={styles.slotTime}>{formatSlotTime()}</div>
        </div>
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
            Назад
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
