import { selector } from "recoil";
import { bearerToken, getIssueListUrl } from "../constant";

export const issueListSelector = selector({
    key: 'issueList',
    get: async () => {
        const response = await fetch(getIssueListUrl, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${bearerToken}`
            }
          });

        if(response.ok) return response.json();
        return [];
    }
})