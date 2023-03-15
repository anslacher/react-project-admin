import React from 'react';
// import Component1 from "@/component/Compon1"
import router from "@/router";
import {useRoutes,Link } from "react-router-dom"

function App() {
  const outlet =  useRoutes(router)
  return (
    <div className="App">
      <Link to='/Home'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/User'>User</Link>
     <React.Suspense fallback={<div>Loading..</div>}>
     {outlet}
     </React.Suspense>
    </div>
  );
}

export default App;
