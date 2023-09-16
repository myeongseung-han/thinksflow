import { selectorFamily } from "recoil";
import octokit from "../api/octokit";

export const issueListPerPageState = selectorFamily({
    key: 'issueListPerPage',
    get: (page: number) => async () => {
        if(page === 0) return [];

        const response = await octokit.request('GET /repos/{owner}/{repo}/issues?sort=comments&state=open&per_page=10&page={page}', {
          owner: 'angular',
          repo: 'angular-cli',
          page,
        });

        return response.data;
    },
});
