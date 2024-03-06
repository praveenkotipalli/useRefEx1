import React from 'react'
import { useEffect } from 'react'
const App = () => {


  const handleSubmit =()=>{
    const praveen= document.querySelector(".search")
    praveen.focus();
  };

  useEffect(() => {
    
  handleSubmit();
  
  }, [])
  

  return (
    <div className='app'>
      <form style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
        <input type='text' className='search'/>
        <button onClick={handleSubmit}>Click</button>
      </form>
    </div>
  )
}

export default App
