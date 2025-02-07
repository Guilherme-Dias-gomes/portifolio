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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-700 text-white w-full h-screen flex-row justify-around font-sans">
        <div className="flex flex-col p-24 w-1/2 justify-center">
          <h1 className="text-5xl font-bold mb-10">Olá! Me chamo Guilherme</h1>
          <h2 className="text-3xl font-bold mb-2">Desenvolvedor Back-End</h2>
          <p className="text-2xl">
            Sou uma pessoa dedicada e com sede de conhecimento, buscando sempre
            aprender algo novo.
          </p>
          <div className="mt-8">
            <button className="border p-4 pl-10 pr-10 bg-stone-500 shadow-md shadow-zinc-300/100 rounded-3xl">
              Download CV
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <img src="perfil.svg" alt="" className="w-96 " />
        </div>
      </section>
      <section className="flex bg-zinc-700 w-full min-h-screen text-white items-center flex-col font-sans">
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
      <section className="flex bg-zinc-700 w-full min-h-screen text-white items-center flex-col font-sans">
        <h1 className="text-4xl font-bold mb-16">Technologies</h1>
        <div className="grid grid-cols-4 gap-6 w-3/4">
          {[
            { src: "java.svg", label: "Java" },
            { src: "Maven.svg", label: "Maven" },
            { src: "spring.svg", label: "SpringBoot" },
            { src: "rabbit.svg", label: "RabbitMQ" },
            { src: "DotNet.svg", label: ".NET" },
            { src: "aspnet.svg", label: "ASP.NET" },
            { src: "jwt.svg", label: "JWT Security" },
            { src: "Flutter.svg", label: "Flutter" },
            { src: "MySQL.svg", label: "MySQL" },
            { src: "MongoDB.svg", label: "MongoDB" },
            { src: "Azure.svg", label: "Azure" },
            { src: "Docker.svg", label: "Docker" },
          ].map((tech, index) => (
            <div
              key={index}
              className="p-1 bg-gradient-to-r from-cyan-700 via-blue-500 to-indigo-700 rounded-lg bg-[length:200%_200%] animate-gradient"
            >
              <div className="flex flex-col items-center p-4 bg-zinc-800 rounded-lg shadow-md">
                <img src={tech.src} alt={tech.label} className="w-24 h-24" />
                <p className="mt-2 text-lg font-semibold">{tech.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex bg-zinc-700 w-full min-h-screen text-white items-center flex-col font-sans">
        <h1 className="text-4xl p-20 font-bold">Projects</h1>
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

        <section className="flex flex-row-reverse justify-around ">
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
      <section className="flex flex-col items-center justify-center h-1/2 bg-black text-white p-6">
          
      </section>
    </div>
  );
}
