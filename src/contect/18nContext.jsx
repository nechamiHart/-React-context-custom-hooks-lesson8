import { createContext, useState ,use} from "react"

const I18nContext=createContext({
    language:'',
    toggleLanguage(){}
})

export default function I18nContextProvider({children}){
    const [language,setLanguage]=useState('עברית')

    const toggleLanguage=(language)=>{
        setLanguage(language)
    }

    const val={
        language,
        toggleLanguage
    }

    return (
        <>
        <I18nContext value={val}>
            {children}
        </I18nContext>
        </>
    )
}

export function useI18nContext(){
    return use(I18nContext)
}