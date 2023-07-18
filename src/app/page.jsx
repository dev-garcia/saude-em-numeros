import Aviso from "@/components/Aviso";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />

      <main className="font-sans mx-auto text-center mt-12">
        <section>
          <p className="font-medium">Bem-vindo ao</p>
          <h1 className=" text-5xl sm:text-8xl font-bold m-8">
            Saúde em Números
          </h1>

          <h2 className="font-medium text-gray-600 mt-4">
            Lembre-se! A vida é um presente. <br />
            Então, viva a vida ao máximo.
          </h2>
        </section>

        <section>
          <h2 className="mb-8">Navegue livremente entre as opções:</h2>
          <Link
            href="/imc"
            className="rounded-lg  bg-[var(--laranja)] border border-black p-4 font-medium"
          >
            Calcular IMC
          </Link>
          <Link
            href="/tempo-de-vida"
            className="rounded-lg bg-[var(--laranja)] border border-black ml-4 p-4 font-medium"
          >
            Calcular Tempo de Vida
          </Link>
        </section>

        <Aviso />
      </main>

      <Footer />
    </>
  );
}
