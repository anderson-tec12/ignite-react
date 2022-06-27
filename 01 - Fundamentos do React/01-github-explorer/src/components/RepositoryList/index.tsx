import { RepositoryItem } from "../RepositoryItem";
import { api } from "../../services/api";
import "../../styles/repositories.scss";
import { useState, useEffect, StrictMode } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  id: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  function getRepository() {
    api.get("/orgs/rocketseat/repos").then((resp) => {
      console.log(resp.data);

      setRepositories(resp.data);
    });
  }

  useEffect(() => {
    getRepository();
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositorios</h1>

      <ul>
        <StrictMode>
          {repositories.map((repository) => {
            return (
              <StrictMode key={repository.id}>
                <RepositoryItem
                  key={repository.id}
                  repository={{
                    name: repository.name,
                    description: repository.description,
                    link: repository.html_url,
                  }}
                />
              </StrictMode>
            );
          })}
        </StrictMode>
      </ul>
    </section>
  );
}
