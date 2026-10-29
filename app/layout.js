import "./globals.css";
import { NOMBRE_CONJUNTO } from "./lib/constantes";

export const metadata = {
  title: `Parqueadero · ${NOMBRE_CONJUNTO}`,
  description: "Control de cupos, tiempos y cobro para conjuntos residenciales",
};
export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
