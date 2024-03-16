const UserForm = ({ saveUser, setViewForm }) => {
  return (
    <div className=" flex justify-center mt-4 w-full">
      <div className="mb-4">
        <form onSubmit={saveUser} className="bg-white shadow-md r">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Nombre
            </label>
            <input
              className=" rounded-md appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="name"
              type="text"
              placeholder="nombre"
              required
            />
          </div>
          <div className="mb-6 mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="rounded-md shadow appearance-none border border-red-500 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="text"
              placeholder="Contraseña"
              required
            />
          </div>
          <div className="mb-6 mt-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Rol
            </label>
            <select
              name="role"
              className=" bg-white border border-red-500 w-full rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            >
              <option value="user" className="text-black" selected>
                Usuario
              </option>
              <option value="admin" className="text-black">
                Administrador
              </option>
            </select>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              className="rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Guardar
            </button>
            <button
              onClick={() => setViewForm(false)}
              className="rounded-md btn-red text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
