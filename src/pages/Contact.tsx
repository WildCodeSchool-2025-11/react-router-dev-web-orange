import {useState} from 'react'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

  return (
    <div>Contact
    <form>
        <label>Nom</label>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <button type="submit">Envoyer</button>
    </form>
    </div>
  )
}

export default Contact