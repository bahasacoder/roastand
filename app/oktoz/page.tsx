import { Octokit } from '@octokit/rest';


export default async function oktozPage() {
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
 
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
