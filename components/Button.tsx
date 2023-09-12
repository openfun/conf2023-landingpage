import { AnchorHTMLAttributes } from "react";

export const Button = ({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      className={
        "fun__button text-white font-bold px-10 py-2 rounded-md inline-block " +
        className
      }
      {...props}
    />
  );
};
