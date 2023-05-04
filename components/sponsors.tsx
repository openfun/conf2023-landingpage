import { Part } from "components/Part";
import Image from "next/image";
import { ContentSection } from "pages";

export const Sponsors = () => (
  <ContentSection>
    <Part title="Avec la participation de">
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-fun-grey-200 p-10">
          <div className="font-bold text-center mb-10">Paris Digital Lab</div>
          <Image
            src="/sponsors/cs.png"
            alt="Logo de CentraleSupélec"
            width={530}
            height={200}
            className="object-contain h-[100px] m-auto"
          />
          <div className="font-light text-center mt-10">
            Démos d'applications de ChatGPT et LangchainAI à l'éducation. Prompt
            Party.
          </div>
        </div>
      </div>
    </Part>
  </ContentSection>
);
