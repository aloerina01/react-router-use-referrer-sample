import { FC } from "react";

const style = {
  padding: "40px",
  backgroundColor: "#aaa",
  color: "white"
};

export const PublicPage: FC<{ from: string }> = ({ from }) => {
  return (
    <div style={style}>
      <p>This is Public Page.</p>
      <p>
        from: <b>"{from}"</b>
      </p>
    </div>
  );
};
