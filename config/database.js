module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env('MYSQLHOST'),
      port: env.int('MYSQLPORT'),
      database: env('MYSQLDATABASE'),
      user: env('MYSQLUSER'),
      password: env('MYSQLPASSWORD'),
      ssl: env.bool('DATABASE_SSL'),
    },
    
  },
});
