export function RepositoryItem(props){
  const {name,link,description} = props.repository
  return (
    <li>
          <strong>{name}</strong>
          <p>{description}</p>
          <a href={link}>Acessar repositorio</a>
    </li>
  )
}