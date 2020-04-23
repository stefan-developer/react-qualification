import IGithubRepo from "../../../models/GithubRepo";

export default async function getRepos(): Promise<IGithubRepo[]> {
  const reposUrl = "https://api.github.com/users/stefan-developer/repos";

  const queryOptions = {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  };

  const response = await fetch(reposUrl, queryOptions);

  return response.json();
};
