export const getNativeName = (nativeName: NativeName) => {
  const nativeNameCode = Object.keys(nativeName)[0];
  return nativeName[nativeNameCode].common;
};

export const getCurrencyName = (currencies: Currencies) => {
  const currencyCode = Object.keys(currencies)[0];
  return currencies[currencyCode].name;
};

export const getLanguageName = (languages: Languages) => {
  const languageCode = Object.keys(languages)[0];
  return languages[languageCode];
};
