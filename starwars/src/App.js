import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

  axios.get('https://swapi.co/api/people/1/')
    .then((res)=>{ 
      console.log('this is the data: ',res.data);
      console.log('this is the name:',res.data.name);
      console.log('this is the gender:', res.data.gender);
      console.log('this is the birth year:',res.data.birth_year);
      console.log('this is the eye color:',res.data.eye_color);
      console.log('this is the hair color:',res.data.hair_color);

    });

   
      const[data,setData]=useState({});
      const[name,setName]=useState('');
      const[gender,setGender]=useState('');
      const[birthYear,setBirthYear]=useState('');
      const[eyeColor,setEyeColor]=useState('');
      const[hairColor,setHairColor]=useState('');

      setData(this.res.data)
      setName(this.res.data.name)
      setGender(this.res.data.gender)
      setBirthYear(this.res.data.birth_year)
      setEyeColor(this.res.data.eye_color)
      setHairColor(this.res.data.hair_color)
    
 
    


const App = () => {
  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        <h4>Name:{this.name}</h4>
        <p>Gender:{}</p>
        <p>Birth Year:{}</p>
        <p>Eye Color:{}</p>
        <p>Hair Color:{}</p>
      </div>
    </div>
  );
}

export default App;


// Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.