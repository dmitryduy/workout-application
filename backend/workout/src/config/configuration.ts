export default () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  passwordSalt: parseInt(process.env.PASSWORD_SALT),
  database: {
    host: process.env.PG_HOST || 'localhost',
    port: parseInt(process.env.PG_PORT, 10) || 5432,
    username: process.env.PG_USERNAME || '',
    password: process.env.PG_PASSWORD || '',
    databaseName: process.env.PG_DATABASE || '',
  },
});
