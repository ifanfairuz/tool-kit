export function getStorage(name) {
  return localStorage.getItem(name);
}
export function setStorage(name, value) {
  return localStorage.setItem(name, value);
}

export function loadStorage(name) {
  try {
    const from_storage = JSON.parse(getStorage(name) || '{}');
    return from_storage instanceof Object ? from_storage : {};
  } catch (error) {
    return {}
  }
}
export function saveStorage(name, value) {
  return setStorage(name, JSON.stringify({ ...value }))
}