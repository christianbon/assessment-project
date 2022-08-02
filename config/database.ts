export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 6969),
      database: env('DATABASE_NAME', 'strapiapi'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'cbcompany7'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
