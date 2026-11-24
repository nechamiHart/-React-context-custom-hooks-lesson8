
import './css/ChooseLanguage.css'
import { useI18nContext } from "./contect/18nContext"
import { languageCode } from "./helpFunction"

export default function ChooseLanguage(){

    const {language,toggleLanguage}=useI18nContext()

    const handleToggle=(e)=>{
        toggleLanguage(e.target.value)
    }

    return (
        <div className="language-picker">
        <label htmlFor="language">choose language: </label>
        <select id="language" name="langauge" value={language} onChange={handleToggle}>
            <option value="he">עברית</option>
            <option value="en">English</option>
            <option value="fr">Français</option>
        </select>
        </div>
    )
}