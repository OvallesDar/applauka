import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { SectionsContext } from "@/context/sectionContext";
import type { Section } from "@/types/section";
import translate from "@/lib/translate";
import NotFound from "../404/404";
import Transitions from "@/components/transition";

const language = ["spanish", "english", "french"]

export default function Lang() {
const { sections } = useContext(SectionsContext);
  const { lang } = useParams();

  if(!language.includes(lang!)) return <NotFound />
  
  return (
    sections.filter(section => section.isactive === true).map((section: Section, index: number) => (
    <Transitions delay={index} key={section.id} >
    <Link to={`/${lang}/${section.id}`} className={`flex uppercase font-mono -tracking-tighter justify-center items-center w-full h-32 ${
              index % 2 === 0 ? "bg-[#7FAF5D]" : "bg-[#F7E7CE]"
            }`}>
                
      {
      translate(lang!, section.title)
      }
    </Link>
    </Transitions>
   ))
  );
}
