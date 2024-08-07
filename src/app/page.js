import SearchFunction from "@/Components/SearchFunction";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-12 p-24">
      <div className="text-center text-xl ">
        Homepage
      </div>
      <SearchFunction></SearchFunction>
    </main>
  );
}
