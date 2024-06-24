/* eslint-disable react/prop-types */
function Button({ children, onclick }) {
  return (
    <button
      onClick={onclick}
      className="flex items-center justify-center gap-2 hover:bg-red-300 transition-all duration-150 bg-red-400 p-3 rounded text-white"
    >
      {children}
    </button>
  );
}

export default Button;
