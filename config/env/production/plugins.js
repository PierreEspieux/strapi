module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("UPLOAD_S3_ACCESS_KEY"),
        secretAccessKey: env("UPLOAD_S3_SECRET_ACCESS_KEY"),
        endpoint: env("UPLOAD_S3_ENDPOINT"),
        // s3BucketEndpoint: true,
        s3ForcePathStyle: true,
        params: {
          ACL: "public-read",
          signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 60 * 60 * 24 * 7),
          Bucket: env("UPLOAD_S3_BUCKET"),
        },
      },
    },
  },
});
