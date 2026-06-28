export default function Container({ children }) {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-8">
      {children}
    </div>
  );
}