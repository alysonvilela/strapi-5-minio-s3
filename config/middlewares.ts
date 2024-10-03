export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "cdn.jsdelivr.net", "blob:"],
          "connect-src": ["'self'", "https:", "http"],
          "frame-src": ["'self'", "https:", "http"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "localhost:9001",
            "localhost:9000",
            "ADD_CLOUDFRONT_ID.cloudfront.net",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "localhost:9000",
            "localhost:9001",
            "ADD_CLOUDFRONT_ID.cloudfront.net",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      headers: "*",
    },
  },
  {
    name: "strapi::poweredBy",
    config: {
      poweredBy: "tservices <tibiaservices.com.br>",
    },
  },
  "strapi::logger",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
