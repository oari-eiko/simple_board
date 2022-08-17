import { useState } from 'react';

function SignUp() {
  // state
  const [ formValues, setFormValues ] = useState({ userName: '', passWord: '' });

  // handler
  function handleChange(event) {
    // name属性値と入力値を取得
    let key = event.target.name;
    let value = event.target.value;
    // 値をセット
    setFormValues({ ...formValues, [key]:value });
  }

  // JSX
  return (
    <div className="my-4">
      {/* <!-- ログインフォーム --> */}
      <form className="max-w-sm mx-auto">
        <div className="flex flex-col">
          {/* <!-- ユーザーネーム --> */}
          <div className="border-b border-yellow-600 py-1 my-2 text-left">
            <input name='userName' value={formValues.userName} onChange={handleChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Username" />        
          </div>
          {/* <!-- パスワード --> */}
          <div className="border-b border-yellow-600 py-1 my-2 mb-4 text-left">
            <input name='passWord' value={formValues.passWord} onChange={handleChange} className="mx-3 appearance-none bg-transparent text-gray-700 leading-tight focus:outline-none" type="password" placeholder="Password" />        
          </div>
          {/* <!-- ボタン --> */}
          <div className="text-center my-4">
            <button className="w-36 bg-yellow-700 hover:bg-yellow-800 font-bold text-white py-2 px-4 rounded" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
