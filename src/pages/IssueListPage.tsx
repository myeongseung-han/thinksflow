import { useRecoilValue } from "recoil";
import { issueListSelector } from "../recoil/selectors";
import { GithubIssue } from "../types";

function IssueListPage() {
    const issueList: GithubIssue[] = useRecoilValue(issueListSelector);
    
    return (
        <>
            {issueList.map(issue => {
                return <div>{issue.title}</div>
            })}
        </>
    );
}

export default IssueListPage;