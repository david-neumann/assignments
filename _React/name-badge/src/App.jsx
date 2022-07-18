import React, {useState} from 'react'; 

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    birthPlace: '',
    phone: '', 
    favFood: '',
    about: ''
  })

  function handleChange() {
    
  }
  
  return (
    <main>
      <form>
        <input 
          type='text'
          placeholder='First Name'
          name='firstName'
          onChange={handleChange}
          value={formData.firstName}
        />
        <input 
          type='text'
          placeholder='Last Name'
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
        />
        <input 
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
          value={formData.email}
        />
        <input 
          type='text'
          placeholder='Place of Birth'
          name='birthPlace'
          onChange={handleChange}
          value={formData.birthPlace}
        />
        <input 
          type='tel'
          placeholder='Phone'
          name='phone'
          onChange={handleChange}
          value={formData.phone}
        />
        <input 
          type='text'
          placeholder='Favorite Food'
          name='favFood'
          onChange={handleChange}
          value={formData.favFood}
        />
        <textarea 
          placeholder='Tell us about yourself'
          name='about'
          onChange={handleChange}
          value={formData.about}
        />
        <button>Submit</button>
      </form>
    </main>
  )
}
