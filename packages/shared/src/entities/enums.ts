import { z } from 'zod';

/** Роль пользователя в организации */
export const Role = z.enum(['OWNER', 'MANAGER', 'AMBASSADOR']);
export type Role = z.infer<typeof Role>;

/** Категория проекта (заведения) */
export const Category = z.enum(['A_PLUS', 'A', 'B', 'C', 'C_MINUS']);
export type Category = z.infer<typeof Category>;

export const CATEGORY_LABELS: Record<Category, string> = {
  A_PLUS: 'A+',
  A: 'A',
  B: 'B',
  C: 'C',
  C_MINUS: 'C-',
};

/** Лояльность заведения к бренду */
export const Loyalty = z.enum(['HIGH', 'MEDIUM', 'LOW', 'NEGATIVE', 'UNKNOWN']);
export type Loyalty = z.infer<typeof Loyalty>;

export const LOYALTY_LABELS: Record<Loyalty, string> = {
  HIGH: 'Высокая',
  MEDIUM: 'Средняя',
  LOW: 'Низкая',
  NEGATIVE: 'Негативная',
  UNKNOWN: 'Пока не сформировано',
};

/** Реакция на аромат при дегустации */
export const Reaction = z.enum(['LIKED', 'NEUTRAL', 'DISLIKED']);
export type Reaction = z.infer<typeof Reaction>;

/** Статус точки маршрута */
export const PointStatus = z.enum(['PLANNED', 'VISITED', 'SKIPPED']);
export type PointStatus = z.infer<typeof PointStatus>;

/** Причина движения по складу */
export const StockReason = z.enum([
  'RECEIPT',
  'TASTING',
  'ADJUSTMENT',
  'TRANSFER',
]);
export type StockReason = z.infer<typeof StockReason>;

/** Дни недели для диапазонов времени работы/визита */
export const Weekday = z.enum([
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
  'SUN',
]);
export type Weekday = z.infer<typeof Weekday>;
