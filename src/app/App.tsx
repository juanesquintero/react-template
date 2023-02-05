import React from 'react';
import '@app/App.scss';
import Home from '@src/app/features/home/Home';
import { APP_FILE_PATH } from './shared/constants';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Home app={{path: APP_FILE_PATH}}></Home>
      </header>
    </div>
  );
}

export default App;
