export default function Button({ color, size, variant, type, children }) {
  return (
    <button
      className={`btn btn-${size} btn-${color} btn-${variant}`}
      type={type}>
      {children}
    </button>
  );
}
