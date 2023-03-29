import { Button } from "components/Button";
import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";
import { Part } from "components/Part";
import { LargeCard, SmallCard } from "@/components/Cards";

const gradient =
  "bg-clip-text bg-gradient-to-r from-white to-fun-orange-500 text-transparent";

export default () => {
  return (
    <>
      <Container>
        <Hero />
        <Content />
      </Container>
      <Footer />
    </>
  );
};

const Hero = () => (
  <div className="hero relative overflow-hidden lg:h-[770px] bg-black">
    <div className="hero-responsive lg:hidden">
      <img
        src="header_gradient.webp"
        alt="Illustration d'un homme et d'un robot se regardant"
      />
    </div>
    <div
      className="lg:mx-12 xl:max-w-7xl xl:mx-auto"
      style={{ border: "0px blue solid" }}
    >
      <div
        className={`font-bold inline-block pt-4 pb-20 px-4 lg:pt-0 lg:pb-0 lg:px-8 relative lg:top-[93px] ${gradient}`}
      >
        <h1 className="text-4xl lg:text-6xl">
          La Conférence <br />
          IA & Éducation
        </h1>
        <h2 className="text-xl lg:text-3xl mt-10 lg:mt-20">8 & 9 juin 2023</h2>
        <h2 className="text-base font-medium">au Dock B · Paris Pantin</h2>

        <ul className="text-base font-semibold mt-6">
          <li>Rencontres & débats</li>
          <li>Présentations & tables rondes</li>
          <li>Lightning talks</li>
          <li>Prompt party</li>
        </ul>
        <div className="mt-6">
          <BookButton />
        </div>
      </div>
    </div>
  </div>
);
const Content = () => (
  <>
    <ContentSection className="bg-white text-center">
      <h3 className="text-xl lg:text-2xl font-bold text-fun-orange-700">
        L’intelligence artificielle bouleverse notre rapport à la connaissance
        et aux autres
      </h3>
      <p className="text-base lg:text-xl font-semibold mt-4">
        Cette innovation présente des enjeux techniques, éthiques, de
        souveraineté et plus encore. <br />
        <br />
        Les questions sont posées.{" "}
        <span className="text-fun-orange-700">Comment</span> doit réagir le
        monde de l'éducation ?{" "}
        <span className="text-fun-orange-700">Que faut-il</span> pour impulser
        une dynamique ?{" "}
        <span className="text-fun-orange-700">Pouvons-nous</span> penser ce
        progrès ou sommes-nous condamnés à le subir ?
        <br />
        <br />
        Les 8 et 9 juin 2023 répondons à ces questions ensemble !
      </p>
      <div className="mt-20">
        <BookButton />
      </div>
    </ContentSection>
    <ContentSection className="bg-fun-grey-200 text-center">
      <Part title="Le lieu">
        <a href="https://dockbpantin.com/" target="_blank" rel="noreferrer">
          <img
            src="place.webp"
            alt="Lieu de la conférence"
            className="h-80 w-full drop-shadow-md rounded hover:drop-shadow-2xl transition-all object-cover"
          />
        </a>
        <h3 className="text-center mt-8 text-2xl font-extrabold">
          Dock B - Pantin
        </h3>
        <p className="font-light mt-4">
          Dock B en bord de Seine met à disposition sa terrasse et ses espaces
          conviviaux pour accueillir cet événement et nous permettre d’échanger
          de nous rencontrer.
        </p>
        <h3 className="text-center pt-2 text-gray-600">
          1 place de la pointe, 93500 Pantin
        </h3>
        <div className="flex justify-center pt-2">
          <a
            href="https://dockbpantin.com/pratique/"
            className="font-semibold underline text-gray-600"
            target="_blank"
            rel="noreferrer"
          >
            Voir les infos pratiques
          </a>
        </div>
      </Part>
    </ContentSection>
    <ContentSection className="bg-white text-center">
      <LargeCard
        title="Rencontres & débats"
        imageUrl="people.webp"
        imageAlt="Illustration aquarelle d'une femme et d'un robot"
      >
        <p className="font-light">
          Définissons ensemble une ambition pour l'éducation de demain. De quels
          services avons-nous besoin ? Et quels moyens devons-nous mobiliser
          pour relever ces défis ?
        </p>
      </LargeCard>
      <div className="flex flex-col gap-16 my-16 lg:flex-row">
        <SmallCard
          title="Prompt party"
          imageUrl="party.webp"
          imageAlt="Illustration de fête"
        >
          <p className="font-light mb-8">
            Venez-vous initier à rédiger des prompts avec ChatGPT, Midjourney
            etc ... Partagez vos meilleurs prompts et apprenez des experts
            présents sur place.
          </p>
          <SecondaryButton>Je veux participer</SecondaryButton>
        </SmallCard>
        <SmallCard title="Présentations flash">
          <p className="font-light mb-8">
            Vous utilisez l’IA dans vos cours ? Vous avez réalisé des
            expérimentations en rapport avec l’IA ? La parole est à vous pour 10
            minutes top chrono !
          </p>
          <SecondaryButton>Proposer une présentation</SecondaryButton>
        </SmallCard>
      </div>
      <div className="flex flex-col gap-16 my-16 lg:flex-row">
        <SmallCard title="Présentations & tables rondes">
          <p className="font-light mb-8">
            Venez écouter les experts du domaine sur la scène du Dock B. Ils
            partageront leur vision et leurs expériences.
          </p>
          <SecondaryButton>Proposer une présentation</SecondaryButton>
        </SmallCard>
        <SmallCard title="Posters & stands">
          <p className="font-light mb-8">
            Des chercheurs présentent leurs travaux et des startups EdTech
            exposent leur approche de l'IA et de l'éducation
          </p>
          <SecondaryButton>Contactez-nous</SecondaryButton>
        </SmallCard>
      </div>
    </ContentSection>
    <ContentSection className="bg-white">
      <div className="flex justify-center gap-4 mb-10 h-28 px-4">
        <a
          href="https://www.france-universite-numerique.fr/"
          target="_blank"
          rel="noreferrer"
          className="w-1/2 flex justify-center"
        >
          <img
            src="logo.png"
            alt="Logo de France Université Numérique"
            className="object-contain"
          />
        </a>
      </div>
    </ContentSection>
  </>
);

