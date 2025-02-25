import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";

const FooterLinks = [
  {
    displayText: "Politica de Privacidad",
    path: "/",
  },
  {
    displayText: "Terminos y Condiciones",
    path: "/",
  },
  {
    displayText: "Cookies",
    path: "/",
  },
  {
    displayText: "Ayuda",
    path: "/",
  },
  {
    displayText: "Contacta con Nosotros",
    path: "/",
  },
  {
    displayText: "Configuracion de cookies",
    path: "/",
  },
];

const SocialMediaLinks = [
  {
    id: 1,
    displayText: "Facebook",
    icon: <Facebook />,
    path: "",
  },
  {
    id: 2,
    displayText: "Instagram",
    icon: <Instagram />,
    path: "",
  },
  {
    id: 3,
    displayText: "Youtube",
    icon: <Youtube />,
    path: "",
  },
  {
    id: 4,
    displayText: "X",
    icon: <X />,
    path: "",
  },
  {
    id: 5,
    displayText: "Linkedin",
    icon: <Linkedin />,
    path: "",
  },
];

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="flex justify-between px-10 py-6 bg-primary">
        <div>
          <ul>
            {FooterLinks.map((link, i) => {
              return (
                <li key={i} className="py-2">
                  <Link to={link.path} className="text-gray-200">
                    {link.displayText}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="" >
          <div className="flex gap-4">
            {SocialMediaLinks.map((socialIcon) => {
              return (
                <div key={socialIcon.id}>
                  <Link to={socialIcon.path} className="text-white">
                    {socialIcon.icon}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center border-t-gray-200 border-t-2 w-[95%] mx-auto">
        <p className=" py-4 text-gray-200 ">
          © Copyright 2025 Manchester United Football Club. Reservados todos
          los derechos.
        </p>
      </div>
    </div>
  );
};

export default Footer;
