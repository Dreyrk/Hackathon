function NotFound() {
  return (
    <div>
      <img
        src="https://i.pinimg.com/736x/7c/1c/a4/7c1ca448be31c489fb66214ea3ae6deb.jpg"
        alt="notFound"
      />
      <div className="flex justify-center w-full">
        <a
          href="/"
          className="border h-10 flex items-center justify-center text-xl w-40 rounded-xl text-black bg-gradient-to-r from-primary to-secondary shadow-sm shadow-slate-400">
          <h1>Return to home</h1>
        </a>
      </div>
    </div>
  );
}

export default NotFound;
