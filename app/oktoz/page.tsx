import { Octokit } from "@octokit/rest";
// Initialize client
const octokit = new Octokit({ 
  auth:  process.env.GITHUB_TOKEN
});

export default async function getRepositoryData() {
  try {
    // Fetch information for a specific repository
    const { data } = await octokit.rest.repos.get({
      owner: "bahasacoder",
      repo: "reastand",
      path: "db/items.json"
    });

    console.log(`Repo Name: ${data.repo}`);
  } catch (error) {
    console.error(`Error fetching data`);
  }
  return (
    <><div>OctoKit Page</div></>
  )
}

// getRepositoryData();
