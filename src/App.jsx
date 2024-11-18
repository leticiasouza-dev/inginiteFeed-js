import { Header } from "./components/Header.jsx/Header"

import styles from './App.module.css'

import './global.css';
import { SideBar } from "./components/SideBar/SideBar";

function App() {
 return(
  <div>
    <Header/>

    <div className={styles.wrapper}>
      <SideBar/>

      <main></main>
    </div>
  </div>
    

    
 )
}

export default App
