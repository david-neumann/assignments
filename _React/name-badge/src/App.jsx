import React, {useState} from 'react'; 
import Badge from './Badge';

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

  const [badgeArr, setBadgeArr] = useState([])

  function handleChange(event) {
    const {name, value} = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  function handleSubmit(event) {
    event.preventDefault();
    setBadgeArr(prevBadgeArr => [...prevBadgeArr, formData])
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      birthPlace: '',
      phone: '', 
      favFood: '',
      about: ''
    })
  }

  const badgeElements = badgeArr.map(badge => <Badge {...badge}/>)
  
  return (
    <main>
      <form name='name-badge' onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='First Name'
          name='firstName'
          onChange={handleChange}
          value={formData.firstName}
          minLength='3'
          required
        />
        <input 
          type='text'
          placeholder='Last Name'
          name='lastName'
          onChange={handleChange}
          value={formData.lastName}
          minLength='3'
          required
        />
        <input 
          type='email'
          placeholder='Email'
          name='email'
          onChange={handleChange}
          value={formData.email}
          minLength='3'
          required
        />
        <input 
          type='text'
          placeholder='Place of Birth'
          name='birthPlace'
          onChange={handleChange}
          value={formData.birthPlace}
          minLength='3'
          required
        />
        <input 
          type='tel'
          placeholder='Phone (numbers only)'
          name='phone'
          onChange={handleChange}
          value={formData.phone}
          minLength='3'
          pattern='[0-9]{10}'
          required
        />
        <input 
          type='text'
          placeholder='Favorite Food'
          name='favFood'
          onChange={handleChange}
          value={formData.favFood}
          minLength='3'
          required
        />
        <textarea 
          placeholder='Tell us about yourself'
          name='about'
          onChange={handleChange}
          value={formData.about}
          minLength='3'
          required
        />
        <button>Submit</button>
      </form>
      {badgeElements}
    </main>
  )
}
