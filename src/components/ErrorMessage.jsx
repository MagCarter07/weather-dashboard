function ErrorMessage({ message }) {
  return (
    <div className="mt-6 bg-red-500 text-white p-4 rounded-md text-center">
      {message}
    </div>
  );
}

export default ErrorMessage;
