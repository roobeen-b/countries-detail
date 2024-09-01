import CountryList from "@/components/CountryList";
import Input from "@/components/Input";
import Select from "@/components/Select";

export default function Home() {
  return (
    <main className="flex flex-col p-4 md:p-16 pt-4">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full">
        <Input />
        <Select />
      </div>

      <div className="mt-6">
        <CountryList />
      </div>
    </main>
  );
}
