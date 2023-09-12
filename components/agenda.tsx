import { ContentSection } from "pages";
import { Part } from "components/Part";
import ReactMarkdown from "react-markdown";

export interface AgendaSlot {
  title: string;
  description?: string;
  tags: {
    name: string;
    color: string;
  }[];
  start: string;
  end: string;
  break?: boolean;
  videoUrl?: string;
  file?: string;
}

const TAG_HALL = {
  name: "Hall",
  color: "bg-fun-blue-500",
};
const TAG_ESQUIVE = {
  name: "Salle Esquive",
  color: "bg-fun-orange-800",
};
const TAG_CARRE = {
  name: "Salle Le Carré",
  color: "bg-green-700",
};

/**
 * FRIDAY 9TH.
 */

export const SLOT_DROITS_DAUTEUR = {
  title: "Les droits d'auteur sont-ils menacés par l'IA générative ?",
  description: `
Table ronde animée par **Marie Soulez**, Avocate du cabinet Lexing Alain Bensoussan Avocats, spécialisée en droit de la propriété intellectuelle, directrice du département contentieux de la propriété intellectuelle.
- **Jean-Michel Bruguière**, Professeur à l'université Grenoble-Alpes, Directeur du Centre universitaire d’enseignement et de recherche en propriété intellectuelle, Avocat of Counsel au cabinet Deprez Guignot & Associés
- **Jean-Marc Deltorn**, Chercheur au Centre d’études internationales de la propriété intellectuelle (CEIPI), responsable scientifique du DU Intelligence artificielle et propriété intellectuelle à l'Université de Strasbourg
- **Pierre-Carl Langlais**, Directeur de la recherche chez OpSci
- **Arthur Millerand**, Avocat associé du cabinet Parallel Avocats, expert du numérique et des nouvelles technologies    
    `,
  start: "11:00",
  end: "12:30",
  tags: [TAG_ESQUIVE],
  videoUrl: "https://www.youtube.com/embed/fzScLOWX5B4",
  file: "Vendredi 9 11h Salle Esquive.zip",
};

export const SLOT_RETOURS_EXP_IA_PEDAGOGIE = {
  title: "Retours d'expériences autour de l'IA et de la pédagogie",
  description: `
Animation par **Sandrine Delacroix-Morvan**, responsable de communication de France Université Numérique
- Retours d'expériences sur l'utilisation de l'IA en cours de Français, **Claire Doz**, Enseignante de lettres à la Cité scolaire Paul Valéry  
- Comment utiliser les outils d'IA pour améliorer les cours de maths ? **Jean-François Caulier**, Vice président délégué stratégie et innovations numériques à l'université Paris 1 Panthéon Sorbonne    
- Comment l'IA nous oblige à repenser l'enseignement dans le supérieur ? **Bernard Quinio**, Directeur du Service Formation Continue & Alternance (SFCA) et enseignant chercheur à l' Université Paris Nanterre 
- IA générative et 3 dimensions de l'enseignement numérique du futur, **Serge Miranda**, Professeur Emérite d'Informatique à l' Université Côte d'Azur 
    `,
  start: "11:00",
  end: "12:30",
  tags: [TAG_CARRE],
  file: "Vendredi 9 11h Le Carre.zip",
  videoUrl: "https://www.youtube.com/embed/6c5VeUTBDg4",
};

export const SLOT_CAS_PRATIQUES = {
  title:
    "Cas pratiques d'utilisation de l'apprentissage machine dans l'éducation",
  description: `
- Personnalisation des apprentissages avec l’IA : exemple d’Adaptiv’Langue/EvidenceB, par **Catherine de Vulpillières**, GM & CIO cofondatrice EvidenceB
- A4LL, un système de learning analytics pour l'apprentissage du langage, par **Rémi Venant**, Enseignant-Chercheur en Informatique à Le Mans Université    
- Pas d'IA sans data. Vers des jeux de données libres et ouverts pour l'éducation, par **Julien Maupetit**, Responsable des données à France Université Numérique
- Données de l'État : de l'Open Data à l'IA, **Pierre-Étienne Devineau**, Data scientist à la DINUM
    `,
  start: "09:00",
  end: "10:30",
  tags: [TAG_CARRE],
  file: "Vendredi 9 9h Le Carre.zip",
  videoUrl: "https://www.youtube.com/embed/yK_5SRi3WRI",
};

export const SLOT_WORKSHOP = {
  title: "Workshop sur l'Enrichissement automatique de vidéos avec l'IA",
  description: ` 
Par le Paris Digital Lab de CentraleSupélec: **Antoine Vaglio**, **Mohammed Bahhad**, **Liwei Sun**, **Pierre-Louis Veyrenc**
    `,
  start: "14:00",
  end: "15:00",
  tags: [TAG_CARRE],
  file: "Vendredi 9 14h Le Carre.zip",
  videoUrl: "https://www.youtube.com/embed/WSHwnoTvg8k",
};

