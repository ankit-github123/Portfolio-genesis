export function isValidArray(arr) {
  return Array.isArray(arr) && arr.length > 0;
}

export function isValidObject(obj) {
  return obj && Object.keys(obj).length > 0;
}

export function capitalizeWords(str) {
  let capitalizedString =
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return capitalizedString;
}

export function deepCopy(obj) {
  return obj && JSON.parse(JSON.stringify(obj));
}

export function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000); // You can adjust the range as needed
  return `${timestamp}-${random}`;
}
