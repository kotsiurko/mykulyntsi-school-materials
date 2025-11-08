import Link from "next/link";

export default function Home() {
  const infClasses = [
    { title: "5", grade: "inf-05" },
    { title: "6", grade: "inf-06" },
    { title: "8", grade: "inf-08" },
    { title: "9", grade: "inf-09" },
    { title: "10", grade: "inf-10" },
    { title: "11", grade: "inf-11" },
  ]; // тут можна додати будь-які класи
  const phClasses = [
    { title: "9", grade: "ph-09" },
    { title: "10", grade: "ph-10" },
  ]; // тут можна додати будь-які класи

  return (
    /* removed fixed bg/text so it inherits layout's --background / --foreground */
    <main className="min-h-screen flex flex-col items-center justify-center p-2">
      <h2 className="text-3xl font-bold mb-6">Інформатика</h2>
      <div className="grid grid-cols-2 gap-4">
        {infClasses.map((cls) => (
          <Link
            key={cls.grade}
            href={`/${cls.grade}`}
            className="bg-orange-500 hover:bg-orange-600 text-current font-semibold py-3 px-6 rounded-2xl shadow-lg text-center"
          >
            {cls.title} клас
          </Link>
        ))}
      </div>
      <hr className="my-8 w-full border-t border-gray-300" />

      <h2 className="text-3xl font-bold mb-6">Фізика</h2>
      <div className="grid grid-cols-2 gap-4">
        {phClasses.map((cls) => (
          <Link
            key={cls.grade}
            href={`/${cls.grade}`}
            className="bg-orange-500 hover:bg-orange-600 text-current font-semibold py-3 px-6 rounded-2xl shadow-lg text-center"
          >
            {cls.title} клас
          </Link>
        ))}
      </div>
    </main>
  );
}
