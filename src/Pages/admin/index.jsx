import MainLayout from "../../components/layout/MainLayout";

const Users = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 text-gray-50 gap-4 w-3/4">
        <div className="flex justify-center mt-10 border-dashed border-2 bord p-10">
          <span className="text-gray-300 text-3xl font-bold">
            No hay contenido
          </span>
        </div>
      </div>
    </MainLayout>
  );
};

export default Users;
