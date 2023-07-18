import "./globals.css";

export const metadata = {
  title: "Saúde em Números",
  description:
    "Site do Saúde em Números desenvolvido por Cristian Garcia com objetivo de informar os usários e disponibilizar que você saiba o seu o tempo de vida, ou não...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
