 import About from "./components/About.jsx";
 import {Routes, Route} from "react-router-dom";
 import Footer from "./components/Footer.jsx";
 import Navbar from "./components/Navbar.jsx"
 import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";
import Contactus from "./pages/Contactus.jsx";
 const App = () => {
   return (
    <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/" element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/about" element={<Contactus/>}/>
   </Routes>
   <Footer />
    </>
  );
 }

 export default App;


//  function MyButton(){
//   return(
//     <button style= {{backroundColor:"blue", color:"white"}}>I `m a button</button>
//   )
//  }

//  export default function MyApp(){
//    return(
//      <>
//     <h1>Welcome to my app</h1>
//     <MyButton />
//      </>
//    )
//  }
