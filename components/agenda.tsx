import { ContentSection } from "pages";
import { Part } from "components/Part";
import ReactMarkdown from "react-markdown";

interface AgendaSlot {
  title: string;
  description?: string;
  tags: {
    name: string;
    color: string;
  }[];
  start: string;
  end: string;
  break?: boolean;
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
// const TAG_CYBER = {
//   name: "Cybersphère",
//   color: "bg-violet-700",
// };

const AGENDA_FRIDAY: AgendaSlot[] = [
  {
    title: "Quelle transformation pragmatique des outils pédagogiques ?",
    description: `
- Introduction et animation par **Hervé Luga**, Vice Président Numérique de l'Université Toulouse
- Créez des QCM & flashcards en quelques secondes grâce à Quiz Wizard, **Wandrille Bonnet**, Directeur Produit chez Wooclap
- Génération de quiz pour la formation en ligne, **Wassym Kalouache**, Co-fondateur et président de Corolair
- Increasing formative assessment in Virtual Classrooms using AI, **Fred Dixon** , Co-founder of BigBlueButton
- La transcription automatique en 99 langues as a service par **Jean-Louis Quéguiner**, fondateur de Gladia.io & ex-directeur IA et Big Data d'OVH
- Enrichissement automatique de vidéos avec l'IA par le Paris Digital Lab de CentraleSupélec : **Antoine Vaglio**, **Mohammed Bahhad**, **Liwei Sun**, **Pierre-Louis Veyrenc**    
    `,
    start: "09:00",
    end: "10:30",
    tags: [TAG_ESQUIVE],
  },
  {
    title:
      "Cas pratiques d'utilisation de l'apprentissage machine dans l'education",
    description: `
- Personnalisation des apprentissages avec l’IA : exemple d’Adaptiv’Langue/EvidenceB, par **Catherine de Vulpillières**, GM & CIO cofondatrice EvidenceB
- A4LL, un système de learning analytics pour l'apprentissage du langage, par **Rémi Venant**, Enseignant-Chercheur en Informatique à Le Mans Université    
- Pas d'IA sans data. Vers des jeux de données libres et ouverts pour l'éducation.", par **Julien Maupetit**, Responsable des données à France Université Numérique
    `,
    start: "09:00",
    end: "10:30",
    tags: [TAG_CARRE],
  },
  {
    title: "Pause café & stands, prompt party",
    description: "",
    start: "10:30",
    end: "11:00",
    tags: [TAG_HALL],
    break: true,
  },
  {
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
  },
  {
    title: "Retours d'expériences autour de l'IA et de la pédagogie",
    description: `
Animation par **Sandrine Delacroix-Morvan**, responsable de communication de France Université Numérique
- **Claire Doz**, Enseignante de lettres à la Cité scolaire Paul Valéry : Retours d'expériences sur l'utilisation de l'IA en cours de Français 
- **Jean-François Caulier**, Vice président délégué stratégie et innovations numériques à l'université Paris 1 Panthéon Sorbonne - Comment utiliser les outils d'IA pour améliorer les cours de maths à la session    
- **Bernard Quinio**, Directeur du Service Formation Continue & Alternance (SFCA) et enseignant chercheur à l' Université Paris Nanterre - Comment l'IA nous oblige à repenser l'enseignement dans le supérieur ? 
- **Serge Miranda**, Professeur Emérite d'Informatique à l' Université Côte d'Azur  - IA générative et 3 dimensions de l'enseignement numérique du futur
    `,
    start: "11:00",
    end: "12:30",
    tags: [TAG_CARRE],
  },
  {
    title: "Pause Déjeuner",
    description: "",
    start: "12:30",
    end: "14:00",
    tags: [TAG_HALL],
    break: true,
  },
  {
    title: "Quelle feuille de route IA pour l'enseignement supérieur ?",
    description: ` 
Table ronde animée par **Sophie Pène**, Professeure émérite en sciences de l'information et de la communication à Université Paris Cité, ancienne vice-présidente du Conseil national du numérique
- **Mireille Brangé**, Coordinatrice nationale de la stratégie d'accélération pour l'enseignement et le numérique au Secrétariat général pour l'investissement  
- **Gilles Roussel**, Président de l’Université Gustave Eiffel, Référent numérique à France Universités         
- **Bruno Sportisse**, Président-directeur général d'Inria
    `,
    start: "14:00",
    end: "15:30",
    tags: [TAG_ESQUIVE],
  },
  {
    title: "Workshop sur l'Enrichissement automatique de vidéos avec l'IA",
    description: ` 
Par le Paris Digital Lab de CentraleSupélec: **Antoine Vaglio**, **Mohammed Bahhad**, **Liwei Sun**, **Pierre-Louis Veyrenc**
    `,
    start: "14:00",
    end: "15:00",
    tags: [TAG_CARRE],
  },
];

const AGENDA_THURSDAY: AgendaSlot[] = [
  {
    title: "Accueil - Enregistrement / Petit Déjeuner rencontre",
    description: "Mot d'Introduction de l'organisateur depuis la mezzanine",
    start: "08:45",
    end: "09:30",
    tags: [TAG_HALL],
  },
  {
    title: "L’intelligence artificielle n’existe pas",
    description:
      "**Luc Julia**, Co-créateur de Siri avec Adam Cheyer et Chief Scientific Officer de Renault Group",
    start: "09:30",
    end: "10:30",
    tags: [TAG_ESQUIVE],
  },
  {
    title: "Pause café & stands, prompt party",
    description: "",
    start: "10:30",
    end: "11:00",
    tags: [TAG_HALL],
    break: true,
  },
  {
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
  },
  {
    title: "Une IA souveraine : quelles alternatives à ChatGPT",
    description: `
- Démystifier l'IA générative par **Laurent Daudet**, Directeur Général et co-fondateur de LightOn
- Table ronde animée par **Renaud Monnet**, Directeur du Digital Institute de CentraleSupélec, avec **Laurent Daudet**, **Fabrice Epelboin**, Entrepreneur français, spécialiste des médias sociaux et du web social, **Jean-Louis Quéguiner**, Fondateur de Gladia.io ex-directeur IA et big data d'OVH, **Samuel Paccoud**, Responsable technique de France Université Numérique et **Robert Vesoul**, PDG & Co-fondateur d'Illuin Technology
    `,
    start: "11:00",
    end: "12:30",
    tags: [TAG_CARRE],
  },
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
  {
    title: "Ressources éducatives libres sur l'IA par l'Inria",
    description: `
- Retour Mooc Intelligence artificielle avec intelligence - **Aurélie Lagarrigue** (Ingénieure pédagogique - Inria) et **Thierry Viéville** (Chercheur en neurosciences computationelles - Inria)
- Décrypter les outils d'IA - Projet Erasmus+ AI4T Intelligence Artificielle pour et par les enseignants, **Bénédicte Cardon** (Ingénieure pédagogiquee - Inria) et **Azim Roussanaly** (Enseignant-chercheur en informatique - LORIA)
- Retour Mooc Machine learning in Python with scikit-learn, **David Arturo Amor Quiroz** (Machine Learning Engineer - Inria)
    `,
    start: "14:00",
    end: "15:30",
    tags: [TAG_CARRE],
  },
  {
    title: "Pause café & stands, prompt party",
    description: "",
    start: "15:30",
    end: "16:00",
    tags: [TAG_HALL],
    break: true,
  },
  {
    title:
      "À propos de la soutenabilité de l'IA : inclusivité des formations et défit climatique",
    description: `
- Transformer les formations en ligne sur FUN grâce à l'IA, **Samuel Paccoud**, Responsable technique de France Université Numérique
- L'intelligence artificielle au service de la formation des personnes en situation de handicap, **Jean Christophe Chamayou**, Coordinateur IA & inclusion chez Impact AI et Président de Lafayette Associés
- L'IA générative est-elle compatible avec le changement climatique ? **Tristan Nitot**, expert numérique responsable à OCTO technology
- Pour un débat apaisé sur la consommation énergétique de l'IA , **Pierre Beyssac**, PDG et fondateur d'Eriomem & co-fondateur de Gandi suivie d'une séance de questions/réponses avec la salle
    `,
    start: "16:00",
    end: "17:30",
    tags: [TAG_ESQUIVE],
  },
  {
    title: "Autour des questions de souveraineté des données en IA",
    description: `
Animation par **Caroline Crestani-Befve**, Responsable juridique et DPO de France Université Numérique
- Essor des IA génératives : la régulation de l'IA mise à l’épreuve (**Alexis Leautier**, Ingénieur expert, CNIL et **Erevan Malroux**, Juriste au service des affaires économiques, CNIL)
- Les licences responsables d'IA : un nouveau paradigme pour une IA ouverte, **Carlos Muñoz Ferrandis**, Avocat en affaires techniques et règlementaires chez Hugging Face
    `,
    start: "16:00",
    end: "17:30",
    tags: [TAG_CARRE],
  },
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
        </div>
      )}
    </div>
  );
};
