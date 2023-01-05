export default function Button({
  color,
  size,
  variant,
  type,
  children,
  onClick,
}) {
  return (
    <button
      className={`btn btn-${size} btn-${color} btn-${variant}`}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  );
}
