type LocalStorageKeys = 'workout-auth';

export const storage = (key: LocalStorageKeys) => {
  return {
    getItem() {
      return window.localStorage.getItem(key);
    },
    setItem(value: string) {
      window.localStorage.setItem(key, value);
    },
    removeItem() {
      window.localStorage.removeItem(key);
    }
  };
};