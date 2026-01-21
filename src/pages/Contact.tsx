import React from 'react'

const Contact = () => {
  return (
    <div>Contact
    <form>
        <label>Nom</label>
        <input type="text" name="name" />
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