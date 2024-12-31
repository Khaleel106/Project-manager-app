export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base bg-stone-700 text-stone-300 rounded-md hover:bg-stone-600 hover:text-white hover:scale-105 transition-all"
      {...props}
    >
      {children}
    </button>
  );
}
