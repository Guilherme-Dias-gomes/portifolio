export default function Home() {
  return (
    <div className="p-0">
      <header className="sticky top-0 flex flex-row bg-stone-800 text-white justify-between items-center">
        <div className="flex flex-row m-5 items-center">
          <img src="codigo.png" alt="logo" className="w-16 mr-3 ml-5" />
          <p className="p-1 text-3xl font-bold">Guilherme Dias</p>
        </div>
        <nav className="p-1 m-5">
          <ul className="flex flex-row gap-8 text-xl font-bold mr-5">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section
        id="home"
        className="flex bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-700 text-white w-full h-screen flex-row justify-around font-sans"
      >
        <div className="flex flex-col p-24 w-1/2 justify-center">
          <h1 className="text-5xl font-bold mb-10">Olá! Me chamo Guilherme</h1>
          <h2 className="text-3xl font-bold mb-2">Desenvolvedor Back-End</h2>
          <p className="text-2xl">
            Sou uma pessoa dedicada e com sede de conhecimento, buscando sempre
            aprender algo novo.
          </p>
          <div className="mt-8">
            <a
              href="Curriculo.pdf"
              download="Curriculo.pdf"
              className="border p-4 pl-10 pr-10 bg-stone-500 shadow-md shadow-zinc-300/100 rounded-3xl"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <img src="perfil.svg" alt="" className="w-96 " />
        </div>
      </section>
      <section
        id="about"
        className="flex bg-zinc-700 w-full min-h-screen text-white items-center flex-col font-sans"
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
        id="skills"
        className="flex bg-zinc-700 w-full min-h-screen text-white items-center flex-col font-sans"
      >
        <h1 className="text-4xl font-bold mb-16">Technologies</h1>
        <div className="grid grid-cols-4 gap-6 w-3/4">
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
                <img src={tech.src} alt={tech.label} className="w-24 h-24" />
                <p className="mt-2 text-lg font-semibold">{tech.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        id="projects"
        className="flex bg-zinc-700 w-full min-h-screen text-white items-center flex-col font-sans"
      >
        <h1 className="text-4xl p-20 font-bold">Projects</h1>
        <section className="flex justify-around mb-7">
          <div className="flex flex-col gap-2 text-white w-1/3">
            <h3 className="text-2xl font-bold">Título</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              magni culpa nulla, molestias blanditiis, reiciendis placeat
              voluptate cupiditate aut debitis hic, ex cumque nemo doloremque
              facilis. Fugit autem error inventore.{" "}
            </p>
            <a href="#" className="text-lg font-bold text-white underline">
              Live Project
            </a>
            <a href="#" className="text-lg font-bold text-white underline">
              Repository
            </a>
          </div>
          <div>
            <a href="https://github.com/Guilherme-Dias-gomes/portifolio">
              <div>
                <img src="agricultu-img-pc.png" alt="" />
              </div>
            </a>
          </div>
        </section>

        <section className="flex flex-row-reverse justify-around mb-7">
          <div className="flex flex-col gap-2 text-white w-1/3">
            <h3 className="text-2xl font-bold">Título</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              magni culpa nulla, molestias blanditiis, reiciendis placeat
              voluptate cupiditate aut debitis hic, ex cumque nemo doloremque
              facilis. Fugit autem error inventore.
            </p>
            <a href="#" className="text-lg font-bold text-white underline">
              Live Project
            </a>
            <a href="#" className="text-lg font-bold text-white underline">
              Repository
            </a>
          </div>

          <div>
            <a href="https://github.com/Guilherme-Dias-gomes/portifolio">
              <div>
                <img src="agricultu-img-pc.png" alt="" />
              </div>
            </a>
          </div>
        </section>

        <section className="flex justify-around mb-5">
          <div className="flex flex-col gap-2 text-white w-1/3">
            <h3 className="text-2xl font-bold">Título</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              magni culpa nulla, molestias blanditiis, reiciendis placeat
              voluptate cupiditate aut debitis hic, ex cumque nemo doloremque
              facilis. Fugit autem error inventore.{" "}
            </p>
            <a href="#" className="text-lg font-bold text-white underline">
              Live Project
            </a>
            <a href="#" className="text-lg font-bold text-white underline">
              Repository
            </a>
          </div>
          <div>
            <a href="https://github.com/Guilherme-Dias-gomes/portifolio">
              <div>
                <img src="agricultu-img-pc.png" alt="" />
              </div>
            </a>
          </div>
        </section>
      </section>

      {/* Futter */}
      <section
        id="contact"
        className="flex flex-col items-center justify-center bg-black text-white"
      >
        <h1 className="text-4xl p-20 font-bold">Contacts</h1>
        <div className="flex gap-10">
          <a href="https://www.linkedin.com/in/guilherme-dias-gomes/" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="linkedin.svg"
                alt="linkedin"
                className="w-14 mr-2 relative"
              />
            </div>
            <div>
              <h3 className="font-bold">LinkedIn</h3>
              <p>Guilherme Dias</p>
            </div>
          </a>
          <a href="mailto:guilhermediasgomes2@gmail.com" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src="email.svg" alt="email" className="w-14 mr-2 relative" />
            </div>
            <div>
              <h3 className="font-bold">Email</h3>
              <p>guilhermediasgomes2@gmail.com</p>
            </div>
          </a>
          <a href="tel:5511977871357" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img src="whats.svg" alt="whats" className="w-14 mr-2 relative" />
            </div>
            <div>
              <h3 className="font-bold">WhatsApp</h3>
              <p>(11)97787-1357</p>
            </div>
          </a>
          <a href="https://github.com/Guilherme-Dias-gomes" className="flex items-center group">
            <div className="relative">
              <div className="absolute inset-0 bg-white rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="github.svg"
                alt="github"
                className="w-14 mr-2 relative"
              />
            </div>
            <div>
              <h3 className="font-bold">GitHub</h3>
              <p>Guilherme-Dias-gomes</p>
            </div>
          </a>
        </div>
        <h1 className="mt-10">
          © Guilherme Dias 2025 - Todos os direitos reservados.
        </h1>
      </section>
    </div>
  );
}