export const SLOT_FEUILLE_ROUTE = {
  title: "Vers une feuille de route pour l'enseignement supérieur",
  description: ` 
Table ronde animée par **Sophie Pène**, Professeure émérite en sciences de l'information et de la communication à Université Paris Cité, ancienne vice-présidente du Conseil national du numérique
- **Mireille Brangé**, Coordinatrice nationale de la stratégie d'accélération pour l'enseignement et le numérique au Secrétariat général pour l'investissement  
- **Gilles Roussel**, Président de l’Université Gustave Eiffel, Référent numérique à France Universités         
- **Bruno Sportisse**, Président-directeur général d'Inria
    `,
  start: "14:00",
  end: "15:30",
  tags: [TAG_ESQUIVE],
  videoUrl: "https://www.youtube.com/embed/gC4_oejOTXE",
};

export const SLOT_TRANSFORMATIONS_PRAGMATIQUES = {
  title: "Quelle transformation pragmatique des outils pédagogiques ?",
  description: `
- Introduction et animation par **Hervé Luga**, Vice Président Numérique de l'Université de Toulouse
- Créez des QCM & flashcards en quelques secondes grâce à Quiz Wizard, **Wandrille Bonnet**, Directeur Produit chez Wooclap
- Génération de quiz pour la formation en ligne, **Wassym Kalouache**, Co-fondateur et président de Corolair
- Intégration de quiz dans les classes virtuelles grâce à L’IA, **Fred Dixon** , Co-founder of BigBlueButton
- La transcription automatique en 99 langues as a service par **Jean-Louis Quéguiner**, fondateur de Gladia.io & ex-directeur IA et Big Data d'OVH
- Enrichissement automatique de vidéos avec l'IA par le Paris Digital Lab de CentraleSupélec : **Antoine Vaglio**, **Mohammed Bahhad**, **Liwei Sun**, **Pierre-Louis Veyrenc**
    `,
  start: "09:00",
  end: "10:30",
  tags: [TAG_ESQUIVE],
  file: "Vendredi 9 9h Salle Esquive.zip",
  videoUrl: "https://www.youtube.com/embed/XlXZO8lfem8",
};

const AGENDA_FRIDAY: AgendaSlot[] = [
  {
    title: "Accueil - Enregistrement / Petit Déjeuner rencontre",
    start: "08:30",
    end: "09:00",
    tags: [TAG_HALL],
  },
  SLOT_TRANSFORMATIONS_PRAGMATIQUES,
  SLOT_CAS_PRATIQUES,
  {
    title: "Pause café & stands, prompt party",
    description: "",
    start: "10:30",
    end: "11:00",
    tags: [TAG_HALL],
    break: true,
  },
  SLOT_DROITS_DAUTEUR,
  SLOT_RETOURS_EXP_IA_PEDAGOGIE,
  {
    title: "Pause Déjeuner",
    description: "",
    start: "12:30",
    end: "14:00",
    tags: [TAG_HALL],
    break: true,
  },
  SLOT_FEUILLE_ROUTE,
  SLOT_WORKSHOP,
];

/**
 * THURSDAY 8TH.
 */

export const SLOT_LUC_JULIA = {
  title: "L’intelligence artificielle n’existe pas",
  description:
    "**Luc Julia**, Co-créateur de Siri avec Adam Cheyer et Chief Scientific Officer de Renault Group",
  start: "09:30",
  end: "10:30",
  tags: [TAG_ESQUIVE],
  videoUrl: "https://www.youtube.com/embed/yuDBSbng_8o",
};

export const SLOT_IMPACT_IA = {
  title:
    "Impact de l'IA sur l'enseignement supérieur : est-on face à un changement de paradigme ?",
  description: `Table ronde animée par **Sophie Pène**, Professeure émérite en sciences de l'information et de la communication à Université Paris Cité, ancienne vice-présidente du Conseil national du numérique
- **David Cassagne**, Vice-Président délégué au Numérique pour la Formation à l'Université de Montpellier 
- **Alain Goudey**,  Directeur Général Adjoint en charge du numérique à NEOMA Business School
- **Vanda Luengo**, Professeure en informatique au Laboratoire LIP6, Sorbonne Université
- **Marc Oddon**, Vice Président formation continue, apprentissage et insertion professionnelle à l'Université Grenoble Alpes
    `,
  start: "11:00",
  end: "12:30",
  tags: [TAG_ESQUIVE],
  videoUrl: "https://www.youtube.com/embed/I3mcqNFrW0g",
};

