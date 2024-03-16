import { Trash } from "@phosphor-icons/react";
import { connect } from "react-redux";
import WebApiUser from "../../../../api/users";

const TableUser = ({ users = [], setUsers, ...props }) => {
  const remove = async (id) => {
    try {
      const response = await WebApiUser.deleteUser(id);
      console.log("🚀 ~ remove ~ response:", response);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const User = ({ data }) => {
    console.log("🚀 ~ User ~ data:", data);
    return (
      <>
        {data.map((user, i) => {
          return (
            <tr key={i}>
              <td>{user.name}</td>
              <td>
                {props.user.id != user.id && (
                  <Trash
                    size={30}
                    color="red"
                    onClick={() => remove(user.id)}
                  />
                )}
              </td>
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <table className="table-fixed w-4/5 roun">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <User data={users} />
      </tbody>
    </table>
  );
};

const mapState = (state) => {
  return {
    user: state.globalStore.user,
  };
};

export default connect(mapState)(TableUser);
