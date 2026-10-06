const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-red-800"></span>
        <span className="h-3 w-3 animate-bounce rounded-full bg-red-800 [animation-delay:0.15s]"></span>
        <span className="h-3 w-3 animate-bounce rounded-full bg-red-800 [animation-delay:0.3s]"></span>
      </div>
    </div>
  );
};

export default Loading;
