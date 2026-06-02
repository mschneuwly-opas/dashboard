import "./globals.css";

export const metadata = {
  title: "Oceanie Pneus — Simulateur de Jantes",
  description: "Configurateur visuel de jantes pour pick-up et 4x4. Visualisez vos jantes sur votre véhicule en quelques secondes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;900&family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
