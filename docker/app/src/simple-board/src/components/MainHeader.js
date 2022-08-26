import { Link } from 'react-router-dom';
import axios from 'axios';

function MainHeader() {
  // クッキー有効化
  axios.defaults.withCredentials = true;

  // handler
  function handleClick(event) {
    axios.post('http://localhost:8080/api/auth/logout/')
    .then(response => console.log('logouted.'))
    .catch(error => console.log(error));
  }
  // ログインしているかチェック
  function handleClickCheck(event) {
    axios.get('http://localhost:8080/api/auth/check/')
    .then(response => console.log(response.data.loggedIn))
    .catch(error => console.log(error));
  }

  // JSX
  return (
    <div>
      <div className="text-center bg-gray-600 py-3">
        <Link to="/">
          <p className="text-2xl text-white font-bold tracking-widest">SIMPLE BOARD</p>
        </Link>
      </div>
      <div>
        <button onClick={handleClick} className='text-right font-bold text-sm text-gray-500'>
          logout
        </button>
        <br />
        <button onClick={handleClickCheck} className='text-right font-bold text-sm text-gray-500'>
          check
        </button>
      </div>
    </div>
  );
}

export default MainHeader;
