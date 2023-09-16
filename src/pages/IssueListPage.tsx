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
        setIssueList(prevIssueList => [...prevIssueList, ...issueListPerPage]);
    }, [issueListPerPage, setIssueList]);

    function handleIssueSelect(issue: GithubIssue) {
        setSelectedIssue(issue);
        navigate('/issue-detail');
    }

    function handleLoadClick() {
        setPage(page + 1);
    }

    function handleResetClick() {
        setPage(0);
        setIssueList([]);
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
                position="fixed"
                bottom="0"
                width="100%"
            >
                <Stack spacing={5} direction="row">
                    <Button variant="contained" onClick={handleLoadClick}>load</Button>
                    <Button variant="outlined" onClick={handleResetClick}>초기화</Button>
                </Stack>
            </Box>
        </>
    );
}

export default IssueListPage;