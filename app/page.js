import Link from "next/link";

export default function Home() {
  const classes = [
    { title: "5", class: "05" },
    { title: "6", class: "06" },
    { title: "8", class: "08" },
    { title: "9", class: "09" },
    { title: "10", class: "10" },
    { title: "11", class: "11" },
  ]; // тут можна додати будь-які класи
  // const classes = ["08", "09", "10", "11"]; // тут можна додати будь-які класи

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-2">
      <h1 className="text-3xl font-bold mb-6">Матеріали для навчання</h1>
      <div className="grid grid-cols-2 gap-4">
        {classes.map((cls) => (
          <Link
            key={cls.class}
            href={`/${cls.class}`}
            className="bg-orange-500 hover:bg-orange-600 text-black font-semibold py-3 px-6 rounded-2xl shadow-lg text-center"
          >
            {cls.title} клас
          </Link>
        ))}
      </div>
    </main>
  );
}
