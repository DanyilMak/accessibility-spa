export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      className="toast"
      aria-live="polite"
      aria-atomic="true"
    >
      {message}
    </div>
  );
}