import translate from "@/lib/translate";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export default function TopBar() {
  const { pathname } = useLocation();

  const counterOrder = {
    es: "• Haga su pedido en el mostrador. ¡Gracias!",
    en: "• Place your order at the counter. Thank you!",
    fr: "• Passez votre commande au comptoir. Merci!",
  };
  return (
    <>
      <div className="bg-[url('/wallpaper.jpg')] h-64 lg:max-h-80 bg-no-repeat bg-cover relative flex justify-center items-center">
        <span className="absolute bg-black/60 w-full h-full"></span>
        <Link
          className="w-5/6 max-w-96 h-auto z-50"
          to={
            pathname.includes("english")
              ? "/english"
              : pathname.includes("french")
              ? "/french"
              : "/spanish"
          }
        >
          <img
            src={"/logotipo.png"}
            alt="Lauka cafetería Logotipo"
            width={600}
            height={300}
          />
        </Link>
      </div>

      <div className="flex justify-between items-center p-3">
        <div></div>
        <div className="flex gap-1">
          <Link to={"/spanish"}>
            <img
              src={"/icons/spanish.png"}
              alt="spanish"
              width={35}
              height={35}
              className={`${
                !(pathname === "/") &&
                !pathname.includes("spanish") &&
                "opacity-50"
              }`}
            ></img>
          </Link>
          <Link to={"/english"}>
            <img
              src={"/icons/english.png"}
              alt="english"
              width={35}
              height={35}
              className={`${!pathname.includes("english") && "opacity-50"}`}
            ></img>
          </Link>
          <Link to={"/french"}>
            <img
              src={"/icons/french.png"}
              alt="french"
              width={35}
              height={35}
              className={`${!pathname.includes("french") && "opacity-50"}`}
            ></img>
          </Link>
        </div>
      </div>
      <div>
        <p className="text-center p-3 text-green-800">
          {translate(pathname, counterOrder)}
        </p>
      </div>
    </>
  );
}
