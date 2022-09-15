import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios";
axios.defaults.withCredentials = true;      // クッキー有効化

function Private() {
  // ナビゲート生成
  const navigate = useNavigate();

  // useEffect
  useEffect(() => {

    // ログイン状態かどうかAPIで確認
    axios.get('http://localhost:8080/api/auth/check/')
    .then(response => {
      // ログインしてない場合はログイン画面へ遷移する
      if (response.data.loggedIn!==true) {
        navigate('/login');
      }
    })
    // エラー処理
    .catch(error => {
      console.log(error);
      return false;
    });
  }, [navigate]);

  // JSX
  return (<Outlet />);
}

export default Private;
