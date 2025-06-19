import Transitions from "@/components/transition";
import { SectionsContext } from "@/context/sectionContext";
import translate from "@/lib/translate";
import NotFound from "@/pages/404/404";
import { ArrowBigLeft } from "lucide-react";
import { useContext, Fragment } from "react";
import { Link, useParams } from "react-router-dom";

export default function Categories() {
  const { sections, categories } = useContext(SectionsContext);
  const { lang, id } = useParams();
  const section = sections.some((section) => section.id === id);
  const categoriesFilter = categories.filter(
    (category) =>
      category.sectionid === id &&
      category.isactive &&
      category.products.some((product) => product.isactive === true)
  );

  const bread = {
    es: "Nota: Los sándwiches y las focaccias se preparan con los mismos ingredientes que los bocadillos, croissants o tostas.",
    en: "Note: Sandwiches and focaccias are made with the same ingredients as sandwiches, croissants, or toasts.",
    fr: "Note: Les sandwichs et les focaccias sont préparés avec les mêmes ingrédients que les sandwichs, croissants ou toasts.",
  };

  const sweets = {
    es: "Todos nuestros productos estan sujetos a la disponibilidad del mercado.",
    en: "All our products are subject to market availability.",
    fr: "Tous nos produits sont soumis à la disponibilité du marché.",
  };

  if (!section) return <NotFound />;

  return (
    <>
      <Link to={`/${lang}`} className="flex justify-center items-center">
        <ArrowBigLeft strokeWidth={1} size={35} />
        {translate(lang!, { es: "Ir atrás", en: "Go back", fr: "Revenir" })}
      </Link>
      {categoriesFilter.map((category) => (
        <Fragment key={category.id}>
          <div  className="flex flex-col items-center gap-2">
            <h2 className="text-center font-medium my-5 first-letter:uppercase">
              {translate(lang!, category.title)}
            </h2>
            {category.products
              .filter((product) => product.isactive === true)
              .map((product, index) => (
                <Transitions delay={index} key={product.id}>
                  <ul
                    
                    className={`flex justify-between items-center h-32 gap-3 w-full p-2 ${
                      index % 2 === 0 ? "bg-[#7FAF5D]" : "bg-[#F7E7CE]"
                    }`}
                  >
                    <li className="w-24 h-24">
                      <img
                        src={product.image}
                        alt={product.title.en}
                        width={112}
                        height={112}
                      ></img>
                    </li>
                    <li className="flex-1 first-letter:uppercase text-center">
                      {translate(lang!, product.title)}
                    </li>
                    <div className="flex flex-col self-end text-end">
                      <li className="font-bold">{product.price}€</li>
                    </div>
                  </ul>
                </Transitions>
              ))}
          </div>

          {category.title.en === "bread" ? (
            <p className="text-center text-sm p-5">
              • {translate(lang!, bread)}
            </p>
          ) : category.title.en === "sweets" ? (
            <p className="text-center text-sm p-5">
              • {translate(lang!, sweets)}
            </p>
          ) : null}
        </Fragment>
      ))}
    </>
  );
}
