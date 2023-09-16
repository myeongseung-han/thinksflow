import { atom } from "recoil";
import { GithubIssue } from "../types";

export const selectedIssueState = atom<GithubIssue | null>({
    key: 'selectedIssue',
    default : null,
})