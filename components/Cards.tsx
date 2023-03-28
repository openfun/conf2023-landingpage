import { PropsWithChildren } from "react";

export const LargeCard = ({
  title,
  children,
  imageUrl,
  imageAlt,
}: {
  title: string;
  imageUrl?: string;
  imageAlt?: string;
} & PropsWithChildren) => (
  <div className="bg-fun-grey-200">
    <div className="p-4 lg:py-10 lg:px-20">
      <h4 className="text-2xl lg:text-4xl font-bold mb-4">{title}</h4>
      {children}
    </div>
    {imageUrl && <img src={imageUrl} alt={imageAlt} />}
  </div>
);

export const SmallCard = ({
  title,
  children,
  imageUrl,
  imageAlt,
}: {
  title: string;
  imageUrl?: string;
  imageAlt?: string;
} & PropsWithChildren) => (
  <div className="bg-fun-grey-200 relative overflow-hidden p-4 lg:py-10 lg:px-20 lg:w-1/2">
    {imageUrl && (
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute bottom-[-20px] right-[-50px] w-[250px] opacity-20"
      />
    )}
    <div className="relative h-full flex flex-col">
      <h4 className="text-2xl lg:text-3xl font-bold mb-8">{title}</h4>
      <div className="grow flex flex-col justify-between">{children}</div>
    </div>
  </div>
);
