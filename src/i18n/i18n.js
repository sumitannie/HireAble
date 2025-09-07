import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import hi from "./hi.json";
import bn from "./bn.json";
import mr from "./mr.json";
import ta from "./ta.json";
import te from "./te.json";
import kn from "./kn.json";
import ml from "./ml.json";
import gu from "./gu.json";
import ur from "./ur.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    bn: { translation: bn },
    mr: { translation: mr },
    ta: { translation: ta },
    te: { translation: te },
    kn: { translation: kn },
    ml: { translation: ml },
    gu: { translation: gu },
    ur: { translation: ur },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
