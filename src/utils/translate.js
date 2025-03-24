// src/utils/translate.js
import axios from 'axios';

// Wstaw swój klucz API z DeepL
const API_KEY = 'c2ff732b-4e13-4f67-bfda-a811fcbf0676:fx';

export const translateText = async (text, targetLang) => {
    const url = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${encodeURIComponent(text)}&target_lang=${targetLang}`;

    try {
        const response = await axios.post(url);
        return response.data.translations[0].text;
    } catch (error) {
        console.error('Błąd tłumaczenia:', error);
        return text;  // Zwróć oryginalny tekst, jeśli wystąpi błąd
    }
};
