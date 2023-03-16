import { AnchorHTMLAttributes } from "react";

export const Button = ({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      className={
        "fun__button bg-fun-blue-500 text-white font-medium px-4 py-2 rounded-full drop-shadow-md " +
        className
      }
      {...props}
    />
  );
};
