import React, {useState} from 'react'

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [nameList, setNameList] = useState([]);

  const handleChange = (event) => {
    const {value} = event.target;
    setFirstName(value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setNameList(prevState => [...prevState, firstName]);
  }

  const createListElements = nameList.map(name => <li>{name}</li>);
  
  return (
    <div>
      <h1>{firstName}</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='First Name'
          name='firstName'
          onChange={handleChange}
        /> 
        <br />
        <button>Add to list</button>
      </form>
      <ol>
        {createListElements}
      </ol>
    </div>
  )
}
