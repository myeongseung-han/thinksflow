import { RecoilRoot } from 'recoil';
import './App.css';
import { Routes } from './Routes';
import { Suspense } from 'react';
import PageLayout from './layout/PageLayout';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <PageLayout>
          <Routes />
        </PageLayout>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
