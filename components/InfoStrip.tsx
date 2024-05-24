import Image from "next/image";

interface IInfoStrip_Props {
  label: string;
  icons: string[];
}

export const InfoStrip = ({ label, icons }: IInfoStrip_Props) => {
  return (
    <div className="flex h-16 w-full max-w-md border-b border-[#dbdee1]">
      <div className="flex gap-x-1.5 h-full items-center justify-start w-1/2">
        {/* icons */}
        {icons.map((ic) => (
          <span className="flex relative h-12 aspect-square">
            <Image src={ic} alt={ic} fill />
          </span>
        ))}
      </div>
      <div className="h-full items-center justify-start w-1/2">{label}</div>
    </div>
  );
};
