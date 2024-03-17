import Image from "next/image";

import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";

import Logo from "@/assets/logo.svg";
import IconUser from "@/assets/icon-user.svg";
import { Container } from "./Container";

export function Header() {
  const names = [
    { name: "Para você", id: 1 },
    { name: "Para empresa", id: 2 },
    { name: "Serviços", id: 3 },
    { name: "Ajuda", id: 4 },
  ];

  return (
    <header className="flex items-center w-full h-20 bg-primary-orange">
      <Container>
        <div className="flex flex-1 justify-between items-center">
          <div className="flex items-center gap-14 ">
            <Image src={Logo} alt="Logo do Itau" />
            <ul>
              <li className="flex gap-4">
                {names.map((items, key) => {
                  return <ItemMenu name={items.name} key={items.id} />;
                })}
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Search />
      <button className="flex items-center gap-4 bg-primary-blue h-[80px] px-10">
        <Image src={IconUser} alt="Icone de usuário" />
        <span className="text-white font-bold">Acessar conta</span>
      </button>
    </header>
  );
}
