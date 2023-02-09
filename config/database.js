module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST','containers-us-west-84.railway.app'),
      port: env.int('DATABASE_PORT','5941'),
      database: env('DATABASE_NAME','railway'),
      user: env('DATABASE_USERNAME','root'),
      password: env('DATABASE_PASSWORD','4GbMOPzmugdTWJquPbTP'),
      ssl: env.bool('DATABASE_SSL','true'),
    },
  },
});
