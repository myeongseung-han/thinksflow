import { selector } from "recoil";
import octokit from "../api/octokit";

export const issueListSelector = selector({
    key: 'issueList',
    get: async () => {
        const response = await octokit.request('GET /repos/{owner}/{repo}/issues?sort=comments&state=open', {
          owner: 'angular',
          repo: 'angular-cli',
        });

        return response.data;
    }
})