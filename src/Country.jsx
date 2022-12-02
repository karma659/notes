import React, {useState, useEffect} from "react";


function Country() {
   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [email, setEmail] = useState("");
   const [Num, setNum] = useState("");
 
   const [country, setCountry] = useState([]);
   const [countryid, setCountryid] = useState("");
   const [stetes, setSat] = useState([]);
   const [stid,stateid]=useState("");

   useEffect(() => {
      const getcountry = async () => {
         const req = await fetch(
            "https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json"
         );
         const getres = await req.json();
         console.log(getres);
         setCountry(await getres);
      };
      getcountry();
   }, []);

   const handlecountry = event => {
      const getcoutryid = event.target.value;
      setCountryid(getcoutryid);
      console.log(getcoutryid);

      country.forEach(myFunction);

      function myFunction(item) {
         if (item.name == getcoutryid) {
            setSat(item.states);
         }
      }
      console.log(setSat);
      event.preventDefault();
   };
     const handlstate = event =>{
      const getst = event.target.value;
      stateid(getst);
      console.log(stid);
     }
   const handleChange = e => {
      setName(e.target.value);
   };

   const handleAgeChange = e => {
      setAge(e.target.value);
   };
   const handleNumChange = e => {
     {
      setNum(e.target.value);
    }
 };
   const handleEmailChange = e => {
      setEmail(e.target.value);
   };

   const sendmessage=()=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var phoneno = /^\d{10}$/;
    
  if(name.length < 4 || name.length > 10)
       {
        window.parent.postMessage("Result:{Name:{error:Length should be in 4-10 characters}}","http://localhost:3000");
       
       }
       else if(age=="")
  {
    window.parent.postMessage("Result:{Date of birth:{error:Enter Date of birth}}","http://localhost:3000");
          
  }
   else if(! Num.match(phoneno) ){
    window.parent.postMessage("Result:{Contact Number:{error:Length should be 10 characters}}","http://localhost:3000");
      
  } 
  else if(countryid=="")
  {
    window.parent.postMessage("Result:{Country:{error:Enter country}}","http://localhost:3000");
 
  }
 else if(stid=="")
  {
    window.parent.postMessage("Result:{State:{error:Enter state}}","http://localhost:3000");
     
  }
   else if(! email.match(validRegex))
  {
    window.parent.postMessage("Result:{State:{error:Enter state}}","http://localhost:3000");
     
  }
  else{
  
    window.parent.postMessage("Result:{Success:{All fields are valid}}","http://localhost:3000");
  }

};

   return (
     <div>
      <form class="form">
         <h3>Can you please provide your personal details ? </h3>
         <label>Name</label>
         <br />
         <input
            type="text"
            value={name}
            
            onChange={e => {
               handleChange(e);
            }}
         />
         <br />
         <br />
         <label>Date of birth</label>
         <br />

         <div  
            style={{
               margin: "auto",
               display: "block",
            
              
            }}>
            <input
               id="date"
               type="date"
               defaultValue=""
               InputLabelProps={{
                  
               }}
               onChange={e => {
                  handleAgeChange(e);
               }}
            />
         </div>
         <br />
         <label>Contact Number</label>
         <br />
         <input
            type="text"
            value={Num}
           
            onChange={e => {
               handleNumChange(e);
            }}
         />
         <br />
         <br />

         <label>Country</label>
         <br />
         <select name="country" className="form-control" onChange={e => handlecountry(e)}>
            <option>--Select Country--</option>
            {country.map(getcon => (
               <option key={getcon.name} value={getcon.name}>
                  {" "}
                  {getcon.name}
               </option>
            ))}
         </select>
         <br />
         <br />
         <label>State</label>
         <br />
         <select name="state" className="form-control" onChange={e => handlstate(e)}>
            <option>--Select State--</option>
            {stetes.map(st => (
               <option key={st.name} value={st.name}>
                  {st.name}
               </option>
            ))}
         </select>{" "}
         <br /> <br />
         <label>Your email</label>
         <br />
         <input
            type="email"
            value={email}
           
            onChange={e => {
               handleEmailChange(e);
            }}
         />
         <br />
         <br />
        
        <button id="bttn" onClick={sendmessage} >Submit</button>
      </form>
      
      </div>
   );
}
export default Country;
