export const getlocalStorageData = () => {
  const rawTodos = localStorage.getItem(todokey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};

// local stroage functionality
export const setlocalStorageData = () => {
  const rawTodos = localStorage.getItem(todokey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};
