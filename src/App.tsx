import React, { useEffect, useState } from "react";

interface GithubRepo {
  name: string;
  html_url: string;
}

const getRepos = async () => {
  const reposUrl = "https://api.github.com/users/stefan-developer/repos";

  const queryOptions = {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    }
  };

  const response = await fetch(reposUrl, queryOptions);

  return response.json();
}

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    getRepos().then(data => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <input
        placeholder="Search repos"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {loading ? (
        <p>loading ...</p>
      ) : (
        <ul>
          {repos
            .filter((repo) =>
              repo.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((repo) => (
              <li key={repo.name}>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}


export default App;
