import { FaExclamationCircle } from "react-icons/fa";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Error({ title, children }: Props) {
  return (
    <div className="error">
      <div className="icon">
        <FaExclamationCircle />
      </div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
