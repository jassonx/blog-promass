import { MagnifyingGlass } from "@phosphor-icons/react";
import InputSearch from "./components/inputSearch";
import Select from "./components/select";

const Search = () => {
  const filter = (event) => {
    event.preventDefault();
    const data = Array.from(event.target.elements)
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {}
      );
    console.log("🚀 ~ filter ~ data:", data);
  };

  return (
    <form onSubmit={filter}>
      <div className="flex justify-center spa ">
        <div className={"flex mx-2 w-2/5"}>
          <InputSearch text="Titulo" name="title" />
          <InputSearch text="Contenido" name="content" />
          <Select text="Autor" name="user" />
        </div>
        <div className=" flex justify-between ">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 px-6 mx-2"
          >
            <MagnifyingGlass size={20} />
          </button>
          <button
            type="submit"
            className="flex justify-center bg-blue-500 text-white rounded-md p-2 px-2"
          >
            Nuevo post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Search;
