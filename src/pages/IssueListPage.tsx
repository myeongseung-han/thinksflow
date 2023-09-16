import { useRecoilValue } from "recoil";
import { issueListSelector } from "../recoil/selectors";
import { GithubIssue } from "../types";

function IssueListPage() {
    const issueList: GithubIssue[] = useRecoilValue(issueListSelector);
    
    return (
        <>
            <div>IssueListPage</div>
            {issueList.map(issue => {
                return <div>{issue.title}</div>
            })}
        </>
    );
}

export default IssueListPage;