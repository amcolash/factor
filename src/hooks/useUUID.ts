const key = 'device-uuid';

export function useUUID(): string {
  let uuid = localStorage.getItem(key);
  if (!uuid) {
    uuid = crypto.getRandomValues(new Uint32Array(32)).toString();
    localStorage.setItem(key, uuid);
  }

  return uuid;
}
