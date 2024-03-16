const PostForm = ({ savePost, setViewForm }) => {
  return (
    <div className=" flex justify-center mt-4 w-full">
      <div>
        <form onSubmit={savePost} className="bg-white shadow-md r">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Titulo
            </label>
            <input
              className=" rounded-md appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              placeholder="titulo"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contenido
            </label>
            <textarea
              className="rounded-md shadow appearance-none border border-red-500 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              name="content"
              type="text"
              rows={10}
              placeholder="Contenido..."
              required
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <button
              className="rounded-md bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Publicar
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

export default PostForm;
