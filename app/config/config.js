module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  
    db: {
      DB_HOST: process.env.DB_HOST,
      DB_USER: process.env.DB_USER,
      DB_PASS: process.env.DB_PASS,
      DB_NAME: process.env.DB_NAME,
      dialect: "mysql",
  
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
  
    auth: {
      secret: "secret-key"
    }
};