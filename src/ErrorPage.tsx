import { FC } from "react";

const style = {
  padding: "40px",
  backgroundColor: "red",
  color: "white"
};

export const ErrorPage: FC<{ from: string }> = ({ from }) => {
  return (
    <div style={style}>
      <p>Error Page.</p>
      <p>
        from: <b>"{from}"</b>
      </p>
    </div>
  );
};
