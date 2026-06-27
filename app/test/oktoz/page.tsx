import { Octokit } from "@octokit/rest";
// Initialize client
const octokit = new Octokit({ 
  auth:  process.env.GITHUB_TOKEN
});

export default async function getRepositoryData() {
      console.log(`Fetching data`);
  
  return (
    <><div className="my-24 border-2">OctoKit Page Fetchin data</div></>
  )
}

// getRepositoryData();
