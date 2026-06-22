import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default async function oktozPage() {


  const response = await octokit.rest.repos.getContent({
  mediaType: {
    format: "raw",
  },
  owner: "bahasacoder",
  repo: "roastand",
  path: "db/items.json",
});
  //, JSON.parse(data).title
console.log("package title: %s");
  
 return (
   <>
     <div>Oktoz Page</div>
   </>
 )
   
}
