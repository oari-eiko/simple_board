import { useState } from 'react';
// components
import AlertMessage from '../components/AlertMessage';

function SignUp() {
  // フォーム値
  const [ formValues, setFormValues ] = useState({ userName: '', passWord: '' });
  // エラーメッセージ
  const [ formError, setFormError ] = useState({ userName: '', passWord: '' });

  // Chengaイベントハンドラ
  function handleChange(event) {
    // 入力値を取得してname属性値をキーとして値を保持
    const key = event.target.name;
    const value = event.target.value;
    setFormValues({ ...formValues, [key]:value });
  }

  // Submitイベントハンドラ
  function handleSubmit(event) {
    event.preventDefault();
    // バリデーション（ユーザー名）
    let userNameError = '';
    if (!/^[\w@\-_/+ ]{5,25}$/.test(formValues.userName)) {
      userNameError = 'ユーザー名が有効な値ではありません。';
    }

    // バリデーション（パスワード）
    let passWordError = '';
    if (!/^[\w_\- ]{8,30}$/.test(formValues.passWord)) {
      passWordError = 'パスワードが有効な値ではありません。';
    }
    // バリデーション結果を格納
    setFormError({ userName: userNameError, passWord: passWordError });
  }

  // JSX
  return (
    <div className="my-4">
      {/* フォームエラー */}
      <div className='max-w-md mx-auto'>
        {formError.userName !== '' && <AlertMessage message={formError.userName} />}
        {formError.passWord !== '' && <AlertMessage message={formError.passWord} />}
      </div>
      {/* <!-- ログインフォーム --> */}
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          {/* <!-- ユーザーネーム --> */}
          <div className="border-b border-yellow-600 py-1 mt-2 text-left">
            <input name='userName' value={formValues.userName} onChange={handleChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none w-full" type="text" placeholder="ユーザー名" maxLength="25" />
          </div>
          <div>
            <p className='text-sm text-gray-500'><small>※5文字以上25字以下の半角英数字（半角記号「 @ - _ / + 」も可）</small></p>
          </div>
          {/* <!-- パスワード --> */}
          <div className="border-b border-yellow-600 py-1 mt-2 text-left">
            <input name='passWord' value={formValues.passWord} onChange={handleChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none w-full" type="password" placeholder="パスワード" maxLength="30" />        
          </div>
          <div>
            <p className='text-sm text-gray-500 mb-4'><small>※8文字以上30字以下の半角英数字（半角記号「 _ - 」も可）</small></p>
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
