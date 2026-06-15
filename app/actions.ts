'use server';

import { Octokit } from '@octokit/rest';

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const owner = process.env.GITHUB_OWNER;
const repo = process.env.GITHUB_REPO;
const path = process.env.GITHUB_FILE_PATH;

// Fetch the JSON file content and its unique SHA blob ID
export async function getJsonFile() {
  try {
    const { data } = await octokit.repos.getContent({ owner, repo, path });
    
    // GitHub returns file content as a base64 encoded string
    const contentString = Buffer.from(data.content, 'base64').toString('utf-8');
    
    return {
      content: JSON.parse(contentString),
      sha: data.sha, // Needed later to update the file
    };
  } catch (error) {
    console.error('Error fetching file:', error);
    throw new Error('Failed to fetch JSON file.');
  }
}

// Update the JSON file content in the repository
export async function updateJsonFile(newContent, sha) {
  try {
    const contentString = JSON.stringify(newContent, null, 2);
    const contentBase64 = Buffer.from(contentString).toString('base64');

    await octokit.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: 'feat: update JSON configuration via Next.js app',
      content: contentBase64,
      sha, // Proves you are editing the latest version
    });

    return { success: true };
  } catch (error) {
    console.error('Error updating file:', error);
    throw new Error('Failed to update JSON file.');
  }
}