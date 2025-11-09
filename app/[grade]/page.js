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

  const classDir = path.join(process.cwd(), "public", className);

  // read directory entries and separate files vs folders
  let dirents = [];
  try {
    if (fs.existsSync(classDir)) {
      dirents = fs.readdirSync(classDir, { withFileTypes: true });
    }
  } catch (err) {
    console.error("Error reading class directory:", err);
  }

  const subfolders = dirents
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    // optional: exclude hidden/system directories
    .filter((n) => !n.startsWith("."));

  const classFiles = dirents
    .filter((d) => d.isFile())
    .map((d) => d.name)
    .filter((n) => n !== "book"); // keep behavior from before

  // also read files inside optional 'book' folder (kept as before)
  const bookDir = path.join(classDir, "book");
  let bookFiles = [];
  if (fs.existsSync(bookDir)) {
    bookFiles = fs.readdirSync(bookDir).filter((f) => !f.startsWith("."));
  }

  return (
    <main className="min-h-screen p-6">
      <Link href="/" className="text-current hover:underline">
        ← Назад
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-6">
        Матеріали для {className} класу
      </h1>

      {/* Subfolders */}
      {subfolders.length > 0 && (
        <>
          <h2 className="text-lg font-semibold mb-3">Папки</h2>
          <ul className="mb-6">
            {subfolders.map((folder) => (
              <li key={folder} className="mb-2">
                <Link
                  href={`/${className}/${encodeURIComponent(folder)}`}
                  className="block py-3 px-4 rounded-lg shadow hover:opacity-95 bg-[color:var(--background)] text-[color:color-mix(in srgb,var(--foreground) 85%, white 15%)]"
                >
                  📁 {folder}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Files in class root */}
      <h2 className="text-lg font-semibold mb-3">Файли</h2>
      {classFiles.length > 0 ? (
        <ul className="mb-6">
          {classFiles.map((file, idx) => (
            <li key={idx} className="mb-2">
              <a
                href={`/${className}/${encodeURIComponent(file)}`}
                download
                className="block px-4 py-3 bg-[color:var(--surface)] hover:bg-[color:var(--surface-hover)] rounded-lg shadow text-[color:color-mix(in srgb,var(--foreground) 85%, white 15%)]"
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
    </main>
  );
}
