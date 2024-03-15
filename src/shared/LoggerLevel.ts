export const LoggerLevel = () => {
    const env = process.env.NODE_ENV || 'dev' || 'development';
    const isDevelopment = env == 'dev' || 'development';
    return isDevelopment ? 'debug' : 'warn';
}