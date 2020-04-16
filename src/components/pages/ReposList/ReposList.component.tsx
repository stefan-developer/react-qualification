import React, { useEffect, useState } from "react";
import Page from "../../templates/Page/Page.component";
import Input from "../../atoms/Input/Input.component";
import Loader from "../../molecules/Loader/Loader.component";
import List from "../../organisms/List/List.component";

interface GithubRepo {
  name: string;
  html_url: string;
}

const getRepos = async () => {
  const reposUrl = "https://api.github.com/users/stefan-developer/repos";

  const queryOptions = {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  };

  const response = await fetch(reposUrl, queryOptions);

  return response.json();
};

function ReposList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  useEffect(() => {
    getRepos().then((data) => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  // Logic abstracted away from presentational components. The list renderes a list and thats it.
  const filteredRepos: any = repos.filter((repo: any) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Page>
      <Input placeholder="Search repos" value={searchTerm} onChange={inputValue => setSearchTerm(inputValue)}/>
      {loading ? <Loader /> : <List data={filteredRepos} />}
    </Page>
  );
}

export default ReposList;
