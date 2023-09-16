import { useRecoilValue } from "recoil";
import { selectedIssueState } from "../recoil/atoms";

function IssueDetailPage() {
    const selectedIssue = useRecoilValue(selectedIssueState);

    if(!selectedIssue) return <></>;

    return (
        <>
            <div>{selectedIssue.title}</div>
            <div>{selectedIssue.body}</div>
        </>
    );
}

export default IssueDetailPage;