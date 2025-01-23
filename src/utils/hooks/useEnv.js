export function useEnv () {
  const { VITE_APP_TITLE, VITE_BASE_API, VITE_PUBLIC_PATH, MODE } = import.meta.env

  return {
    MODE,
    VITE_APP_TITLE,
    VITE_BASE_API,
    VITE_PUBLIC_PATH
  }
}