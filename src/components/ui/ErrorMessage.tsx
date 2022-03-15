const ErrorMessage = ({
  message,
  children,
}: {
  children?: React.ReactNode;
  message?: string;
}) => <small className="text-danger mt-2 d-block">{children || message}</small>;
export default ErrorMessage;
