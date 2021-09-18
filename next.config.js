const { createSecureHeaders } = require("next-secure-headers");

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
  reactStrictMode: true,
};
