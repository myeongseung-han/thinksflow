import { selector } from "recoil";
import octokit from "../api/octokit";
import { pageState } from "./atoms";

export const issueListPerPageState = selector({
    key: 'issueListPerPage',
    get: async ({get}) => {
        const page = get(pageState);

        if(page === 0) return [];

        const response = await octokit.request('GET /repos/{owner}/{repo}/issues?sort=comments&state=open&per_page=10&page={page}', {
          owner: 'angular',
          repo: 'angular-cli',
          page,
        });

        return response.data;
    },
});
