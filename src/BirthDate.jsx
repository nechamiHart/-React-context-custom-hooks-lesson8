// import {useI18nContext} from './contect/18nContext'

import { use } from 'react'
import { useI18nContext } from './contect/18nContext'
import translateText, {languageCode} from './helpFunction.js'

export default function BirthDate({birthDate}){
    const {language}=useI18nContext()

    const birthYear=new Date(birthDate).getFullYear()
    const currentYear=new Date().getFullYear()
    const age=currentYear-birthYear
    
    const formattedDate =new Date(birthDate).toLocaleDateString(languageCode[language])
    const congratsPromise = translateText(`מזל טוב! אתה בן ${age}.`, 'he', language)
    const labelPromise = translateText('תאריך הלידה שלך הוא:', 'he', language)

    const congrats = use(congratsPromise)
    const birthLabel = use(labelPromise)

    return(
        <>
        <h1>{congrats}</h1>
        <h1>{birthLabel} {formattedDate}</h1>
        </>
    )
}