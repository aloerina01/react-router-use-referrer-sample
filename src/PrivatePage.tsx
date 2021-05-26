import { FC } from "react";

const style = {
  padding: "40px",
  backgroundColor: "#aaa",
  color: "white"
};

export const PrivatePage: FC<{ from: string }> = ({ from }) => {
  return (
    <div style={style}>
      <p>This is Private Page.</p>
      <p>
        from: <b>"{from}"</b>
      </p>
    </div>
  );
};
