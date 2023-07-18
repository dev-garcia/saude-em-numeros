"use client";
import Aviso from "@/components/Aviso";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const IMCCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateIMC = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || heightValue === 0) {
      setResult("Por favor, insira valores válidos.");
      return;
    }

    const imc = weightValue / Math.pow(heightValue, 2);
    const imcStatus = getIMCStatus(imc);
    setResult(`Seu IMC é igual a ${imc.toFixed(2)} = ${imcStatus}.`);
  };

  const getIMCStatus = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  };

  return (
    <>
      <Header />

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Calculadora de IMC</h1>
        <div className="flex flex-col mb-4">
          <label htmlFor="weight" className="mb-2">
            Peso (em kg):
          </label>
          <input
            type="text"
            id="weight"
            className="p-2 border"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="height" className="mb-2">
            Altura (em metros):
          </label>
          <input
            type="text"
            id="height"
            className="p-2 border"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          className="bg-[var(--laranja)] text-white px-4 py-2 rounded"
          onClick={calculateIMC}
        >
          Calcular IMC
        </button>
        {result && <p className="mt-4">{result}</p>}
      </div>

      <Aviso />

      <Footer />
    </>
  );
};

export default IMCCalculator;
