// Cookies.ts
export const Cookies = {
  // Set a persistent cookie (default 7 days)
  set: (name: string, value: string, days: number = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // days to milliseconds
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
  },

  // Get a cookie value by name
  get: (name: string): string | null => {
    const match = document.cookie.match(
      new RegExp('(^| )' + encodeURIComponent(name) + '=([^;]+)')
    );
    return match ? decodeURIComponent(match[2]) : null;
  },

  // Remove a cookie
  remove: (name: string) => {
    document.cookie = `${encodeURIComponent(name)}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  },
};
