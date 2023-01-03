import React, { FC } from "react";

interface TypeFill {
  fill?: "#D8DBD9";
}

export const Icon: FC<TypeFill> = ({ fill }) => {
  const Home = (fill) => (
    <svg
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3.79765L21 10.1506V21.1765H18.2V12.7059H9.8V21.1765H7V10.1506L14 3.79765ZM14 0L0 12.7059H4.2V24H12.6V15.5294H15.4V24H23.8V12.7059H28L14 0Z"
        fill="#D8DBD9"
      />
    </svg>
  );

  return <div>index</div>;
};
