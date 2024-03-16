import { useEffect, useState } from "react";
import WebApiUser from "../../../../api/users";

const Select = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await WebApiUser.getUsers();
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <label className="relative block mx-1">
      <select
        name="userId"
        // onChange={(value) => console.log(value.target.value)}
        className=" bg-white border border-slate-300 w-40 rounded-md py-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      >
        <option className="text-black" selected>
          Todos
        </option>
        {users.length > 0 &&
          users.map((user) => {
            return (
              <option key={user.id} value={user.id} className="text-black">
                {user.name}
              </option>
            );
          })}
      </select>
    </label>
  );
};

export default Select;
