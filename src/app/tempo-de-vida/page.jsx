"use client";
import { useState } from "react";
import Aviso from "@/components/Aviso";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function TempoDeVida() {
  const [age, setAge] = useState("");
  const [diasRestantes, setDiasRestantes] = useState(0);
  const [semanasRestantes, setSemanasRestantes] = useState(0);
  const [mesesRestantes, setMesesRestantes] = useState(0);

  const calcularTempoDeVida = () => {
    const anosRestantes = 76 - parseInt(age);
    const dias = anosRestantes * 365;
    const semanas = Math.floor(dias / 7);
    const meses = Math.floor(semanas / 4);

    setDiasRestantes(dias);
    setSemanasRestantes(semanas);
    setMesesRestantes(meses);
  };

  return (
    <>
      <Header />

      <div className="container px-4 py-8 font-sans font-medium mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Calculadora do Tempo de Vida
        </h1>
        <p>
          Em um determinado bloco de um curso, tive que realizar uma atividade
          na qual eu tinha que calcular minha idade com base na expectativa de
          vida das pessoas, para saber quantos dias de vida eu ainda teria, e
          foi assim que surgiu a ideia de trazer essa calculadora para cá.
        </p>

        <p>
          Levando em consideração os dados divulgados pelo Instituto Brasileiro
          de Geografia e Estatística (IBGE), a expectativa de vida no Brasil
          subiu para 76,8 anos em 2020.
        </p>

        <p>
          No Brasil, a expectativa de vida é de cerca de 76,57 anos. É
          importante notar que esses são apenas valores médios e a expectativa
          de vida real de uma pessoa pode variar.
        </p>

        <p>Pensando nisso:</p>

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Digite sua idade"
            className="border border-gray-400 rounded-lg py-2 px-4 focus:outline-none"
          />
          <button
            onClick={calcularTempoDeVida}
            className="rounded-lg bg-[var(--laranja)] border border-black py-2 px-4 text-white font-medium"
          >
            Calcular
          </button>
        </div>

        {diasRestantes > 0 && semanasRestantes > 0 && mesesRestantes > 0 && (
          <div className="mt-4">
            <p>
              Você tem {diasRestantes} dias, o que equivale a {semanasRestantes}{" "}
              semanas e {mesesRestantes} meses.
            </p>
          </div>
        )}
      </div>

      <Aviso />

      <Footer />
    </>
  );
}

export default TempoDeVida;
