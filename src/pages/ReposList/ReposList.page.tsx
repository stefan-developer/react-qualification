import React, { useEffect, useState } from "react";
import Page from "../../components/templates/Page/Page.component";
import Input from "../../components/atoms/Input/Input.component";
import Loader from "../../components/molecules/Loader/Loader.component";
import List from "../../components/organisms/List/List.component";
import IGithubRepo from "../../models/GithubRepo";
import getRepos from "../../api/github/get-repos/getRepos";

export function filterGithubRepos(repos: any[], searchTerm: string) {
  return repos.filter((repo: any) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

function ReposList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [repos, setRepos] = useState<IGithubRepo[]>([]);

  useEffect(() => {
    getRepos().then((data: IGithubRepo[]) => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <Page>
      <Input
        placeholder="Search repos"
        value={searchTerm}
        onChange={(inputValue) => setSearchTerm(inputValue)}
      />
      {loading ? <Loader /> : <List data={filterGithubRepos(repos, searchTerm)} />}
    </Page>
  );
}

export default ReposList;
