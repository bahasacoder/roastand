import { Octokit } from "@octokit/rest";
import { createTokenAuth } from "@octokit/auth-token";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export default octokit;