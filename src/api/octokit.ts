import { Octokit } from "octokit";
import { bearerToken } from "../constant";

const octokit = new Octokit({
    auth: bearerToken,
});

export default octokit;