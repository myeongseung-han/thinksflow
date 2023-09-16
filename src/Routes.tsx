import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import IssueListPage from './pages/IssueListPage';
import IssueDetailPage from './pages/IssueDetailPage';

export function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/issue-list" element={<IssueListPage />} />
      <Route path="/issue-detail" element={<IssueDetailPage />} />
      <Route path="*" element={<Navigate replace to="/issue-list" />} />
    </ReactRouterRoutes>
  );
};
