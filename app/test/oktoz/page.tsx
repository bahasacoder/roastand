import { Octokit } from "@octokit/rest";
// Initialize client
const octokit = new Octokit({ 
  auth:  process.env.GITHUB_TOKEN
});

export default async function getRepositoryData() {
  const konsole = "baca console log disini";
  
      console.log("Fetching data");
  
  return (
    <><div className="my-24 border-2">
      <p>OctoKit Page Fetching data</p>
      <p>{konsole}</p>
    </div></>
  )
}

// getRepositoryData();
