import Button from "@/components/Button";
import CountryInfo from "@/components/CountryInfo";

const CountryDetailPage = () => {
  return (
    <div className="p-4 md:p-16 lg:px-24 pt-4 md:h-[calc(100vh-5rem)] font-semibold bg-very-light-gray dark:bg-very-dark-blue-dm text-very-dark-blue-lm dark:text-white">
      <Button title={"Back"} isBack={true} />
      <div className="mt-6">
        <CountryInfo />
      </div>
    </div>
  );
};

export default CountryDetailPage;
