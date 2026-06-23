import { Octokit } from '@octokit/rest';


export default async function oktozPage() {
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
 try {
    // 2. Request the file with the "raw" mediaType format
    const { data } = await octokit.rest.repos.getContent({
      owner: "bahasacoder",
      repo: "roastand",
     path: "db/items.json",
      mediaType: {
        format: "raw", // Crucial: forces GitHub to return raw file content text instead of base64
      },
    });

    // 3. Parse the plain text string into a JSON object
    const jsonObject = JSON.parse(data);
    console.log("Successfully fetched JSON data:", jsonObject);
    
    return jsonObject;
  } catch (error) {
    console.error("Error fetching or parsing JSON file:", error.message);
  }
}

fetchJsonFile();

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
 return (
   <>
    <main className="mt-24">
     <div>Oktoz Page</div>
     </main>
   </>
 )
   
}
