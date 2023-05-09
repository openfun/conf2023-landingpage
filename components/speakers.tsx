import { Part } from "components/Part";
import Image from "next/image";
import { ContentSection } from "pages/index";

export const LUC_JULIA = {
  name: "Luc",
  lastName: "Julia",
  title:
    "Co-créateur de Siri avec Adam Sawer et Chief Scientific Officer de Renault Group",
  imageUrl: "luc_julia.jpg",
};

export const Speakers = () => {
  const speakers = [
    {
      name: "Mireille",
      lastName: "Brangé",
      title:
        "Coordinatrice nationale de la stratégie d'accélération pour l'enseignement et le numérique",
      company: "Secrétariat général pour l'investissement",
      imageUrl: "mireille_brange.jpeg",
    },
    {
      name: "Jean-Michel",
      lastName: "Bruguière",
      title:
        "Professeur à l'université Grenoble-Alpes, Directeur du Centre universitaire d’enseignement et de recherche en propriété intellectuelle, Avocat of Counsel au cabinet Deprez Guignot & Associés",
      imageUrl: "jean_michel_bruguiere.jpg",
    },
    LUC_JULIA,
    {
      name: "Laurent",
      lastName: "Daudet",
      title: "Directeur Général et co-fondateur",
      company: "LightOn",
      imageUrl: "laurent_daudet.jpg",
    },
    {
      name: "Carlos",
      lastName: "Muñoz Ferrandis",
      title: "Tech & Regulatory Affairs Counsel",
      company: "Hugging Face",
      imageUrl: "carlos_munoz_ferrandis.jpeg",
    },
    {
      name: "Alain",
      lastName: "Goudey",
      title: "Directeur Général Adjoint en charge du numérique",
      company: "NEOMA Business School",
      imageUrl: "alain_goudey.jpeg",
    },
    {
      name: "Pierre-Carl",
      lastName: "Langlais",
      title: "Directeur de la recherche",
      company: "OpSci",
      imageUrl: "pierre_carl_langlais.jpeg",
    },
    {
      name: "Alexis",
      lastName: "Léautier",
      title: "Ingénieur expert",
      imageUrl: "alexis_leautier.jpg",
      company: "CNIL",
    },
    {
      name: "Arthur",
      lastName: "Millerand",
      title:
        "Avocat associé du cabinet Parallel Avocats, expert du numérique et des nouvelles technologies",
      imageUrl: "arthur_millerand.png",
    },
    {
      name: "Tristan",
      lastName: "Nitot",
      title: "Expert numérique responsable",
      company: "OCTO Technology",
      imageUrl: "tristan_nitot.jpeg",
    },
    {
      name: "Gilles",
      lastName: "Roussel",
      title:
        "Président de l’Université Gustave Eiffel, Référent numérique à France Universités",
      imageUrl: "gilles_roussel.jpg",
    },
    {
      name: "Raja",
      lastName: "Chatila",
      title:
        "Professeur émérite d'intelligence artificielle et d'éthique des technologies à Sorbonne Université, Membre du Comité national pilote d'éthique du numérique (CNPEN)",
      imageUrl: "raja_chatila.jpeg",
    },
    {
      name: "Giada",
      lastName: "Pistilli",
      title: "Responsable de l’éthique",
      company: "Hugging Face",
      imageUrl: "giada_pistilli.jpg",
    },
    {
      name: "Vanda",
      lastName: "Luengo",
      title: "Professeure en informatique",
      company: "Laboratoire LIP6, Sorbonne Université",
      imageUrl: "vanda_luengo.png",
    },
    {
      name: "Catherine",
      lastName: "Tessier",
      title:
        "Chercheuse et Référente intégrité scientifique et éthique de la recherche (ONERA - The French Aerospace Lab), Membre du Comité national pilote d'éthique du numérique (CNPEN)",
      imageUrl: "catherine_tessier.png",
    },
    {
      name: "Sophie",
      lastName: "Pène",
      title:
        "Professeure émérite en sciences de l'information et de la communication, ancienne vice-présidente du Conseil national du numérique, chercheuse au laboratoire DICEN-IdF",
      company: "Université Paris Cité",
      imageUrl: "sophie_pene.jpg",
    },
    {
      name: "Jean-Louis",
      lastName: "Quéguiner",
      title: "Fondateur de Gladia.io ex-directeur IA et big data d'OVH",
      imageUrl: "jean_louis_queguiner.jpeg",
    },
    {
      name: "Wandrille",
      lastName: "Bonnet",
      title: "Directeur Produit",
      company: "Wooclap",
      imageUrl: "wandrille_bonnet.jpg",
    },
    {
      name: "Fabrice",
      lastName: "Epelboin",
      title:
        "Entrepreneur français, spécialiste des médias sociaux et du web social",
      imageUrl: "fabrice_epelboin.jpeg",
    },
    {
      name: "Fred",
      lastName: "Dixon",
      title: "Co-fondateur de BigBlueButton",
      imageUrl: "fred_dixon.jpeg",
    },
    {
      name: "Jean-Marc",
      lastName: "Deltorn",
      title:
        "Chercheur au Centre d’études internationales de la propriété intellectuelle (CEIPI), responsable scientifique du DU Intelligence artificielle et propriété intellectuelle",
      company: "Université de Strasbourg",
      imageUrl: "jean_marc_deltorn.jpeg",
    },
    {
      name: "Wassym",
      lastName: "Kalouache",
      title: "Co-fondateur et président",
      company: "Corolair",
      imageUrl: "wassym_kalouache.jpeg",
    },
    {
      name: "Bernard",
      lastName: "Quinio",
      title:
        "Directeur du service de formation continue et d'alternance et enseignant chercheur",
      company: "Université Paris Nanterre",
      imageUrl: "bernard_quinio.jpg",
    },
    {
      name: "David",
      lastName: "Cassagne",
      title:
        "Vice-Président délégué au Numérique pour la Formation à l'Université de Montpellier et Président de France Université Numérique",
      imageUrl: "david_cassagne.jpg",
    },
  ];
  speakers.sort((a, b) => a.lastName.localeCompare(b.lastName));
  return (
    <ContentSection className="bg-fun-grey-200">
      <Part title="Les intervenants">
        <div className="flex flex-wrap justify-center">
          {speakers.map((speaker, index) => (
            <Speaker key={index} speaker={speaker} />
          ))}
        </div>
      </Part>
    </ContentSection>
  );
};

const Speaker = ({
  speaker,
}: {
  speaker: {
    name: string;
    lastName: string;
    title: string;
    imageUrl: string;
    company?: string;
  };
}) => {
  return (
    <div className="flex flex-col items-center gap-2 w-1/2 md:w-1/4 text-center p-2 md:p-4">
      <Image
        src={"/speakers/" + speaker.imageUrl}
        alt={"Photo de " + speaker.name + " " + speaker.lastName}
        width={160}
        height={160}
        className="rounded-full h-[100px] w-[100px] md:h-[160px] md:w-[160px] object-cover"
      />
      <div className="font-bold text-lg">
        {speaker.name} {speaker.lastName}
      </div>
      <div className="font-light text-xs">{speaker.title}</div>
      {speaker.company && (
        <div className="font-light text-xs italic">{speaker.company}</div>
      )}
    </div>
  );
};
