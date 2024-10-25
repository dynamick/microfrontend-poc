import './App.css'
import { lazy, Suspense } from 'react'

const MyButton = lazy(() => import('provider/Button'))

const App = () => {
  return (
    <div className="content">
      <h1>CONSUMER</h1>
      <p>imported components:</p>
      <Suspense fallback={<div>Loading...</div>}>
        <MyButton >
          <span>from provider</span>
        </MyButton>
      </Suspense>
    </div>
  );
};

export default App;
