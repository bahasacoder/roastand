import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

export default async function oktozPage() {


 return (
   <>
     <div>Oktoz Page</div>
   </>
 )
   
}
