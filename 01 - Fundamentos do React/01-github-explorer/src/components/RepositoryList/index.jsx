import {RepositoryItem} from '../RepositoryItem'
export function RepositoryList(){
  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
       <RepositoryItem repository={{
         name:"teste",
         description:"sei la teste 123",
         link:"https://github.com"
       }}/>
     

       
      </ul>
    </section>
  )
}