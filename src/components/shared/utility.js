export const setStorageItem = (name, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(name, JSON.stringify(value));
  }
};

export const getStorageItem = (name) => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem(name));
  }
  return null;
};
