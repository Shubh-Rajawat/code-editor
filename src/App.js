import { useEffect } from 'react';
import './App.css';
import Landing from './components/Landing';


function App() {

useEffect(()=>{
  document.addEventListener("visibilitychange", event => {
    if (document.visibilityState == "visible") {
      document.title = "Editor by Shubh"
    } else {
      document.title = "Come-Back-N-Code"
    }
  })
},[])

  return (
    <div className='relative bg-gray-300' >
      <Landing />
      <a href='https://shubh-rajawat.vercel.app/'  target='_blank'
       className=" absolute bottom-2 right-2 cursor-pointer
      text-gray-900 bg-gray-50 border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Creator</a>
    </div>
  );
}

export default App;
