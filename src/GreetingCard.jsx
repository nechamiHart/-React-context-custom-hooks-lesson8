import './css/GreetingCard.css'
import {useI18nContext} from './contect/18nContext'
import translateText from './helpFunction.js'

export default function GreetingCard({wish}){

    const {language}=useI18nContext()
    const translateWord=translateText(wish,'he',language)

    return (
        <div>
            <p>{wish}</p>
            <p>{translateWord}</p>

        </div>
    )
}