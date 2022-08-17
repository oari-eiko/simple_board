// libraries
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

// CSS
import './App.css';

// Views
import Top from './views/Top';
import SignUp from './views/SignUp';
import NotFound from './views/NotFound';

// Components
import MainHeader from './components/MainHeader';
import MainFooter from './components/MainFooter';

// Router
function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        {/* ヘッダー */}
        <header>
          <MainHeader />
        </header>
        {/* メインコンテンツ */}
        <main className='flex-grow bg-gray-200'>
          <Routes>
            <Route exact path='/' element={<Top />} />
            <Route path='signup' element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {/* フッター */}
        <footer>
          <MainFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