export const SLOT_ENJEUX_ETHIQUES = {
  title:
    "Quels sont les enjeux éthiques à l'utilisation de l'IA dans l'éducation ?",
  description: `
Table ronde animée par **Alix Durand**, chargée de mission Affaires politiques et transverses à l'ANSSI, avec
- **Raja Chatila**, Professeur émérite d'intelligence artificielle et d'éthique des technologies à Sorbonne Université, Membre du Comité national pilote d'éthique du numérique (CNPEN)
- **Alexis Leautier**, Ingénieur expert, CNIL 
- **Giada Pistilli**, Responsable de l'éthique, Hugging Face 
- **Catherine Tessier**, Chercheuse et Référente intégrité scientifique et éthique de la recherche (ONERA - The French Aerospace Lab) et Membre du Comité national pilote d'éthique du numérique (CNPEN)
    `,
  start: "14:00",
  end: "15:30",
  tags: [TAG_ESQUIVE],
  videoUrl: "https://www.youtube.com/embed/P1k4nBurI3Y",
};

export const SLOT_IA_SOUVERAINE = {
  title: "Une IA souveraine : quelles alternatives à ChatGPT",
  description: `
Table ronde animée par **Renaud Monnet**, Directeur du Digital Institute de CentraleSupélec
- **Fabrice Epelboin**, Entrepreneur français, spécialiste des médias sociaux et du web social
- **Jean-Louis Quéguiner**, Fondateur de Gladia.io ex-directeur IA et big data d'OVH
- **Samuel Paccoud**, Responsable technique de France Université Numérique
- **Robert Vesoul**, PDG & Co-fondateur d'Illuin Technology
- **Pierre-Étienne Devineau**, Data scientist à la DINUM
    `,
  start: "11:00",
  end: "12:30",
  tags: [TAG_CARRE],
  videoUrl: "https://www.youtube.com/embed/K27mi_9N0DM",
};

export const SLOT_IA_RESPONSABLE = {
  title: "IA responsable : inclusivité des formations et défi climatique",
  description: `
- L'intelligence artificielle au service de la formation des personnes en situation de handicap, **Roxana Rugina**, secrétaire générale d'ImpactAI
- L'IA générative est-elle compatible avec le changement climatique ? **Tristan Nitot**, expert numérique responsable à OCTO technology
- Pour un débat apaisé sur la consommation énergétique de l'IA , **Pierre Beyssac**, PDG et fondateur d'Eriomem & co-fondateur de Gandi suivie d'une séance de questions/réponses avec la salle
- Table ronde animée par **Samuel Paccoud**, Responsable technique de France Université Numérique avec **Tristan Nitot**, **Pierre Beyssac**, **Roxana Rugina** et **Wacim Belblidia**, Responsable de la science des données et de la durabilité à Illuin Technology
    `,
  start: "16:00",
  end: "17:30",
  tags: [TAG_ESQUIVE],
  videoUrl: "https://www.youtube.com/embed/ovFOXEsyPpk",
  file: "Jeudi 8 16h Salle Esquive.zip",
};

export const SLOT_SOUVERAINETE_DONNEES = {
  title: "Autour des questions de souveraineté des données en IA",
  description: `
Animation par **Caroline Crestani-Befve**, Responsable juridique et DPO de France Université Numérique
- Les licences responsables d'IA : un nouveau paradigme pour une IA ouverte, **Carlos Muñoz Ferrandis**, Avocat en affaires techniques et règlementaires chez Hugging Face
- Essor des IA génératives : la régulation de l'IA mise à l’épreuve (**Alexis Leautier**, Ingénieur expert, CNIL et **Erevan Malroux**, Juriste au service des affaires économiques, CNIL)
    `,
  start: "16:00",
  end: "17:30",
  tags: [TAG_CARRE],
  videoUrl: "https://www.youtube.com/embed/A73erFZyfuE",
};

export const SLOT_RESSOURCES_EDUCATIVES = {
  title: "Ressources éducatives libres sur l'IA par l'Inria",
  description: `
Animation par **Bénédicte Cardon**, Ingénieure pédagogique au service Éducation et Médiation Scientifiques d’Inria
- Retour Mooc Intelligence artificielle avec intelligence - **Aurélie Lagarrigue** (Ingénieure pédagogique - Inria) et **Thierry Viéville** (Chercheur en neurosciences computationelles - Inria)
- Décrypter les outils d'IA - Projet Erasmus+ AI4T Intelligence Artificielle pour et par les enseignants, **Bénédicte Cardon** (Ingénieure pédagogiquee - Inria) et **Azim Roussanaly** (Enseignant-chercheur en informatique - LORIA)
- Retour Mooc Machine learning in Python with scikit-learn, **David Arturo Amor Quiroz** (Machine Learning Engineer - Inria)
    `,
  start: "14:00",
  end: "15:30",
  tags: [TAG_CARRE],
  file: "Jeudi 8 14h Le Carre.zip",
  videoUrl: "https://www.youtube.com/embed/IEw6kDSayts",
};

