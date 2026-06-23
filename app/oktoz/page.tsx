import { Octokit } from '@octokit/rest';


export default async function oktozPage() {
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

    const { data } = await octokit.rest.repos.getContent({
      owner: "bahasacoder",
      repo: "roastand",
     path: "db/items.json",
      mediaType: {
        format: "raw", // Crucial: forces GitHub to return raw file content text instead of base64
      },
    });

    console.log("Successfully fetched JSON data:");
 return ()
}    
 /*
  const response = await octokit.rest.repos.getContent({
    mediaType: {
      format: "raw",
    },
    owner: "bahasacoder",
    repo: "roastand",
    path: "database.json",
  });
  
   //, JSON.parse(data).title
  console.log("package title: %s");
    

*/





