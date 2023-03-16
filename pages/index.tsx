import { Button } from "components/Button";
import { HTMLAttributes, PropsWithChildren } from "react";

const padding = "px-5 md:px-0 ";

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

const Container = ({ children }: PropsWithChildren) => (
  <div className="text-center md:text-left">{children}</div>
);

const Hero = () => (
  <div
    className={`flex flex-col-reverse md:flex-row md:items-center md:px-28 w-full md:max-w-screen-2xl mx-auto mt-20 ${padding}`}
  >
    <div className="basis-1/2">
      <h1 className="font-extrabold text-4xl md:text-4xl break-words text-fun-blue-500">
        <span className="break-keep whitespace-nowrap">L'IA en action :</span>
        <br />
        comment transformer l'éducation pour demain ?
      </h1>
      <h2 className="font-semibold text-2xl mt-4">Conférence annuelle</h2>
      <h2 className="font-semibold text-xl">8 et 9 juin 2023</h2>
      <p className="mt-4 text-gray-600">
        L'éducation est l'un des domaines les plus passionnants de notre société
        et l'intelligence artificielle (IA) est en train de changer la donne en
        matière de méthodes d'apprentissage et de pédagogie. France Université
        Numérique, qui se situe au croisement de l’enseignement supérieur et des
        acteurs de l’innovation numérique et technologique, organise cet
        événement pour faire un point sur ce sujet grâce à un groupe d'experts
        de premier plan afin de discuter des dernières tendances et innovations.
      </p>
      <div className="mt-6 flex justify-center md:block">
        <BookButton />
      </div>
    </div>
    <div className="basis-1/2">
      <img
        src="main.png"
        alt="Logo de la conférence"
        className="h-[300px] md:h-auto mx-auto md:m-0 object-cover"
      />
    </div>
  </div>
);

const ContentSection = ({
  children,
  className,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`flex justify-center py-16 ${padding} ${className}`}>
      <div className="md:w-[720px] " {...props}>
        {children}
      </div>
    </div>
  );
};

const Content = () => (
  <>
    <ContentSection>
      <Part title="À propos">
        <p className="text-gray-600">
          Depuis quelque mois, l'arrivée de nouveaux outils basés sur l'usage de
          l'intelligence artificielle pose question dans le domaine éducatif en
          général et dans l’enseignement supérieur en particulier. Comment
          fonctionnent-ils réellement ? Quels seront les usages qui peuvent en
          découler dès maintenant ? Comment anticiper les transformations
          éducatives à venir ? Quels sont leurs impacts sur un déroulé
          pédagogique et sur les modalités d'examen ? Faut-il les interdire
          purement et simplement ou doit-on les intégrer dans les activités de
          formation ?
          <br />
          <br />
          Toutes ces questions et bien d’autres encore ont pour ambition d’être
          abordées avec sérénité et lucidité afin d’anticiper l’impact que va
          avoir l’usage de l’Intelligence Artificielle (IA) dans l’enseignement
          de demain.
        </p>
      </Part>
    </ContentSection>
    <ContentSection className="bg-fun-grey-100">
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
    <ContentSection>
      <Part title="Programme">
        <h3 className="text-center font-semibold text-gray-400 text-xl">
          Prochainement
        </h3>
      </Part>
    </ContentSection>
    <ContentSection className="bg-fun-grey-100">
      <Part title="Qui sommes-nous ?">
        <p className="text-gray-600">
          France Université Numérique est un groupement d’intérêt public au
          service de ses membres et partenaires. Nous fédérons un réseau
          d'universités, d'écoles, d'instituts de recherche, d'agences
          gouvernementales, d'entreprises edtech et de contributeurs qui se
          consacrent à la construction de services numériques souverains pour
          l'éducation.
        </p>
      </Part>
    </ContentSection>
    <ContentSection>
      <div className="mt-14 flex justify-center">
        <BookButton />
      </div>
    </ContentSection>
  </>
);

const BookButton = () => (
  <Button href="https://weezevent.com/fr/" target="_blank">
    Réserver ma place
  </Button>
);

const Footer = () => (
  <div className="mt-64 text-center">
    <div className="flex justify-center absolute bottom-0 left-0 right-0 -z-10">
      <img
        src="footer.png"
        alt="Illustration diverse"
        className="footer__image object-cover h-[550px]"
      />
    </div>

    <div className="bg-fun-blue-900 h-36 text-white flex flex-col items-center justify-center px-4">
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

const Part = (props: { title: string } & PropsWithChildren) => (
  <div>
    <h2 className="text-4xl font-extrabold text-center mb-8 text-fun-blue-500">
      {props.title}
    </h2>
    {props.children}
  </div>
);
