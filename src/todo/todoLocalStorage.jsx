const todokey = "reactTodo";
// get local storage data functionality
export const getlocalStorageData = () => {
  const rawTodos = localStorage.getItem(todokey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};
// todo local storage functionality
export const setlocalStorageData = (task) => {
  return localStorage.setItem(todokey, JSON.stringify(task));
};
