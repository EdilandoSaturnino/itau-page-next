import { Container } from "./Container";

import PhoneIcon from "@/assets/icon-phone.svg";
import SoluctionsIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";

import PhoneImage from "@/assets/phone.png";

import { ItemSectionService } from "./ItemSectionService";
import Image from "next/image";

export function SectionServices() {
  const services = [
    {
      icon: PhoneIcon,
      description:
        "Acompanhar sua conta, fazer transferências e pagamentos de onde estiver",
      id: 1,
    },
    {
      icon: SoluctionsIcon,
      description:
        "Soluções de empréstimos e renegociação para organizar suas finanças",
      id: 2,
    },
    {
      icon: OptionsIcon,
      description:
        "Diversas opções de investimentos, de acordo com o seu perfil de investidor",
      id: 3,
    },
    {
      icon: CardIcon,
      description:
        "Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.",
      id: 4,
      className: "border-none pb-0"
    }
    
  ];

  return (
    <section className="w-full h-[965px] relative">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="text-primary-orange text-sm font-bold uppercase mb-9 block">
            serviços exclusivos
          </span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[556px] mb-16 text-txt-gray">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </p>
          <ul className="flex flex-col items-start gap-9">
            {services.map((item, key) => {
              return (
                <ItemSectionService
                  icon={item.icon}
                  description={item.description}
                  key={item.id}
                  className={item.className}
                />
              );
            })}
          </ul>
        </div>
      </Container>
      <div className="absolute top-0 right-0 h-full w-[32%] bg-gray-phone flex items-center">
        <Image src={PhoneImage} alt="Phone" className="translate-x-[-50px]" />
      </div>
    </section>
  );
}
