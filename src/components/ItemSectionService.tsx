import Image from "next/image";

type IItemSectionService = {
  icon: string;
  description: string;
  className?: string;
};

export function ItemSectionService({ icon, description, className }: IItemSectionService) {
  return (
    <li className={`flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray ${className}`}>
      <div className="w-7 h-7 flex items-center justify-center ">
        <Image src={icon} alt="" />
      </div>
      <p className="flex-1 text-txt-gray pr-2">{description}</p>
    </li>
  );
}
