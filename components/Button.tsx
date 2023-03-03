import { AnchorHTMLAttributes } from "react";

export const Button = ({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      className={
        "fun__button bg-gradient-to-r from-fun-blue-500 to-fun-blue-200 text-white font-bold px-4 py-2 rounded-full drop-shadow-md " +
        className
      }
      {...props}
    />
  );
};
