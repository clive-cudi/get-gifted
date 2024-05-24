import { ReactElement } from "react";

interface IBrandCategoryCard_Props {
  icon: ReactElement;
  title: string;
  onClick: () => void;
}

export const BrandCategoryCard = ({
  icon,
  title,
  onClick,
}: IBrandCategoryCard_Props) => {
  return (
    <div className="flex flex-col h-36 w-fit min-w-28 bg-[#f9f4e8] p-6 rounded-2xl justify-between">
      <span className="relative h-12 aspect-square">{icon}</span>
      <p className="text-sm">{title}</p>
    </div>
  );
};
