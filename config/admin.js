module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f9f6bf0734e8a0b3d2910f9170ab8eb0'),
  },
});
