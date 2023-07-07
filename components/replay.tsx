import { Part } from "@/components/Part";
import { ContentSection } from "@/pages";
import {
  AgendaSlot,
  SLOT_ENJEUX_ETHIQUES,
  SLOT_IA_SOUVERAINE,
  SLOT_IMPACT_IA,
  SLOT_LUC_JULIA,
  SLOT_DROITS_DAUTEUR,
  SLOT_IA_RESPONSABLE,
  AgendaSlotText,
  SLOT_SOUVERAINETE_DONNEES,
  SLOT_RETOURS_EXP_IA_PEDAGOGIE,
  SLOT_CAS_PRATIQUES,
  SLOT_WORKSHOP,
} from "@/components/agenda";

const REPLAYS: AgendaSlot[] = [
  SLOT_LUC_JULIA,
  SLOT_IMPACT_IA,
  SLOT_ENJEUX_ETHIQUES,
  SLOT_IA_SOUVERAINE,
  SLOT_DROITS_DAUTEUR,
  SLOT_IA_RESPONSABLE,
  SLOT_SOUVERAINETE_DONNEES,
  SLOT_RETOURS_EXP_IA_PEDAGOGIE,
  SLOT_CAS_PRATIQUES,
  SLOT_WORKSHOP,
];

export const Replays = () => {
  return (
    <ContentSection className="bg-white">
      <Part title="Les conférences en vidéo">
        <div className="flex flex-col gap-4">
          {REPLAYS.map((replay, i) => (
            <Replay key={i} replay={replay} />
          ))}
        </div>
      </Part>
    </ContentSection>
  );
};

const Replay = ({ replay }: { replay: AgendaSlot }) => {
  return (
    <div className="flex md:gap-4 flex-col md:flex-row items-start">
      <div className="w-full md:w-1/3 flex shrink-0">
        <div className="relative pb-[56.25%] h-full w-full">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={replay.videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      <div className="text-left">
        <AgendaSlotText slot={replay} />
      </div>
    </div>
  );
};
