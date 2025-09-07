import fs from "fs";
import path from "path";
import Link from "next/link";

export default function ClassPage({ params }) {
  const className = params.class;

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
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <Link href="/" className="text-orange-400 hover:underline">
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
                className="block bg-gray-800 hover:bg-gray-700 p-4 rounded-lg shadow text-orange-300"
              >
                {file}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mb-6 text-gray-400">Файлів немає</p>
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
                className="block bg-gray-800 hover:bg-gray-700 p-4 rounded-lg shadow text-orange-300"
              >
                {file}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">Файлів у розділі &apos;book&apos; немає</p>
      )}
    </main>
  );
}