const Footer = () => (
  <div className="text-center">
    <div className="bg-fun-black-900 h-36 text-white flex flex-col items-center justify-center px-4">
      <div>
        <a
          href="https://www.france-universite-numerique.fr/"
          target="_blank"
          className="font-semibold"
          rel="noreferrer"
        >
          France Université Numérique
        </a>{" "}
        | Illustrations par{" "}
        <a
          href="https://www.midjourney.com/"
          target="_blank"
          className="font-semibold"
          rel="noreferrer"
        >
          MidJourney
        </a>
      </div>
      <div>Copyright © 2023</div>
    </div>
  </div>
);

const Container = ({ children }: PropsWithChildren) => (
  <div className="text-center lg:text-left">{children}</div>
);

const ContentSection = ({
  children,
  className,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`overflow-hidden flex justify-center py-16 ${className}`}>
      <div className="w-full lg:w-[1024px] px-4" {...props}>
        {children}
      </div>
    </div>
  );
};

const BookButton = () => (
  <Button className="bg-gradient-to-r from-fun-orange-700 to-fun-orange-800 text-sm cursor-not-allowed opacity-50">
    Réserver ma place ( bientôt )
  </Button>
);

const SecondaryButton = ({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Button
    className={`bg-fun-black-400 text-sm ${className}`}
    href="https://fun-mooc.limequery.com/953845?newtest=Y&lang=fr"
    target="_blank"
    {...props}
  />
);
