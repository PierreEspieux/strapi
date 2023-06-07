module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      jwtSecret: env('JWT_SECRET', 'urbIOSsgsNYKzb2ZdEeSVg=='),
    },
  },
  email: {
    config: {
      provider: "amazon-ses",
      providerOptions: {
        key: env("AWSSES_KEY", ""),
        secret: env("AWSSES_SECRET", ""),
        amazon: env("AWSSES_AMAZON", ""),
      },
      settings: {
        defaultFrom: "support@heriade.fr",
        defaultReplyTo: env("SMTP_USER", "support@heriade.fr"),
      },
    },
  },
});
