import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { setApiConfig } from './api/bookingApi';
import { BookingWidget } from './components/BookingWidget/BookingWidget';
import type { WidgetConfig } from './types';

/**
 * Инициализирует и отображает виджет бронирования
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

// Экспортируем типы для использования в TypeScript проектах
export type { WidgetConfig, SpecialistInfo } from './types';

// Глобальный объект для использования из CDN
if (typeof window !== 'undefined') {
  (window as any).GoogleMeetBooking = {
    init: initBookingWidget,
  };
}
