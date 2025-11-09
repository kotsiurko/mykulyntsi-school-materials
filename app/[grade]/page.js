import fs from "fs";
import path from "path";
import Link from "next/link";

export default function ClassPage({ params }) {
  const className = params?.grade;

  if (!className) {
    return (
      <main className="min-h-screen p-6">
        <p className="text-red-600">
          Невірний запит: відсутній параметр класу.
        </p>
        <Link href="/" className="text-current hover:underline">
          ← Назад
        </Link>
      </main>
    );
  }

  // Шлях до папки класу
  const classDir = path.join(process.cwd(), "public", className);
  const bookDir = path.join(classDir, "book");

  // Отримуємо файли з кореня папки класу
  let classFiles = [];
  if (fs.existsSync(classDir)) {
    classFiles = fs.readdirSync(classDir).filter(
      (file) => file !== "book" // виключаємо саму папку book
    );
  }

  // Отримуємо файли з папки "book"
  let bookFiles = [];
  if (fs.existsSync(bookDir)) {
    bookFiles = fs.readdirSync(bookDir);
  }

  return (
    <main className="min-h-screen p-6">
      <Link href="/" className="text-current hover:underline">
        ← Назад
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-6">
        Матеріали для {className} класу
      </h1>

      {/* Файли з кореня */}
      {classFiles.length > 0 ? (
        <ul className="mb-6">
          {classFiles.map((file, idx) => (
            <li key={idx} className="mb-2">
              <a
                href={`/${className}/${file}`}
                download
                className="block bg-[color:var(--background)] hover:bg-[color:var(--surface-hover)] p-4 rounded-lg shadow text-[color:color-mix(in srgb,var(--foreground) 85%, white 15%)]"
              >
                {file}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-6 text-[color:var(--muted)]">Файлів немає</p>
      )}

      <hr className="border-gray-600 my-6" />

      {/* Файли з папки book */}
      {bookFiles.length > 0 ? (
        <ul>
          {bookFiles.map((file, idx) => (
            <li key={idx} className="mb-2">
              <a
                href={`/${className}/book/${file}`}
                download
                className="block bg-[color:var(--surface)] hover:bg-[color:var(--surface-hover)] p-4 rounded-lg shadow text-[color:color-mix(in srgb,var(--foreground) 85%, white 15%)]"
              >
                {file}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[color:var(--muted)]">
          Файлів у розділі &apos;book&apos; немає
        </p>
      )}
    </main>
  );
}
