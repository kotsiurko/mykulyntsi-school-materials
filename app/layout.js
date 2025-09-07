import "./globals.css";

export const metadata = {
  title: "Матеріали для навчання",
  description: "Сайт для завантаження матеріалів",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className="h-full">
      <body className="bg-gray-900 text-white flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="bg-gray-800 text-center py-4 shadow-md sticky top-0 z-50">
          <h1 className="text-2xl font-bold">Микулинецький ОЗЗСО І-ІІІ ст.</h1>
          <p className="text-sm text-gray-300 mt-1">
            Створено для учнів Микулинецької школи, що вивчають інформатику
          </p>
        </header>

        {/* MAIN */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <footer className="bg-gray-800 text-center py-3 text-gray-400 text-sm mt-auto">
          © {new Date().getFullYear()} Коцюрко Роман. Усі права захищені.
        </footer>
      </body>
    </html>
  );
}
