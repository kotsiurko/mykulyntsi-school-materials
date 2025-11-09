import fs from "fs";
import path from "path";
import Link from "next/link";

export default function FolderPage({ params }) {
  const grade = params?.grade;
  const folder = params?.folder;

  if (!grade || !folder) {
    return (
      <main className="min-h-screen p-6">
        <p className="text-red-600">Невірний запит: відсутній параметр.</p>
        <Link href="/" className="text-current hover:underline">
          ← Назад
        </Link>
      </main>
    );
  }

  const folderDir = path.join(process.cwd(), "public", grade, folder);
  let files = [];
  try {
    if (fs.existsSync(folderDir)) {
      files = fs
        .readdirSync(folderDir, { withFileTypes: true })
        .filter((d) => d.isFile())
        .map((d) => d.name)
        .filter((n) => !n.startsWith("."));
    }
  } catch (err) {
    console.error("Error reading folder:", err);
  }

  return (
    <main className="min-h-screen p-6">
      <Link href={`/${grade}`} className="text-current hover:underline">
        ← Назад
      </Link>

      <h1 className="text-2xl font-bold mt-4 mb-6">
        {folder} — {grade} клас
      </h1>

      {files.length > 0 ? (
        <ul>
          {files.map((file, idx) => (
            <li key={idx} className="mb-2">
              <a
                href={`/${grade}/${encodeURIComponent(
                  folder
                )}/${encodeURIComponent(file)}`}
                download
                className="block px-4 py-3 bg-[color:var(--surface)] hover:bg-[color:var(--surface-hover)] rounded-lg shadow text-[color:color-mix(in srgb,var(--foreground) 85%, white 15%)]"
              >
                {file}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[color:var(--muted)]">Файлів у папці немає</p>
      )}
    </main>
  );
}
