function AlertMessage({ message, type }) {
  // 指定された色によってクラスを変更（react<=>tailwindでは、クラス名の一部を動的に変更することができないため）
  let classValues = '';
  switch (type) {
    case 'error':
      classValues = 'bg-red-100 border border-red-400 text-red-700 my-2 px-4 py-3 rounded relative';
      break;
    case 'warning':
      classValues = 'bg-amber-100 border border-amber-400 text-amber-700 my-2 px-4 py-3 rounded relative';
      break;
    case 'success':
      classValues = 'bg-emerald-100 border border-emerald-400 text-emerald-700 my-2 px-4 py-3 rounded relative';
      break;
    // 赤色がデフォルト
    default:
      classValues = 'bg-red-100 border border-red-400 text-red-700 my-2 px-4 py-3 rounded relative';
      break;
  }
  
  // JSX 
  return (
    <div className={classValues}>
      <p className="text-sm font-bold">※ {message}</p>
    </div>
  );
}

export default AlertMessage;
