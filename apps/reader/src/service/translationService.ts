import translate from 'google-translate-api';

import { Translation, TranslationRequest, translationLanguageMap } from './translate';

async function performTranslation(request: TranslationRequest): Promise<Translation> {
  try {
    const { selectedText, sourceLanguage, targetLanguage, type, notes } = request;

    const sourceLangCode = translationLanguageMap[sourceLanguage];
    const targetLangCode = translationLanguageMap[targetLanguage];

    const translationResult = await translate(selectedText, { from: sourceLangCode, to: targetLangCode });

    const translation: Translation = {
      id: Math.random().toString(36).substring(7), // Generate a random ID (replace with your own logic)
      originalText: selectedText,
      translatedText: translationResult.text,
      sourceLanguage,
      targetLanguage,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      type,
      notes,
    };

    return translation;
  } catch (error) {
    console.error('Translation error:', error);
    throw error; // Handle or log the error as needed
  }
}

export default performTranslation;
