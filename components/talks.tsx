import { Part } from "components/Part";
import { ContentSection } from "pages/index";
import { LUC_JULIA } from "components/speakers";
import Image from "next/image";

export const Talks = () => {
  return (
    <ContentSection className="bg-white">
      <div className="mb-16">
        <Keynote />
      </div>
      <RoundTables />
      <div className="pt-16">
        <SimpleTalks />
      </div>
    </ContentSection>
  );
};

const Keynote = () => {
  return (
    <>
      <div className="hidden md:flex bg-fun-grey-200 p-10 items-center gap-8 text-left">
        <Image
          src={"/speakers/" + LUC_JULIA.imageUrl}
          alt={"Photo de " + LUC_JULIA.name + " " + LUC_JULIA.lastName}
          width={120}
          height={120}
          className="rounded-full h-[120px] w-[120px] object-cover"
        />
        <div>
          <div className="text-3xl font-extrabold text-fun-black-500 mb-2">
            <div>
              Keynote par{" "}
              <span className="whitespace-nowrap">
                {LUC_JULIA.name} {LUC_JULIA.lastName}
              </span>
            </div>
          </div>
          <div className="font-bold text-lg md:text-xl text-fun-grey-700">
            L'intelligence artificielle n'existe pas.
          </div>
        </div>
      </div>
      <div className="flex md:hidden bg-fun-grey-200 p-4 items-center gap-2 text-center flex-col">
        <div className="text-3xl font-extrabold text-fun-black-500 mb-2">
          <div>
            Keynote par{" "}
            <span className="whitespace-nowrap">
              {LUC_JULIA.name} {LUC_JULIA.lastName}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={"/speakers/" + LUC_JULIA.imageUrl}
            alt={"Photo de " + LUC_JULIA.name + " " + LUC_JULIA.lastName}
            width={56}
            height={56}
            className="rounded-full h-[56px] w-[56px] object-cover"
          />
          <div className="font-bold text-base md:text-xl text-fun-grey-700 text-left">
            L'intelligence artificielle n'existe pas.
          </div>
        </div>
      </div>
    </>
  );
};

export const RoundTables = () => {
  const talks = [
    {
      title:
        "Impact de l'IA sur l'enseignement supérieur : est-on face à un changement de paradigme ?",
    },
    {
      title:
        "Quels sont les enjeux éthiques à l'utilisation de l'IA dans l'éducation ?",
    },
    {
      title:
        "IA et éducation : quelles transformations des outils pédagogiques",
    },
    {
      title: "Quelle feuille de route IA pour l'enseignement supérieur ?",
    },
    {
      title: "Les droits d'auteur sont-ils menacés par l'IA générative ?",
    },
  ];
  return (
    <Part title="Les tables rondes">
      <div className="flex flex-col gap-2">
        {talks.map((talk, index) => (
          <TalkCard talk={talk} key={index} />
        ))}
      </div>
    </Part>
  );
};

export const SimpleTalks = () => {
  const talks = [
    {
      title: "Démystifier l'IA générative",
    },
    {
      title: "ChatGPT et la protection des données personnelles vu de la CNIL",
    },
    {
      title:
        "L'IA générative est-elle compatible avec le changement climatique ?",
    },
    {
      title: "La transcription automatique en 99 langues",
    },
    {
      title: "BigBlueButton, une classe virtuelle augmentée grâce à l'IA",
    },
  ];
  return (
    <Part title="Les présentations">
      <div className="flex flex-col gap-2">
        {talks.map((talk, index) => (
          <TalkCard talk={talk} key={index} />
        ))}
      </div>
    </Part>
  );
};

const TalkCard = ({ talk }: { talk: { title: string } }) => {
  return (
    <div className="bg-fun-grey-200 px-6 md:px-10 py-3 md:py-5 border-l-fun-grey-300 border-l-4 text-left">
      <div className="font-bold text-sm md:text-base text-fun-grey-700">
        {talk.title}
      </div>
    </div>
  );
};
