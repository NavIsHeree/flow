import React, { useState, useEffect } from 'react';

interface TranslationPopupProps {
  text: string;
  onClose: () => void;
}

const TranslationPopup: React.FC<TranslationPopupProps> = ({ text, onClose }) => {
  const [translation, setTranslation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Placeholder for translation logic
    const translateText = async () => {
      try {
        // Simulate loading
        setLoading(true);

        // Replace this with your actual translation API call or logic
        // For now, we'll just prepend "Translated: " to the original text
        const translatedText = `Translated: ${text}`;

        setTranslation(translatedText);
      } catch (error) {
        console.error('Translation error:', error);
      } finally {
        setLoading(false);
      }
    };

    translateText();
  }, [text]);

  return (
    <div>
      {loading ? (
        <p>Loading translation...</p>
      ) : (
        <>
          <p>
            Original text: <strong>{text}</strong>
          </p>
          <p>
            Translation: <strong>{translation}</strong>
          </p>
        </>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TranslationPopup;
