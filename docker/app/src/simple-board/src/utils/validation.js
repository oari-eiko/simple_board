/**
 * ユーザー名のバリデーション
 * @param {string}      userName 
 * @returns {string}    
 */
export function validateUserName(userName) {
  // バリデーション
  let regexUserName = new RegExp(/^[\w@\-_/+ ]{4,25}$/);
  if (regexUserName.test(userName)) {
    return '';
  
  // 形式がおかしい場合はエラー文を出力
  } else {
    return 'ユーザー名が有効な値ではありません。';
  }
}

/**
 * パスワードのバリデーション
 * @param {string}      passWord
 * @returns {string}    
 */
export function validatePassWord(passWord) {
  // バリデーション
  let regexPassWord = new RegExp(/^[\w_\- ]{6,30}$/);
  if (regexPassWord.test(passWord)) {
    return '';
  
  // 形式がおかしい場合はエラー文を出力
  } else {
    return 'パスワードが有効な値ではありません。';
  }
}
