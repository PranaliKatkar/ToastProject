
import { AlertContainer,useAlert } from './Alert';
import { GlobalContext } from './Context';
import Home from './Home';

function App() {
  const [alerts,alert]=useAlert();
  

  return (
     <GlobalContext.Provider value={{alert}}>
       
      <Home/>
       <AlertContainer alerts={alerts}/>
     </GlobalContext.Provider>
  );
}

export default App;