import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center bg-slate-950 text-center p-6">
      <h1 className="text-white lg:text-9xl text-7xl font-extrabold mb-3">404</h1>
      <h2 className="text-white lg:text-4xl text-2xl">
        Aradığınız Sayfa Bulunamadı veya Kaldırılmış.
      </h2>
      <Link href="/" className="text-green-400 mt-3 text-xl">
        Anasayfaya Dön
      </Link>
    </main>
  );
};

export default NotFoundPage;
