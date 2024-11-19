import { Header } from "./components/Header.jsx/Header"
import { Post } from "./components/Post/Post";
import { SideBar } from "./components/SideBar/SideBar";

import styles from './App.module.css'

import './global.css';


function App() {
 return(
  <div>
    <Header/>

    <div className={styles.wrapper}>
      <SideBar/>

      <main>
        <Post/>
      </main>
    </div>
  </div>
    

    
 )
}

export default App
