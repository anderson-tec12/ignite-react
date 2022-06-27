interface Props {
  repository: {
    name: string;
    description: string;
    link: string;
  };
}

export function RepositoryItem(props: Props) {
  const { name, link, description } = props.repository;
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={link} target="_blank">
        Acessar repositorio
      </a>
    </li>
  );
}
