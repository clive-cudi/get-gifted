import { Button } from "antd";
import { GiftCardPoster } from "./GiftCardPoster";

interface IBrandCard {
  image: string;
  title: string;
  description: string;
  price: {
    from: number;
    to: number;
  };
}

export const BrandCard = ({ image, title, description, price }: IBrandCard) => {
  return (
    <div className="flex flex-col h-96 w-64 gap-y-3.5">
      <GiftCardPoster imageURL={image} variant="sm" />
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="text-sm font-medium">{description}</p>
      <span className="text-xs text-[#9b9b99]">
        From ${price.from} to ${price.to}
      </span>
      <Button className="rounded-full bg-transparent border border-black w-fit h-11 hover:bg-black hover:text-white">
        Buy
      </Button>
    </div>
  );
};
