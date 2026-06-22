import { Octokit } from '@octokit/rest';


export default async function oktozPage() {
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

 
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
    


 return (
   <>
    <main className="mt-24">
     <div>Oktoz Page</div>
     </main>
   </>
 )
   
}
