import { PropsWithChildren } from "react";

export const Part = (props: { title: string } & PropsWithChildren) => (
  <div>
    <h2 className="text-4xl font-extrabold text-center mb-8 text-fun-black-500">
      {props.title}
    </h2>
    {props.children}
  </div>
);
