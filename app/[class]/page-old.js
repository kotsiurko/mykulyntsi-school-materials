import fs from "fs";
import path from "path";
import Link from "next/link";

export default function ClassPage({ params }) {
  const className = params.class;
  console.log(className);

  const folderPath = path.join(process.cwd(), "public", className);

  let files = [];
  try {
    files = fs.readdirSync(folderPath);
  } catch (error) {
    files = null;
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-6">
      <Link href="/" className="text-orange-400 hover:underline">
        ← Назад
      </Link>
      <h1 className="text-2xl font-bold mt-4 mb-6">
        Матеріали для {className.replace(/^0+/, "")} класу
      </h1>

      {!files ? (
        <p className="text-red-400">Матеріали для цього класу ще не додані.</p>
      ) : (
        <ul className="space-y-3">
          {files.map((file) => (
            <li key={file}>
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
      )}
    </main>
  );
}
