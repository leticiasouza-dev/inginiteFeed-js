import { Header } from "./components/Header.jsx/Header"
import { Post } from "./components/Post/Post";
import { SideBar } from "./components/SideBar/SideBar";

import styles from './App.module.css'

import './global.css';

const post = [ //array de objetos
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/leticiasouza-dev.png',
      name: 'Letícia Souza',
      role: 'CTO @ Rockeatseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-11-20 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rockeatseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-11-20 20:00:00')
  }
]


function App() {
 return(
  <div>
    <Header/>

    <div className={styles.wrapper}>
      <SideBar/>

      <main>
        {post.map(post => {
          return (
            <Post
              author={post.author} // passando os objetos como props, e do meu componente eu puxo as propriedade dele
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        })}
      </main>
    </div>
  </div>
    

    
 )
}

export default App
