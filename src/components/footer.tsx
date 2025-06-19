"use client";
import { Instagram } from "lucide-react";
import { Link } from 'react-router-dom'

import { useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:gap-0 py-5 lg justify-around items-center mt-3 w-full relative bg-[url('/wallpaper.jpg')] text-slate-50 text-center bg-orange-50">
      <span className="absolute bg-black/50 w-full h-full"></span>

      <div className="flex flex-col justify-center items-center md:w-1/3 gap-2 z-50">
        <Link to={
          pathname.includes("english")
          ? "/english"
          : pathname.includes("french")
          ? "/french"
          : "/spanish"
          }>
          <img
            src={"/logotipo.png"}
            alt="Lauka Logo"
            width={200}
            height={200}
            className="border-[1px] py-6 px-1 border-[#7FAF5D]"
          ></img>
        </Link>
      </div>
      <div className="flex flex-col gap-5 md:w-1/3 z-50">
        <div className="flex flex-col gap-2">
          <div>
            <b>
              {pathname.includes("english")
                ? "Direction: "
                : pathname.includes("french")
                ? "Adresse:"
                : "Dirección:"}
            </b>
            <a
              href="https://maps.app.goo.gl/WKGPirKvXJYLK8CUA"
              target="_blank"
              className="block mt-1"
            >
              Avenida Tome Cano nº12 , Garachico, 38450
            </a>
          </div>
          <div>
            <b>
              {pathname.includes("english")
                ? "Phone:"
                : pathname.includes("french")
                ? "Téléphone:"
                : "Teléfono:"}
            </b>

            <a
              href="https://wa.me/34678395726"
              target="_blank"
              className="block mt-1"
            >
              678 39 57 26
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-center gap-10">
            <a href="https://www.instagram.com/lauka_cafeteria" target="_blank">
              <Instagram />
            </a>
            <a href="https://g.co/kgs/wx4Ho3j" target="_blank">
              <img
                src={"/icons/google.png"}
                alt="Google"
                width={25}
                height={25}
              ></img>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 md:w-1/3 z-50">
        <p>
          {pathname.includes("english")
            ? "Enjoy!"
            : pathname.includes("french")
            ? "Bon appétit"
            : "¡Qué aprovechen!"}
        </p>
      </div>
    </div>
  );
}