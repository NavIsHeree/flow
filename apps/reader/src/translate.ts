export type TranslationType = keyof typeof translationTypeMap;

export const translationTypeMap = {
  replace: {
    action: 'replaceText',
    style: 'fontStyle',
    class: 'italic',
  },
  // add more translation types if needed
};

export type TranslationLanguage = keyof typeof translationLanguageMap;

export const translationLanguageMap = {
  afrikaans: 'af',
  albanian: 'sq',
  amharic: 'am',
  arabic: 'ar',
  armenian: 'hy',
  azerbaijani: 'az',
  basque: 'eu',
  belarusian: 'be',
  bengali: 'bn',
  bosnian: 'bs',
  bulgarian: 'bg',
  catalan: 'ca',
  cebuano: 'ceb',
  chinese_simplified: 'zh-CN',
  chinese_traditional: 'zh-TW',
  corsican: 'co',
  croatian: 'hr',
  czech: 'cs',
  danish: 'da',
  dutch: 'nl',
  english: 'en',
  esperanto: 'eo',
  estonian: 'et',
  filipino: 'tl',
  finnish: 'fi',
  french: 'fr',
  galician: 'gl',
  georgian: 'ka',
  german: 'de',
  greek: 'el',
  gujarati: 'gu',
  haitian_creole: 'ht',
  hausa: 'ha',
  hawaiian: 'haw',
  hebrew: 'he',
  hindi: 'hi',
  hmong: 'hmn',
  hungarian: 'hu',
  icelandic: 'is',
  igbo: 'ig',
  indonesian: 'id',
  irish: 'ga',
  italian: 'it',
  japanese: 'ja',
  javanese: 'jv',
  kannada: 'kn',
  kazakh: 'kk',
  khmer: 'km',
  kinyarwanda: 'rw',
  korean: 'ko',
  kurdish_kurmanji: 'ku',
  kyrgyz: 'ky',
  lao: 'lo',
  latin: 'la',
  latvian: 'lv',
  lithuanian: 'lt',
  luxembourgish: 'lb',
  macedonian: 'mk',
  malagasy: 'mg',
  malay: 'ms',
  malayalam: 'ml',
  maltese: 'mt',
  maori: 'mi',
  marathi: 'mr',
  mongolian: 'mn',
  myanmar_burmese: 'my',
  nepali: 'ne',
  norwegian: 'no',
  pashto: 'ps',
  persian: 'fa',
  polish: 'pl',
  portuguese: 'pt',
  punjabi: 'pa',
  romanian: 'ro',
  russian: 'ru',
  samoan: 'sm',
  scots_gaelic: 'gd',
  serbian: 'sr',
  sesotho: 'st',
  shona: 'sn',
  sindhi: 'sd',
  sinhala: 'si',
  slovak: 'sk',
  slovenian: 'sl',
  somali: 'so',
  spanish: 'es',
  sundanese: 'su',
  swahili: 'sw',
  swedish: 'sv',
  tajik: 'tg',
  tamil: 'ta',
  telugu: 'te',
  thai: 'th',
  turkish: 'tr',
  ukrainian: 'uk',
  urdu: 'ur',
  uzbek: 'uz',
  vietnamese: 'vi',
  welsh: 'cy',
  xhosa: 'xh',
  yiddish: 'yi',
  yoruba: 'yo',
  zulu: 'zu',
  // add more languages as needed
};

export interface Translation {
  id: string;
  originalText: string;
  translatedText: string;
  sourceLanguage: TranslationLanguage;
  targetLanguage: TranslationLanguage;
  createdAt: number;
  updatedAt: number;
  type: TranslationType;
  notes?: string;
}

export interface TranslationRequest {
  id: string;
  selectedText: string;
  sourceLanguage: TranslationLanguage;
  targetLanguage: TranslationLanguage;
  createAt: number;
  updatedAt: number;
  type: TranslationType;
  notes?: string;
}

// Example usage:
// const translation: Translation = {
//   id: "123",
//   originalText: "Hello, world!",
//   translatedText: "Hola, mundo!",
//   sourceLanguage: "english",
//   targetLanguage: "spanish",
//   createdAt: Date.now(),
//   updatedAt: Date.now(),
//   type: "replace",
//   notes: "Translated using Google Translate.",
// };
