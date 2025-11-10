import "./globals.css";

export const metadata = {
  title: "Матеріали для навчання",
  description: "Сайт для завантаження матеріалів",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className="h-full">
      {/* Removed fixed Tailwind bg/text utilities so CSS vars control theme */}
      <body
        className="flex flex-col min-h-screen"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        {/* HEADER */}
        <header
          className="text-center py-4 shadow-md sticky top-0 z-50"
          style={{
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          <h1 className="text-2xl font-bold">Микулинецький ОЗЗСО І-ІІІ ст.</h1>
          <p className="text-sm mt-1" style={{ color: "var(--foreground)" }}>
            Створено для учнів Микулинецької школи, що вивчають інформатику та
            фізику
          </p>
        </header>

        {/* MAIN */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <footer
          className="text-center py-3 text-sm mt-auto"
          style={{
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          © {new Date().getFullYear()} Коцюрко Роман. Усі права захищені.
        </footer>
      </body>
    </html>
  );
}
