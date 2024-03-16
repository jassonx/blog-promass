import { PlusCircle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import WebApiUser from "../../../api/users";
import { ExtractFormData } from "../../../utils/functions";
import MainLayout from "../../components/layout/MainLayout";
import TableUser from "./components/table";
import UserForm from "./components/userForm";

const Users = ({ ...props }) => {
  const navigate = useNavigate();
  const [viewForm, setViewForm] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (props.login == false) navigate("/login");
  }, [props.login]);

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

  const saveUser = async (event) => {
    try {
      event.preventDefault();
      const data = ExtractFormData(event);
      await WebApiUser.createUser(data);
    } catch (error) {
      console.log(error);
    } finally {
      getUsers();
      setViewForm(false);
    }
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-1 text-gray-50 gap-4 ">
        <div className="w-full flex justify-end p-4">
          <button
            type="button"
            onClick={() => setViewForm(true)}
            className="flex justify-end bg-blue-500 text-white rounded-md p-2 px-2"
          >
            <PlusCircle size={25} />
            Nuevo usuario
          </button>
        </div>
        {viewForm && <UserForm saveUser={saveUser} setViewForm={setViewForm} />}
        <div className="flex justify-center mt-4">
          <TableUser users={users} setUsers={setUsers} />
        </div>
      </div>
    </MainLayout>
  );
};

const mapState = (state) => {
  return {
    login: state.globalStore.login,
  };
};

export default connect(mapState)(Users);
