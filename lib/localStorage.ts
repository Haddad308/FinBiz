// utils/cookies.ts

export const saveLocalePreference = (locale: string) => {
  document.cookie = `preferredLocale=${locale}; path=/`;
};

export const getLocalePreference = (): string => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [name, value] = cookie.split("=");
    if (name === "preferredLocale") {
      return value;
    }
  }
  return "en"; // Default to 'ar' if no preference is found
};
