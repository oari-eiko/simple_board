import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';

// components
import AlertMessage from '../components/AlertMessage';

// utils
import { validateUserName, validatePassWord } from '../utils/validation';

function SignUp() {
  // ナビゲート生成
  let navigate = useNavigate();

  // フォーム値
  const [ formValues, setFormValues ] = useState({ userName: '', passWord: '', passWordSub: '' });
  // エラーメッセージ
  const [ formError, setFormError ] = useState({ userName: '', passWord: '' , passWordSub: '' });

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

    // 既に登録済みかAPIで確認
    axios
    .get('http://localhost:8080/api/users/searchName?name='+formValues.userName)
    .then(response => {
      let userNameError = '';
      let passWordError = '';
      let passWordSubError = '';

      // 登録済みか確認
      if (Object.keys(response.data).length !== 0) {
        userNameError = 'そのユーザー名は既に使用されています。';
      
      // バリデーション（ユーザー名）
      } else userNameError = validateUserName(formValues.userName);

      // バリデーション（パスワード）
      passWordError =  validatePassWord(formValues.passWord);

      // 確認用パスワード
      if (formValues.passWord !== formValues.passWordSub) {
        passWordSubError = '確認用パスワードが違います。';
      } else {
        passWordSubError = '';
      }
      
      // バリデーション結果を格納
      setFormError({
        userName: userNameError,
        passWord: passWordError,
        passWordSub: passWordSubError,
      });
      
      // 要件を満たしていればユーザーを登録
      if (userNameError==='' && passWordError==='' && passWordSubError==='') {
        axios.post('http://localhost:8080/api/users/', {
          name: formValues.userName,
          password: formValues.passWord,
        })
        
        // トップページにリダイレクト
        .then(response => { navigate('/login', { state: { createdUser: true }}); })
        
        // エラー表示（ユーザー登録API） 
        .catch(error => console.log(error) );
      }
    
    // エラー表示（ユーザー名取得API）
    }).catch(error => console.log(error) );
  }

  // JSX
  return (
    <div className="my-4">
      {/* アラート（あれば表示） */}
      <div className='max-w-md mx-auto'>
        {formError.userName !== '' && <AlertMessage message={formError.userName} type="warning" />}
        {formError.passWord !== '' && <AlertMessage message={formError.passWord} type="warning" />}
        {formError.passWordSub !== '' && <AlertMessage message={formError.passWordSub} type="warning" />}
      </div>
      {/* <!-- ログインフォーム --> */}
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          {/* <!-- ユーザーネーム --> */}
          <div className="border-b border-yellow-600 py-1 mt-2 text-left">
            <input name='userName' value={formValues.userName} onChange={handleChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none w-full" type="text" placeholder="ユーザー名" maxLength="25" />
          </div>
          <div>
            <p className='text-sm text-gray-500'><small>※4文字以上25字以下の半角英数字（半角記号「 @ - _ / + 」も可）</small></p>
          </div>
          {/* <!-- パスワード --> */}
          <div className="border-b border-yellow-600 py-1 mt-2 text-left">
            <input name='passWord' value={formValues.passWord} onChange={handleChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none w-full" type="password" placeholder="パスワード" maxLength="30" />        
          </div>
          <div>
            <p className='text-sm text-gray-500'><small>※6文字以上30字以下の半角英数字（半角記号「 _ - 」も可）</small></p>
          </div>
          {/* <!-- パスワード(確認用) --> */}
          <div className="border-b border-yellow-600 py-1 mt-2 text-left">
            <input name='passWordSub' value={formValues.passWordSub} onChange={handleChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none w-full" type="password" placeholder="パスワード（確認用）" maxLength="30" />        
          </div>
          <div>
            <p className='text-sm text-gray-500 mb-4'><small>※再度入力してください。</small></p>
          </div>
          {/* <!-- ボタン --> */}
          <div className="text-center my-4">
            <button className="w-36 bg-yellow-700 hover:bg-yellow-800 font-bold text-white py-2 px-4 rounded" type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
