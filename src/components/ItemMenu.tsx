import Image from "next/image";
import ArrowDown from "@/assets/arrow-down.svg";

type IItemMenuProps = {
  name: string;
  
}

export function ItemMenu({name} : IItemMenuProps) {
  return (
    <button className="flex items-center gap-3">
      <span className="text-white font-bold">{name}</span>
      <Image src={ArrowDown} alt="" />
    </button>
  );
}
