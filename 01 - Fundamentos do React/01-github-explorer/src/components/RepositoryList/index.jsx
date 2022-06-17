import {RepositoryItem} from '../RepositoryItem'
import {api} from '../../services/api'
import '../../styles/repositories.scss'
import { useState, useEffect } from 'react'

export function RepositoryList(){
  const [repositories, setRepositories] = useState([])

  function getRepository(){
     api.get('/orgs/rocketseat/repos').then(resp => {
      console.log(resp.data)

      setRepositories(resp.data)
     })
    
  }

  useEffect(() => {
    getRepository()
  },[])

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>

        {
          repositories.map(repository => {
            return (
              <RepositoryItem key={repository.id} repository={{
                name:  repository.name,
                description:repository.description,
                link:repository.html_url
              }}/>
            )
          })
        }
       


     

       
      </ul>
    </section>
  )
}