 export const languageCode = {
        'he': 'he-IL',
        'en': 'en-US',
        'fr': 'fr-FR'
    };
const cache = {}

async function fetchTranslation(word,source,target){
    if (source === target) 
        return word

    const res= await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=${source}|${target}`)

    const data= await res.json()

    return data.responseData.translatedText

}
export default function translateText(word, source, target) {
  const key = word + source + target
  if (!cache[key]) cache[key] = fetchTranslation(word, source, target)
  return cache[key]
}