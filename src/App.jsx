import './App.css'
import ContactForm from './components/ContactForm'
import EmailTemplate from './components/EmailTemplate'

function App() {

  return (
    <div>
      <ContactForm />
      <EmailTemplate nombre="Aldo" /> 
    </div>
  )
}

export default App
