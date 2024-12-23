import "@/app/ui/global.css";
import { roboto,lusitana } from "./ui/fonts";


 export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}