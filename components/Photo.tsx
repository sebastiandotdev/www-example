import Image from "next/image";

export const Photo = () => {
  return (
    <div>
      <Image className="w-24 md:w-32 h-24 md:h-32 rounded-full" src="https://i.postimg.cc/Hkk5ThFL/Whats-App-Image-2023-04-13-at-11-05-29-AM.jpg" alt="sebastian" width={200} height={200} />
    </div>
  );
};
