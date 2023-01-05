
import AuthRouter from './router/authRouter';
import Routes from './router/router';
import Index from './views/index';
import useChangeTheme from './utils/hooks/useChangeTheme';
import { createContext, useState } from 'react';
import "@/i18n/config.js";
import useStorage from './utils/hooks/useStorage';
import useTranslation from './utils/hooks/useTranslation';
export const AppContext = createContext();
const App = () => {
  const [lng, setLng] = useState('zh');
  /*设置主题 */
  const _useChangeTheme = useChangeTheme();
  /*切换语言 */
  const _useTranslation=useTranslation();
  /*持久化 */
  const _storage=useStorage();
  _useChangeTheme("light");
  const state = {
    methods: {
      changeLanguage: (lng) => {
        setLng(lng);
      }
    }
  };
  return (
    <AppContext.Provider value={state}>
      <AuthRouter>
        <Routes></Routes>
      </AuthRouter>
    </AppContext.Provider>
  );
}
export default App;
// import { useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!</p>
//         <p>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             count is: {count}
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>
//       </header>
//     </div>
//   )
// }

// export default App