const AGENDA_THURSDAY: AgendaSlot[] = [
  {
    title: "Accueil - Enregistrement / Petit Déjeuner rencontre",
    description: "Mot d'Introduction de l'organisateur depuis la mezzanine",
    start: "08:15",
    end: "09:30",
    tags: [TAG_HALL],
  },
  SLOT_LUC_JULIA,
  {
    title: "Pause café & stands, prompt party",
    description: "",
    start: "10:30",
    end: "11:00",
    tags: [TAG_HALL],
    break: true,
  },
  SLOT_IMPACT_IA,
  SLOT_IA_SOUVERAINE,
  {
    title: "Pause Déjeuner",
    description: "",
    start: "12:30",
    end: "14:00",
    tags: [TAG_HALL],
    break: true,
  },
  {
    title:
      "Quels sont les enjeux éthiques à l'utilisation de l'IA dans l'éducation ?",
    description: `
Table ronde animée par **Alix Durand**, chargée de mission Affaires politiques et transverses à l'ANSSI, avec
- **Raja Chatila**, Professeur émérite d'intelligence artificielle et d'éthique des technologies à Sorbonne Université, Membre du Comité national pilote d'éthique du numérique (CNPEN)
- **Alexis Leautier**, Ingénieur expert, CNIL 
- **Giada Pistilli**, Responsable de l'éthique, Hugging Face 
- **Catherine Tessier**, Chercheuse et Référente intégrité scientifique et éthique de la recherche (ONERA - The French Aerospace Lab) et Membre du Comité national pilote d'éthique du numérique (CNPEN)
    `,
    start: "14:00",
    end: "15:30",
    tags: [TAG_ESQUIVE],
  },
  SLOT_RESSOURCES_EDUCATIVES,
  {
    title: "Pause café & stands, prompt party",
    description: "",
    start: "15:30",
    end: "16:00",
    tags: [TAG_HALL],
    break: true,
  },
  SLOT_IA_RESPONSABLE,
  SLOT_SOUVERAINETE_DONNEES,
  {
    title: "Échange convivial autour d'un cocktail",
    description: ``,
    start: "18:00",
    end: "21:00",
    tags: [TAG_HALL],
    break: true,
  },
];

export const Agenda = () => {
  return (
    <ContentSection className="bg-white text-left">
      <Part title="Jeudi 8 Juin">
        <div className="flex flex-col gap-4">
          {AGENDA_THURSDAY.map((slot, index) => (
            <AgendaSlotCard slot={slot} key={index} />
          ))}
        </div>
      </Part>
      <div className="mt-20" />
      <Part title="Vendredi 9 Juin">
        <div className="flex flex-col gap-4">
          {AGENDA_FRIDAY.map((slot, index) => (
            <AgendaSlotCard slot={slot} key={index} />
          ))}
        </div>
      </Part>
    </ContentSection>
  );
};

export const AgendaSlotCard = ({ slot }: { slot: AgendaSlot }) => {
  return (
    <div className={"flex" + (slot.break ? " my-10" : "")}>
      <div className="flex flex-col justify-between py-1 font-semibold shrink-0 items-end text-xs md:text-base pr-2 md:pr-5 w-10 md:w-16">
        <div>{slot.start}</div>
        <div>{slot.end}</div>
      </div>
      {slot.break ? (
        <div className="flex-grow flex flex-col items-center">
          <div className="font-normal text-lg text-center">{slot.title}</div>
          <div className="flex mt-2">
            {slot.tags.map((tag, i) => (
              <div
                key={i}
                className={
                  "text-white font-semibold text-xs px-2 py-1 rounded-full " +
                  tag.color
                }
              >
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <AgendaSlotText slot={slot} />
      )}
    </div>
  );
};

export const AgendaSlotText = ({ slot }: { slot: AgendaSlot }) => (
  <div className="bg-fun-grey-200 flex-grow border-l-fun-grey-300 border-l-[3px] px-2 md:px-5 py-1 md:py-4">
    <div className="font-semibold text-base md:text-lg">{slot.title}</div>
    <div className="text-xs md:text-sm font-light mt-1 prose max-w-full prose-p:m-0 prose-ul:m-0">
      <ReactMarkdown>{slot.description!}</ReactMarkdown>
    </div>
    <div className="flex mt-2">
      {slot.tags.map((tag, i) => (
        <div
          key={i}
          className={
            "text-white font-semibold text-xs px-2 py-1 rounded-full " +
            tag.color
          }
        >
          {tag.name}
        </div>
      ))}
    </div>
    {slot.file && (
      <div className="mt-2">
        <a
          className="underline text-xs md:text-sm font-light"
          href={"slides/" + slot.file}
          target="_blank"
          rel="noreferrer"
        >
          Télécharger les slides
        </a>
      </div>
    )}
  </div>
);
