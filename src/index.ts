import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { setApiConfig } from './api/bookingApi';
import { BookingWidget } from './components/BookingWidget/BookingWidget';
import { Modal } from './components/Modal/Modal';
import type { WidgetConfig } from './types';

let modalRoot: ReactDOM.Root | null = null;
let modalContainer: HTMLDivElement | null = null;

/**
 * Инициализирует и отображает виджет бронирования встроенным в элемент
 * @param elementId - ID элемента, куда будет встроен виджет
 * @param config - Конфигурация виджета
 */
export function initBookingWidget(
  elementId: string,
  config: WidgetConfig
): void {
  const container = document.getElementById(elementId);

  if (!container) {
    console.error(`Element with id "${elementId}" not found`);
    return;
  }

  // Настраиваем API
  setApiConfig({
    apiUrl: config.apiUrl,
    apiToken: config.apiToken,
  });

  // Применяем пользовательскую тему, если указана
  applyTheme(config);

  // Рендерим виджет
  const root = ReactDOM.createRoot(container);
  root.render(
    React.createElement(
      React.StrictMode,
      null,
      React.createElement(
        Provider,
        { store, children: React.createElement(BookingWidget, { specialist: config.specialist }) }
      )
    )
  );
}

/**
 * Инициализирует виджет в модальном режиме
 * Возвращает функцию для открытия модалки
 * @param config - Конфигурация виджета
 * @returns Функция для открытия модалки
 */
export function initBookingModal(config: WidgetConfig): () => void {
  // Настраиваем API
  setApiConfig({
    apiUrl: config.apiUrl,
    apiToken: config.apiToken,
  });

  // Применяем пользовательскую тему
  applyTheme(config);

  return () => openBookingModal(config);
}

/**
 * Открывает модальное окно с виджетом
 */
function openBookingModal(config: WidgetConfig): void {
  // Создаем контейнер для модалки, если еще нет
  if (!modalContainer) {
    modalContainer = document.createElement('div');
    modalContainer.id = 'google-meet-booking-modal';
    document.body.appendChild(modalContainer);
    modalRoot = ReactDOM.createRoot(modalContainer);
  }

  // Функция для закрытия модалки
  const closeModal = () => {
    if (modalRoot && modalContainer) {
      modalRoot.render(
        React.createElement(
          React.StrictMode,
          null,
          React.createElement(
            Provider,
            { 
              store, 
              children: React.createElement(Modal, { 
                isOpen: false, 
                onClose: () => {},
                children: null 
              }) 
            }
          )
        )
      );
    }
  };

  // Рендерим модалку с виджетом
  if (modalRoot) {
    modalRoot.render(
      React.createElement(
        React.StrictMode,
        null,
        React.createElement(
          Provider,
          { 
            store, 
            children: React.createElement(Modal, { 
              isOpen: true, 
              onClose: closeModal,
              children: React.createElement(BookingWidget, { specialist: config.specialist })
            }) 
          }
        )
      )
    );
  }
}

/**
 * Применяет пользовательскую тему
 */
function applyTheme(config: WidgetConfig): void {
  if (config.theme?.primaryColor) {
    document.documentElement.style.setProperty(
      '--primary-color',
      config.theme.primaryColor
    );
  }

  if (config.theme?.secondaryColor) {
    document.documentElement.style.setProperty(
      '--secondary-color',
      config.theme.secondaryColor
    );
  }
}

// Экспортируем типы для использования в TypeScript проектах
export type { WidgetConfig, SpecialistInfo } from './types';

// Глобальный объект для использования из CDN
if (typeof window !== 'undefined') {
  (window as any).GoogleMeetBooking = {
    init: initBookingWidget,
    initModal: initBookingModal,
  };
}
