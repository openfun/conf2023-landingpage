import { Button } from "components/Button";
import { AnchorHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";
import { Part } from "components/Part";
import { LargeCard, SmallCard } from "@/components/Cards";

const padding = "px-5 md:px-0 ";
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
  <div className="hero relative h-[770px]">
    <div
      className="mx-12 xl:max-w-7xl xl:mx-auto"
      style={{ border: "0px blue solid" }}
    >
      <div
        className={`font-bold inline-block px-8 relative top-[93px] ${gradient}`}
      >
        <h1 className="text-6xl">
          La Conférence <br />
          IA & Éducation
        </h1>
        <h2 className="text-3xl mt-20">8 & 9 Juin 2023</h2>
        <h2 className="text-xl font-medium">au Dock B · Paris Pantin</h2>

        <ul className="text-base font-semibold mt-6">
          <li>Rencontres & Débats</li>
          <li>Présentations & Tables rondes</li>
          <li>Lightning talks</li>
          <li>Prompt party</li>
          <li>Roadmap IA pour l'ESR</li>
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
      <h3 className="text-2xl font-bold text-fun-orange-700">
        L’intelligence artificielle bouleverse notre rapport à la connaissance
        et aux autres
      </h3>
      <p className="text-xl font-semibold mt-4">
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
        Les 8 et 9 Juin 2023 répondons à ces questions ensemble !
      </p>
      <div className="mt-20">
        <BookButton />
      </div>
    </ContentSection>
    <ContentSection className="bg-fun-grey-200">
      <Part title="Le lieu">
        <a href="https://dockbpantin.com/" target="_blank" rel="noreferrer">
          <img
            src="place.jpg"
            alt="Lieu de la conférence"
            className="h-80 w-full drop-shadow-md rounded hover:drop-shadow-2xl transition-all object-cover"
          />
        </a>
        <h3 className="text-center mt-8 text-2xl font-extrabold">
          Dock B - Pantin
        </h3>
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
        title="Présentations & Tables Rondes"
        imageUrl="watercolor.png"
      >
        <p className="font-light mb-8">
          Venez écouter les experts du domaine sur la scène du Dock B. Ils
          partagerons leur
          <br /> vision et leurs expériences.
        </p>
        <SecondaryButton>Je veux participer</SecondaryButton>
      </LargeCard>
      <div className="flex gap-16 my-16">
        <SmallCard
          title="Prompt Party"
          imageUrl="party.png"
          imageAlt="Illustration de fête"
        >
          <p className="font-light mb-8">
            Venez partager vos meilleurs prompts et apprendre des experts qui
            seront présents sur place à travers des ateliers collaboratifs !
          </p>
          <SecondaryButton>Je veux participer</SecondaryButton>
        </SmallCard>
        <SmallCard title="Lightning Talks">
          <p className="font-light mb-8">
            Vous utilisez l’IA dans vos cours ou pour mieux apprendre ? Vous
            avez fait un PoC en rapport avec l’IA ? On vous passe le micro
            pendant 10 minutes !
          </p>
          <SecondaryButton>Proposer un talk</SecondaryButton>
        </SmallCard>
      </div>
      <div className="flex gap-16 my-16">
        <SmallCard title="Rencontres & Débats">
          <p className="font-light mb-8">
            Le Dock B en bord de Seine met  à disposition sa terrasse et ses
            espaces conviviaux pour vous permettre d’échanger de nous
            rencontrer.
          </p>
        </SmallCard>
        <SmallCard title="Roadmap ESR">
          <p className="font-light mb-8">
            Définissons ensemble une ambition pour l’éducation de demain. De
            quels services avons-nous besoin ? Et quels moyens devons nous
            mobiliser pour relever ces défis ?
          </p>
        </SmallCard>
      </div>
      <LargeCard title="Posters & Stands">
        <p className="font-light mb-8">
          Des chercheurs présentant leurs travaux et des startups EdTech
          présentant leur approche de l'IA et de l'éducation.
        </p>
      </LargeCard>
    </ContentSection>
    <ContentSection className="bg-white">
      <div className="flex justify-center gap-24 mb-10">
        <img
          src="logo.png"
          alt="Logo de France Université Numérique"
          className="h-24"
        />
        <img
          src="logomin.png"
          alt="Logo du Ministère de l'Enseignement Supérieur et de la Recherche"
          className="h-24"
        />
      </div>
      <div className="flex justify-center my-10">
        <SecondaryButton className="mx-auto" href="#">
          Devenir Sponsor
        </SecondaryButton>
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
    <div className={`flex justify-center py-16 ${padding} ${className}`}>
      <div className="lg:w-[1024px] px-4 " {...props}>
        {children}
      </div>
    </div>
  );
};

const BookButton = () => (
  <Button
    href="https://weezevent.com/fr/"
    target="_blank"
    className="bg-gradient-to-r from-fun-orange-700 to-fun-orange-800"
  >
    Réserver ma place
  </Button>
);

const SecondaryButton = ({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Button className={`bg-fun-black-400 ${className}`} {...props} />
);
