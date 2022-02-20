export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    schema: process.env.DB_SCHEMA,
    host: process.env.DB_HOST,
    dbLogging: process.env.DB_LOGGING,
  },
});
