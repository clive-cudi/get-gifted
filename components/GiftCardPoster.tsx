import Image from "next/image";

interface IGiftCardPosterProps {
  imageURL: string;
  variant?: "xl" | "sm";
}

export const GiftCardPoster = ({
  imageURL,
  variant = "sm",
}: IGiftCardPosterProps) => {
  return (
    <div
      className={`max-h-75 max-w-98 w-full ${
        variant === "xl" && "h-80 rounded-large"
      } ${
        variant === "sm" && "h-44 rounded-3xl"
      } border-solid border border-[#dbdee1] relative`}
    >
      {imageURL && (
        <Image
          src={imageURL}
          alt="@poster"
          fill
          className={`${variant == "xl" && "rounded-large"} ${
            variant == "sm" && "rounded-3xl"
          } object-cover`}
        />
      )}
    </div>
  );
};
