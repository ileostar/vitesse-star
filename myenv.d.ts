import 'dotenv'

declare module 'dotenv' {
  export interface DotenvParseOutput {
    VITE_ALOVA_BASE_URI: string
    VITE_HOST: string
    VITE_PORT: number
    VITE_PROXY_DOMAIN: string
    VITE_BASE_URI: string
  }
}
