import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { issueListPerPageState } from "../recoil/selectors";
import { GithubIssue } from "../types";
import { issueListState, selectedIssueState } from "../recoil/atoms";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";

function IssueListPage() {
    const navigate = useNavigate();

    const [page, setPage] = useState(0);

    const [issueList, setIssueList] = useRecoilState(issueListState);
    const issueListPerPage: GithubIssue[] = useRecoilValue(issueListPerPageState(page));
    const setSelectedIssue = useSetRecoilState(selectedIssueState);

    useEffect(() => {
        setIssueList([...issueList, ...issueListPerPage]);
    }, [issueListPerPage]);

    function handleIssueSelect(issue: GithubIssue) {
        setSelectedIssue(issue);
        navigate('/issue-detail');
    }

    function handleLoadClick() {
        setPage(page + 1);
    }
    
    return (
        <>
            {issueList.map(issue => {
                return <div key={issue.id} onClick={() => handleIssueSelect(issue)}>{issue.title}</div>
            })}
            <Box
                display="flex"  
                justifyContent="center"
                mt={5}
            >
                <Stack spacing={5} direction="row">
                    <Button variant="contained" onClick={handleLoadClick}>load</Button>
                    <Button variant="outlined">초기화</Button>
                </Stack>
            </Box>
        </>
    );
}

export default IssueListPage;