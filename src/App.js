
import React ,{ useState } from 'react';
import './App.css';
//import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Text from './Components/Text';

function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message, type) =>{

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#031526';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  } 
  return (
    
    <> 
    <Navbar title = "Phrase Pulse"  about = "About us"  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3"> 
    <Text showAlert={showAlert} heading = "Enter the text to analayze"mode={mode} /> 
    </div> 
    {/* <About/>  */}
    
    </>
  );
}

export default App;
