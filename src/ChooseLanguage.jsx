
import { useI18nContext } from "./contect/18nContext"

export default function ChooseLanguage(){

    const {toggleLanguage}=useI18nContext()

    const handleToggle=(e)=>{
        toggleLanguage(e.target.value)
    }

    return (
        <>
        <label htmlFor="langauge">choose langauge: </label>
        <select id="langauge" name="langauge" onChange={handleToggle}>
            <option value="hebrow">עברית</option>
            <option value="english">English</option>
            <option value="French">Français</option>
        </select>
        </>
    )
}