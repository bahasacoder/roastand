import { Octokit } from "octokit/rest";

// Initialize client
const octokit = new Octokit({ 
  auth:  process.env.GITHUB_TOKEN
});

async function getRepositoryData() {
  try {
    // Fetch information for a specific repository
    const { data } = await octokit.rest.repos.get({
      owner: "bahasacoder",
      repo: "reastand",
    });

    console.log(`Repo Name: ${data.name}`);
    console.log(`Description: ${data.description}`);
    console.log(`Stars: ${data.stargazers_count}`);
  } catch (error) {
    console.error(`Error fetching data: ${error.message}`);
  }
}

getRepositoryData();
