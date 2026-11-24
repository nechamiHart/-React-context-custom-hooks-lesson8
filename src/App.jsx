import { useI18nContext } from './contect/18nContext'   
import ChooseLanguage from './ChooseLanguage'
import BirthDate from './BirthDate'
import GreetingsList from './GreetingsList'
import './css/App.css'

function App() {
  const { language } = useI18nContext() 
  const wishes = ['יום הולדת שמח', 'מזל טוב', 'שנה טובה']


  return (
    <div className="app" dir={language === 'he' ? 'rtl' : 'ltr'}>
    <ChooseLanguage />
    <BirthDate birthDate={new Date(2015, 10, 20)} />
    <GreetingsList wishes={wishes} />
    </div>
  )
}

export default App
