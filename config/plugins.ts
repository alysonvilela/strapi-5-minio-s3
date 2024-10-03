import { makeS3Config } from "../src/utils/uploads-config";
import { makeMinioConfig } from "../src/utils/uploads-config";

export default ({ env }) => {
  const isProduction = env("NODE_ENV") === "production";

  const devMinioUpload = makeMinioConfig(env);
  const prodS3Upload = makeS3Config(env);
  const uploadConfig = isProduction ? prodS3Upload : devMinioUpload;

  return {
    upload: {
      ...uploadConfig,
    },
  };
};
