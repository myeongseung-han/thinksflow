import { useRecoilValue, useSetRecoilState } from "recoil";
import { issueListSelector } from "../recoil/selectors";
import { GithubIssue } from "../types";
import { selectedIssueState } from "../recoil/atoms";
import { useNavigate } from "react-router-dom";

function IssueListPage() {
    const navigate = useNavigate();

    const issueList: GithubIssue[] = useRecoilValue(issueListSelector);
    const setSelectedIssue = useSetRecoilState(selectedIssueState);

    function handleIssueSelect(issue: GithubIssue) {
        setSelectedIssue(issue);
        navigate('/issue-detail');
    }
    
    return (
        <>
            {issueList.map(issue => {
                return <div key={issue.id} onClick={() => handleIssueSelect(issue)}>{issue.title}</div>
            })}
        </>
    );
}

export default IssueListPage;