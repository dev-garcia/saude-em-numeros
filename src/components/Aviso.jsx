import Image from "next/image";

const Aviso = () => {
  return (
    <>
      <div className="max-w-md shadow-lg rounded-lg m-auto mt-24 ">
        <div className="flex justify-center">
          <Image
            alt="foto de perfil de Cristian Garcia"
            src="/images/Cristian_cyberpunk_8k-Dois.png"
            width="256"
            height="256"
            className="w-20 h-20 object-cover rounded-full border-2"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Desculpe, mas...</h2>
          <p className="mt-2 text-gray-600 m-4">
            Estamos passando por atualizações e implementações de recursos.
            <br />
            Portanto, alguns erros podem aparecer ocasionalmente e recursos
            podem estar desativados temporariamente.
          </p>
        </div>
        <div className="flex justify-end m-4">
          <a
            href="https://portfolio-dev-garcia.vercel.app/"
            className="text-xl font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cristian Garcia
          </a>
        </div>
      </div>
    </>
  );
};

export default Aviso;
