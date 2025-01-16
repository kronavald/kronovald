export const getEnv = () => import.meta.env.MODE

export const isLocal = import.meta.env.DEV

export const appName = import.meta.env.APP_NAME ?? "Kronovald"
