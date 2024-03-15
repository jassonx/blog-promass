const Select = () => {
  return (
    <label className="relative block mx-1">
      <select
        name="user"
        // onChange={(value) => console.log(value.target.value)}
        className=" bg-white border border-slate-300 w-40 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      >
        <option className="text-black" selected>
          Todos
        </option>
        <option className="text-black">1</option>
        <option className="text-black">2</option>
        <option className="text-black">3</option>
      </select>
    </label>
  );
};

export default Select;
