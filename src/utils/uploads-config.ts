type EnvUtil = (
  key: string,
  defaultValue?: string | number | boolean
) => string;

export const makeS3Config = (env: EnvUtil) => {
  return {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: env("AWS_S3_ENDPOINT"),
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
          params: {
            ACL: env("AWS_ACL"),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  };
};

export const makeMinioConfig = (env: EnvUtil) => {
  return {
    config: {
      provider: "strapi-provider-upload-ts-minio",
      providerOptions: {
        accessKey: env("AWS_ACCESS_KEY_ID"),
        secretKey: env("AWS_ACCESS_SECRET"),
        bucket: env("AWS_BUCKET"),
        endPoint: env("MINIO_ENDPOINT", "http://localhost:9000"),
      },
    },
  };
};
