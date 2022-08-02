export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '84be934e65b2c1ccdefa9358a0f7e76f'),
  },
});
