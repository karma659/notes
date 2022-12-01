import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';

function Country() {
  const [name , setName] = useState('');
  const [age , setAge] = useState('');
  const [email , setEmail] = useState('');

  const [country, setCountry]= useState([]);
  const [countryid, setCountryid]= useState('');
  const [stetes, setSat]= useState([]);

  useEffect( ()=>{
   const getcountry= async ()=>{
     const req= await fetch("https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json");
     const getres= await req.json();
     console.log(getres);
     setCountry(await getres);

   }
   getcountry();
  },[]);

  
  const handlecountry=(event)=>{
    const getcoutryid= event.target.value;
    setCountryid(getcoutryid);
    console.log(getcoutryid);

    country.forEach(myFunction);

    function myFunction(item) {
      if(item.name==getcoutryid){
         setSat(item.states);
      }
    }
   console.log(setSat);
    event.preventDefault();
  }


  const handleChange =(e)=>{
    setName(e.target.value);
  }
  
  const handleAgeChange =(e)=>{
    setAge(e.target.value);
  }

  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }
 

   
  return (
    
     <div className="row">
     <form >
   
    <h2>Can you please provide your personal details ?  </h2><br/>
  
        <label >
          Name:
        </label><br/>
        <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
        <br/>

        <label >
         Date of birth:
        </label><br/>
        <div style = {{
margin: 'auto',
display: 'block',
width: 'fit-content'
}}>

<TextField
id="date"

type="date"
defaultValue=""
InputLabelProps={{
shrink: true,
}}
onChange={(e)=> {handleAgeChange(e)}}
/>
</div><br/>
       
          <br/>

        <label >Country</label><br/>
                 <select name="country" className="form-control" onChange={(e)=>handlecountry(e)}>
                   <option>--Select Country--</option>
                   {
                     country.map( (getcon)=>(
                   <option key={getcon.name} value={getcon.name }> { getcon.name}</option>
                     ))
                }
                 </select><br/><br/>

                 <label >State</label><br/>
               <select name="state" className="form-control">
                   <option>--Select State--</option>
                   {
                     stetes.map( (st)=>(                    
                   <option key={st.name} value={st.name}>{ st.name}</option>
                     ))
                     }
                 </select>  <br/>  <br/>  

        <label>
          Email:
        </label><br/>
        <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
         
        <br/>
                   
        <input type="submit" value="Submit"/>
      </form>

            </div>
    

  );
}
export default Country;