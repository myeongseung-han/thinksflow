export interface GithubIssue {
    id: number;
    number: number;
    user: {
        login: string;
        avatar_url: string;
    };
    title: string;
    created_at: string;
    comments: number;
    body: string;
  }