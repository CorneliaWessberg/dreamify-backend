module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'dfae877f22a5168d06785e413ec46c8c'),
  },
});
