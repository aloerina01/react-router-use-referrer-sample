import { FC } from "react";

const style = {
  padding: "40px",
  backgroundColor: "green",
  color: "white"
};

export const AuthedPage: FC<{ from: string }> = ({ from }) => {
  return (
    <div style={style}>
      <p>This is AuthedPage Page.</p>
      <p>
        from: <b>"{from}"</b>
      </p>
    </div>
  );
};
