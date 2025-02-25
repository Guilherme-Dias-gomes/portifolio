"use client";

import { useEffect, useState } from "react";
import Projects from "./components/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importe o CSS

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação
      once: true, // Anima apenas uma vez
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-0 bg-stone-800">
      <header className="sticky top-0 flex flex-row bg-stone-800 text-white justify-around items-center p-5 z-10">
        <div className="flex flex-row items-center">
          <img src="codigo.png" alt="logo" className="w-16 mr-3" />
          <p className="p-1 text-3xl font-bold">Guilherme Dias</p>
        </div>

        {/* Botão de hamburguer para telas pequenas */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-md text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu de navegação */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block lg:relative absolute top-full left-0 w-full bg-stone-800 lg:bg-transparent lg:w-auto lg:top-0`}
        >
          <ul className="flex flex-col lg:flex-row gap-8 text-xl font-bold p-5 lg:p-0">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block py-2 lg:py-0 relative transition duration-300 hover:text-blue-500 
                   before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] 
                   before:bg-blue-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <section
        data-aos="fade-up"
        id="home"
        className="flex flex-col sm:flex-row bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-700 text-white w-full h-full justify-center items-center sm:justify-around font-sans p-6"
      >
        <div className="flex flex-col items-center sm:items-start sm:w-1/2 justify-center text-center sm:text-left p-6">
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">
            Olá! Me chamo Guilherme
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Desenvolvedor Back-End
          </h2>
          <p className="text-xl sm:text-2xl mb-6">
            Sou uma pessoa dedicada e com sede de conhecimento, buscando sempre
            aprender algo novo.
          </p>
          <div className="hover:scale-90 transition-transform duration-200">
            <a
              href="Curriculo.pdf"
              download="Curriculo.pdf"
              className="border p-3 sm:p-4 px-8 bg-stone-500 shadow-md rounded-3xl"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center sm:justify-end mt-8 sm:mt-0">
          <img src="perfil.svg" alt="Profile" className="w-48 sm:w-96" />
        </div>
      </section>
      <section
        data-aos="fade-up"
        id="about"
        className="flex bg-zinc-700 w-full min-h-full text-white items-center flex-col font-sans"
      >
        <h1 className="text-4xl p-20 font-bold">About Me</h1>
        <p className="w-3/4 text-3xl mb-10 text-center">
          Desenvolvedor Back-End formado em Análise e Desenvolvimento de
          Sistemas pela FIAP. Atualmente, estou focado em aprimorar minhas
          habilidades, especialmente no desenvolvimento de APIs REST integradas
          a bancos de dados, garantindo a manipulação de dados de forma
          eficiente, escalável e segura.
        </p>
        <p className="w-3/4 text-3xl text-center">
          Sou uma pessoa que está sempre em busca de desafios que me impulsionem
          e me tornem um profissional melhor. Tenho muitos sonhos e ambições, e
          penso constantemente no futuro, por isso, me dedico a evoluir no
          presente para conquistar cada vez mais.
        </p>
      </section>
      <section
        data-aos="fade-up"
        id="skills"
        className="flex flex-col bg-zinc-700 w-full min-h-full text-white items-center font-sans p-6"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-10">Technologies</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full sm:w-3/4">
          {[
            { src: "java.svg", label: "Java", shadow: "hover:shadow-red-500" },
            {
              src: "Maven.svg",
              label: "Maven",
              shadow: "hover:shadow-yellow-500",
            },
            {
              src: "spring.svg",
              label: "SpringBoot",
              shadow: "hover:shadow-green-500",
            },
            {
              src: "rabbit.svg",
              label: "RabbitMQ",
              shadow: "hover:shadow-orange-500",
            },
            {
              src: "DotNet.svg",
              label: ".NET",
              shadow: "hover:shadow-purple-500",
            },
            {
              src: "aspnet.svg",
              label: "ASP.NET",
              shadow: "hover:shadow-blue-500",
            },
            {
              src: "jwt.svg",
              label: "JWT Security",
              shadow: "hover:shadow-pink-500",
            },
            {
              src: "Flutter.svg",
              label: "Flutter",
              shadow: "hover:shadow-blue-400",
            },
            {
              src: "MySQL.svg",
              label: "MySQL",
              shadow: "hover:shadow-teal-500",
            },
            {
              src: "MongoDB.svg",
              label: "MongoDB",
              shadow: "hover:shadow-green-400",
            },
            {
              src: "Azure.svg",
              label: "Azure",
              shadow: "hover:shadow-blue-600",
            },
            {
              src: "Docker.svg",
              label: "Docker",
              shadow: "hover:shadow-blue-300",
            },
          ].map((tech, index) => (
            <div
              key={index}
              className="p-1 bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-700 rounded-lg bg-[length:200%_200%] animate-gradient hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`flex flex-col items-center p-4 bg-zinc-800 rounded-lg shadow-md ${tech.shadow} hover:shadow-lg transition-shadow duration-300`}
              >
                <img
                  src={tech.src}
                  alt={tech.label}
                  className="w-16 h-16 sm:w-24 sm:h-24"
                />
                <p className="mt-2 text-lg font-semibold">{tech.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        data-aos="fade-up"
        id="projects"
        className="flex bg-zinc-700 w-full min-h-full text-white items-center flex-col font-sans lg:px-24"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
        <Projects
          titulo="Portal da Clínica de Estética"
          content="O portal da Clínica de Estética foi desenvolvido para oferecer uma
              experiência intuitiva e prática para os clientes, permitindo o
              agendamento de consultas, a visualização de detalhes sobre
              procedimentos estéticos e o acesso a informações sobre a clínica e
              a doutora responsável. A interface moderna e responsiva foi
              construída utilizando Next.js com TypeScript e Tailwind CSS,
              garantindo alta performance, escalabilidade e uma experiência
              agradável em diferentes dispositivos. O sistema conta com uma
              navegação fluida e otimizada para SEO, permitindo que clientes
              encontrem rapidamente os serviços oferecidos e agendem suas
              consultas de maneira simples e eficaz."
          link1="https://clinica-dra-rosiane-gomes.netlify.app/"
          link2="https://github.com/Guilherme-Dias-gomes/clinica"
          link3="https://clinica-dra-rosiane-gomes.netlify.app/"
          image="clinica.png"
        />
        <Projects
          titulo="EM BREVE"
          reverse={true}
          content="Projeto em desenvolvimento..."
          link1="https://github.com/Guilherme-Dias-gomes/portifolio"
          link2="https://github.com/Guilherme-Dias-gomes/portifolio"
          link3="https://github.com/Guilherme-Dias-gomes/portifolio"
          image="metalico.png"
        />
        <Projects
          titulo="EM BREVE"
          content="Projeto em desenvolvimento..."
          link1="https://github.com/Guilherme-Dias-gomes/portifolio"
          link2="https://github.com/Guilherme-Dias-gomes/portifolio"
          link3="https://github.com/Guilherme-Dias-gomes/portifolio"
          image="metalico.png"
        />
      </section>

      {/* Futter */}
      <section
        data-aos="fade-up"
        id="contact"
        className="flex flex-col items-center justify-center bg-black text-white p-6"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-10">Contacts</h1>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 justify-center">
          {[
            {
              href: "https://www.linkedin.com/in/guilherme-dias-gomes/",
              icon: "linkedin.svg",
              label: "LinkedIn",
              name: "Guilherme Dias",
            },
            {
              href: "mailto:guilhermediasgomes2@gmail.com",
              icon: "email.svg",
              label: "Email",
              name: "guilhermediasgomes2@gmail.com",
            },
            {
              href: "tel:5511977871357",
              icon: "whats.svg",
              label: "WhatsApp",
              name: "(11)97787-1357",
            },
            {
              href: "https://github.com/Guilherme-Dias-gomes",
              icon: "github.svg",
              label: "GitHub",
              name: "Guilherme-Dias-gomes",
            },
          ].map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="flex items-center group w-full sm:w-auto"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={contact.icon}
                  alt={contact.label}
                  className="w-14 mr-2 relative"
                />
              </div>
              <div>
                <h3 className="font-bold">{contact.label}</h3>
                <p>{contact.name}</p>
              </div>
            </a>
          ))}
        </div>
        <h1 className="mt-10 w-full">
          © Guilherme Dias 2025 - Todos os direitos reservados.
        </h1>
      </section>
    </div>
  );
}
