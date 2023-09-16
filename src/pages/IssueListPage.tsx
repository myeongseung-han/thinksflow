import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { issueListPerPageState } from "../recoil/selectors";
import { GithubIssue } from "../types";
import { issueListState, selectedIssueState } from "../recoil/atoms";
import { Link, useNavigate } from "react-router-dom";
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
            <div style={{
                height: "calc(100vh - 6rem)",
                overflowY: "scroll",
            }}>
                {issueList.map((issue, index) => {
                    return (
                        <>
                            <div key={issue.id} onClick={() => handleIssueSelect(issue)}>{issue.title}</div>
                            {(index + 1) % 10 === 0 &&
                                <Link to="https://thingsflow.com/">
                                    <img 
                                        alt="ad"
                                        src="https://hellobot-test.s3.ap-northeast-2.amazonaws.com/image/01fdd797-0477-4717-8d70-8551150463f7"
                                    />
                                </Link>
                            }
                        </>
                    );
                })}
            </div>
            <Box
                sx={{backgroundColor: "white"}}
                display="flex"  
                justifyContent="center"
                position="sticky"
                bottom="0"
                width="100%"
                height="3rem"
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