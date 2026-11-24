import ChooseLanguage from './ChooseLanguage'
import BirthDate from './BirthDate'
import GreetingsList from './GreetingsList'
import './App.css'

function App() {
    const wishes = ['יום הולדת שמח', 'מזל טוב', 'שנה טובה']


  return (
    <>
    <ChooseLanguage />
    <BirthDate birthDate={new Date(2015, 10, 20)} />
    <GreetingsList wishes={wishes} />
    </>
  )
}

export default App
