export function RepositoryItem(props){
  const {name,link,description} = props.repository
  return (
    <li>
          <strong>{name}</strong>
          <p>{description}</p>
          <a href={link} target="_blank">Acessar repositorio</a>
    </li>
  )
}