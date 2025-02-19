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
    <section className={`flex flex-col sm:flex-row gap-6 p-10 ${reverse ? 'sm:flex-row-reverse' : ''}`}>
      <div className="flex flex-col gap-2 text-white w-full sm:w-1/2 justify-center">
        <h3 className="text-xl sm:text-3xl font-bold">{titulo}</h3>
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
            className="text-lg font-bold text-white underline hover:scale-90 transition-transform duration-200 w-1/5"
          >
            Repository
          </a>
        )}
      </div>
      <div className="w-1/2">
        {link3 ? (
          <a href={link3} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={`Imagem do projeto ${titulo}`}
              className="sm:w-full shadow-xl shadow-black rounded-lg hover:scale-105 transition-transform duration-200"
            />
          </a>
        ) : (
          <img
            src={image}
            alt={`Imagem do projeto ${titulo}`}
            className="sm:w-full shadow-xl shadow-black rounded-lg"
          />
        )}
      </div>
    </section>
  );
}
