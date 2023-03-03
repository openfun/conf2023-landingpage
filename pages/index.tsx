import { Button } from "components/Button";
import { PropsWithChildren } from "react";

const gradient =
  "text-transparent bg-clip-text bg-gradient-to-r from-fun-blue-500 to-fun-blue-200";

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
  <div className="px-5 md:px-0 text-center md:text-left">{children}</div>
);

const Hero = () => (
  <div className="flex flex-col-reverse md:flex-row md:items-center md:px-28 w-full md:max-w-screen-2xl mx-auto mt-6">
    <div className="basis-1/2">
      <h1
        className={`font-extrabold text-4xl md:text-5xl break-words ${gradient}`}
      >
        Intelligence Artificielle et Éducation
      </h1>
      <h2 className="font-semibold text-2xl mt-4">Conférence Annuelle</h2>
      <h2 className="font-semibold text-xl">8 et 9 Juin 2023</h2>
      <p className="mt-4 text-gray-600">
        France Université Numérique est un groupement d’intérêt public au
        service de ses membres et partenaires. Nous fédérons un réseau
        d'universités, d'écoles, d'instituts de recherche, d'agences
        gouvernementales, d'entreprises edtech et de contributeurs qui se
        consacrent à la construction de services numériques souverains pour
        l'éducation.
      </p>
      <div className="mt-4 flex justify-center md:block">
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

const Content = () => (
  <div className="mx-auto md:w-[720px] pb-8">
    <Part title="À propos">
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus
        magna a dolor gravida vehicula. Fusce ultricies mollis purus ut
        lobortis. Fusce pulvinar venenatis varius. Vivamus dapibus lorem odio,
        nec dictum turpis scelerisque commodo. Vivamus dignissim nulla at
        pretium iaculis. Etiam dapibus enim ac interdum tincidunt.
        <br />
        <br />
        Duis at luctus erat, at venenatis sapien. Ut lacus tortor, sodales et
        turpis a, posuere consectetur neque. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Duis
        vulputate tincidunt orci eget fermentum. Nam nisi tortor, pharetra in
        tincidunt vel, pellentesque et odio.
        <br />
        <br />
        Aenean eget leo sed nisl molestie malesuada vitae vitae leo. Cras eget
        purus et eros egestas sollicitudin at in leo. Pellentesque sodales lacus
        egestas ullamcorper laoreet. Etiam quis fermentum purus. Aenean
        condimentum dolor leo, vulputate ullamcorper sapien commodo eget.
      </p>
    </Part>
    <Part title="Le lieu">
      <a href="https://dockbpantin.com/" target="_blank" rel="noreferrer">
        <img
          src="place.jpg"
          alt="Lieu de la conférence"
          className="h-80 w-full drop-shadow-md rounded hover:drop-shadow-2xl transition-all object-cover"
        />
      </a>
      <h3 className="text-center mt-8 text-4xl font-extrabold">
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
    <Part title="Agenda">
      <h3 className="text-center font-semibold text-gray-400 text-xl">
        Prochainement
      </h3>
    </Part>
    <div className="mt-32 flex justify-center">
      <BookButton />
    </div>
  </div>
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
        Conçu par{" "}
        <a
          href="https://www.linkedin.com/in/nathanvss/"
          target="_blank"
          className="font-semibold"
          rel="noreferrer"
        >
          Nathan Vasse
        </a>{" "}
        pour{" "}
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
  <div className="mt-16">
    <h2 className={`text-4xl font-extrabold text-center mb-8 ${gradient}`}>
      {props.title}
    </h2>
    {props.children}
  </div>
);
