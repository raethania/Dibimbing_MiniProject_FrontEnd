interface AuthMessageProps {
  message: string;
  error: string;
}

export default function AuthMessage({ message, error }: AuthMessageProps) {
  return (
    <>
      {message && <p className="text-green-600 mt-2">{message}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </>
  );
}