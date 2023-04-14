import Image from "next/image";

export const Photo = () => {
  return (
    <div>
      <Image className="w-24 md:w-32 h-24 md:h-32 rounded-full" src="/sebastian.jpeg" alt="sebastian" width={200} height={200} />
    </div>
  );
};
