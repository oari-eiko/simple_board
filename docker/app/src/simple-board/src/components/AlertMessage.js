function AlertMessage({ message }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 my-2 px-4 py-3 rounded relative" role="alert">
      <p className="text-sm font-bold">※ {message}</p>
    </div>
  );
}

export default AlertMessage;
