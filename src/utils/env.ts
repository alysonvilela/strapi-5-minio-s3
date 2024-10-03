import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),

  HOST: z.string(),
  PORT: z.number(),

  APP_KEYS: z.string(),
  API_TOKEN_SALT: z.string(),
  ADMIN_JWT_SECRET: z.string(),
  TRANSFER_TOKEN_SALT: z.string(),
  JWT_SECRET: z.string(),

  SUPER_USER_USERNAME: z.string(),
  SUPER_USER_EMAIL: z.string(),
  SUPER_USER_SECRET: z.string(),

  DATABASE_CLIENT: z.enum(["postgres", "sqlite"]).default("postgres"),
  DATABASE_FILENAME: z.string().optional(),
  FLAG_NPS: z.boolean().default(false),
  FLAG_PROMOTE_EE: z.boolean().default(false),

  DATABASE_HOST: z.string(),
  DATABASE_PORT: z.number(),
  DATABASE_NAME: z.string(),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_SSL_SELF: z.boolean(),

  AWS_ACCESS_KEY_ID: z.string(),
  AWS_ACCESS_SECRET: z.string(),
  AWS_BUCKET: z.string(),
  AWS_S3_ENDPOINT: z.string(),
  AWS_REGION: z.string(),
  MINIO_ENDPOINT: z.string().optional().default("http://localhost:9000"),
});

export const envs = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,

  HOST: process.env.HOST,
  PORT: Number(process.env.PORT),
  APP_KEYS: process.env.APP_KEYS,
  API_TOKEN_SALT: process.env.API_TOKEN_SALT,
  ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET,
  TRANSFER_TOKEN_SALT: process.env.TRANSFER_TOKEN_SALT,

  SUPER_USER_USERNAME: process.env.SUPER_USER_USERNAME,
  SUPER_USER_EMAIL: process.env.SUPER_USER_EMAIL,
  SUPER_USER_SECRET: process.env.SUPER_USER_SECRET,

  DATABASE_CLIENT: process.env.DATABASE_CLIENT as "postgres" | "sqlite",
  DATABASE_FILENAME: process.env.DATABASE_FILENAME,
  JWT_SECRET: process.env.JWT_SECRET,
  FLAG_NPS: Boolean(process.env.FLAG_NPS),
  FLAG_PROMOTE_EE: Boolean(process.env.FLAG_PROMOTE_EE),

  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: Number(process.env.DATABASE_PORT),
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_SSL_SELF: Boolean(process.env.DATABASE_SSL_SELF),

  SEED_KEY: process.env.SEED_KEY,

  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_ACCESS_SECRET: process.env.AWS_ACCESS_SECRET,
  AWS_BUCKET: process.env.AWS_BUCKET,
  AWS_S3_ENDPOINT: process.env.AWS_S3_ENDPOINT,
  AWS_REGION: process.env.AWS_REGION,
  MINIO_ENDPOINT: process.env.MINIO_ENDPOINT,
});
