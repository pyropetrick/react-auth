interface IProps {
  message?: string;
}

export const ErrorMessage = ({ message }: IProps) => {
  return <p className="text-danger m-0">{message}</p>;
};
