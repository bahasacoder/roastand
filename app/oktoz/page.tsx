import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default async function oktozPage() {


  const { data } = await octokit.rest.repos.getContent({
  mediaType: {
    format: "raw",
  },
  owner: "bahasacoder",
  repo: "roastand",
  path: "db/items.json",
});
console.log("package title: %s", JSON.parse(data).title);
  
 return (
   <>
     <div>Oktoz Page</div>
   </>
 )
   
}
