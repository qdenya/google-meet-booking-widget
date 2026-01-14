import { WidgetConfig } from './types';

/**
 * Инициализирует и отображает виджет бронирования встроенным в элемент
 * @param elementId - ID элемента, куда будет встроен виджет
 * @param config - Конфигурация виджета
 */
export declare function initBookingWidget(elementId: string, config: WidgetConfig): void;
/**
 * Инициализирует виджет в модальном режиме
 * Возвращает функцию для открытия модалки
 * @param config - Конфигурация виджета
 * @returns Функция для открытия модалки
 */
export declare function initBookingModal(config: WidgetConfig): () => void;
export type { WidgetConfig, SpecialistInfo } from './types';
