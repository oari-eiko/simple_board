import { useNavigate, useLocation } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

// components
import AlertMessage from '../components/AlertMessage';

// utils
import { validateUserName, validatePassWord } from '../utils/validation';

function LogIn() {
  // クッキー有効化
  axios.defaults.withCredentials = true;

  // ナビゲート生成
  let navigate = useNavigate();
  // ロケーション生成
  let location = useLocation();

  // フォーム値
  const [ formValues, setFormValues ] = useState({ userName: '', passWord: '' });
  // エラーメッセージ
  const [ formError, setFormError ] = useState({ userName: '', passWord: '' , userAuth: ''});

  // Changeイベントハンドラ
  function handleChange(event) {
    // 入力値を取得してname属性値をキーとして値を保持
    const key = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [key]:value });
  }

  // Submitイベントハンドラ
  function handleSubmit(event) {
    // デフォルト動作を無くす
    event.preventDefault();

    // バリデーション
    let userAuthError = '';
    let userNameError = validateUserName(formValues.userName);
    let passWordError =  validatePassWord(formValues.passWord);

    // バリデーションに通ったか
    if (userNameError==='' && passWordError==='') {
      // APIで認証
      axios.get('http://localhost:8080/sanctum/csrf-cookie').then(response => {
        axios.post('http://localhost:8080/api/auth/login/', { 'name': formValues.userName, 'password': formValues.passWord })
        .then(response => {

          // 認証された場合はトークンを保存してホーム画面へ
          if(response.data.status === 200){
            navigate('/board');   // ホーム画面へ
          
          // 認証されなかったらアラートを表示
          } else {
            userAuthError = 'ユーザー名、またはパスワードが違います。';
            setFormError({
              userName: userNameError,
              passWord: passWordError,
              userAuth: userAuthError,
            });
          }

        }).catch(error => console.log(error));
      }).catch(error => console.log(error));
    
    // 通らなかったらアラート表示 
    } else {
      setFormError({
        userName: userNameError,
        passWord: passWordError,
        userAuth: userAuthError,
      });
    }
  }

  // JSX
  return (
    <div className="my-4">
      {/* アラート（あれば表示） */}
      <div className='max-w-md mx-auto'>
        {location.state && location.state.createdUser && <AlertMessage message="アカウントが作成されました。" type="success" />}
        {formError.userName !== '' && <AlertMessage message={formError.userName} type="warning" />}
        {formError.passWord !== '' && <AlertMessage message={formError.passWord} type="warning" />}
        {formError.userAuth !== '' && <AlertMessage message={formError.userAuth} type="warning" />}
      </div>
      {/* <!-- ログインフォーム --> */}
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          {/* <!-- ユーザーネーム --> */}
          <div className="border-b border-cyan-600 py-1 mt-2 text-left">
            <input name='userName' value={formValues.userName} onChange={handleChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none w-full" type="text" placeholder="ユーザー名" maxLength="25" />
          </div>
          <div>
            <p className='text-sm text-gray-500'><small>※4文字以上25字以下の半角英数字（半角記号「 @ - _ / + 」も可）</small></p>
          </div>
          {/* <!-- パスワード --> */}
          <div className="border-b border-cyan-600 py-1 mt-2 text-left">
            <input name='passWord' value={formValues.passWord} onChange={handleChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none w-full" type="password" placeholder="パスワード" maxLength="30" />        
          </div>
          <div>
            <p className='text-sm text-gray-500 mb-4'><small>※6文字以上30字以下の半角英数字（半角記号「 _ - 」も可）</small></p>
          </div>
          {/* <!-- ボタン --> */}
          <div className="text-center my-4">
            <button className="w-36 bg-cyan-700 hover:bg-cyan-800 font-bold text-white py-2 px-4 rounded" type="submit">
              Log In
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
