import { MagnifyingGlass, X } from "@phosphor-icons/react";

const InputSearch = (content) => {
  return (
    <label className="relative block mx-1">
      <span className="sr-only">Search</span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <MagnifyingGlass className="-mt-2" size={20} color="#bab5b5" />
      </span>
      <span
        onClick={() => (document.getElementsByName(content.name)[0].value = "")}
        className="absolute inset-y-0 right-0 flex items-center pl-2 hover:cursor-pointer"
      >
        <X className="-mt-1 mr-2" size={18} color="#bab5b5" />
      </span>
      <input
        className=" placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder={content.text}
        type="text"
        name={content.name}
      />
    </label>
  );
};

export default InputSearch;
