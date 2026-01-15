import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setCurrentStep } from '../../features/booking/bookingSlice';
import { SlotsList } from '../../features/slots/SlotsList';
import styles from './SlotsOverlay.module.css';

interface SlotsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SlotsOverlay: React.FC<SlotsOverlayProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const { selectedSlot } = useAppSelector((state) => state.booking);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  // Автоматически переходим к форме после выбора слота
  useEffect(() => {
    if (isOpen && selectedSlot) {
      // Небольшая задержка для визуального подтверждения выбора
      const timer = setTimeout(() => {
        dispatch(setCurrentStep('form'));
        onClose();
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [isOpen, selectedSlot, dispatch, onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть">
          ×
        </button>
        <SlotsList />
      </div>
    </div>
  );
};
