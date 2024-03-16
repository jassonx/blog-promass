import { MagnifyingGlass } from "@phosphor-icons/react";
import InputSearch from "./components/inputSearch";
import Select from "./components/select";

const Search = ({ setViewForm, filter }) => {
  return (
    <form onSubmit={filter}>
      <div className="flex justify-center spa ">
        <div className={"flex mx-2 w-2/5"}>
          <InputSearch text="Titulo" name="title" />
          <InputSearch text="Contenido" name="content" />
          <Select text="Autor" name="userId" />
        </div>
        <div className=" flex justify-between ">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 px-6 mx-2"
          >
            <MagnifyingGlass size={20} />
          </button>
          <button
            type="button"
            onClick={() => setViewForm(true)}
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
