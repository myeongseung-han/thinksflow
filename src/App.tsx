import { RecoilRoot } from 'recoil';
import './App.css';
import { Routes } from './Routes';
import { Suspense } from 'react';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
