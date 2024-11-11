var en = require("./translation.en.json");
var id = require("./translation.id.json");

const i18n = {
  translations: {
    en,
    id,
  },
  defaultLang: "en",
  useBrowserDefault: true,
  // optional property will default to "query" if not set
  languageDataStore: "query" || "localStorage",
};

module.exports = i18n;
