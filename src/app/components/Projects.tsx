interface ProjectProps {
  titulo: string;
  content: string;
  link1?: string;
  link2?: string;
  link3?: string;
  image: string;
  reverse?: boolean;
}

export default function Projects({
  titulo,
  content,
  link1,
  link2,
  link3,
  image,
  reverse,
}: ProjectProps) {
  return (
    <section
      className={`flex flex-col sm:flex-row gap-10 p-10 w-full ${reverse ? 'sm:flex-row-reverse' : ''}`}
    >
      {/* Texto */}
      <div className="flex flex-col gap-4 text-white w-full sm:w-1/2 justify-center">
        <h3 className="text-2xl sm:text-3xl font-bold">{titulo}</h3>
        <p className="text-gray-300">{content}</p>
        {link1 && (
          <a
            href={link1}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-white underline hover:scale-90 transition-transform duration-200 w-1/6"
          >
            Live Project
          </a>
        )}
        {link2 && (
          <a
            href={link2}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-white underline hover:scale-90 transition-transform duration-200 w-1/6"
          >
            Repository
          </a>
        )}
      </div>

      {/* Imagem */}
      <div className="w-full sm:w-1/2 flex justify-center">
        {link3 ? (
          <a href={link3} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={`Imagem do projeto ${titulo}`}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-xl shadow-black rounded-lg hover:scale-105 transition-transform duration-200"
            />
          </a>
        ) : (
          <img
            src={image}
            alt={`Imagem do projeto ${titulo}`}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-xl shadow-black rounded-lg"
          />
        )}
      </div>
    </section>
  );
}
