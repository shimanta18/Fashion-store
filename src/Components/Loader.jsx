export default function Loader({ size = "w-5 h-5" }) {
  return (
    <div
      className={`${size} border-2 border-t-transparent border-current rounded-full animate-spin`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}