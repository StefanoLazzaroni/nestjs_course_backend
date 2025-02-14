import { AsyncLocalStorage } from 'async_hooks';
import { v4 } from 'uuid';

export const context = new AsyncLocalStorage<Map<string, unknown>>();

export function createStoreWithTransactionId() {
  const store = new Map<string, unknown>();
  const transactionId = v4();
  store.set('transactionId', transactionId);
  return store;
}

export function getTransactionId() {
  return context.getStore()?.get('transactionId');
}
