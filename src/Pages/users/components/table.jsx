import { Trash } from "@phosphor-icons/react";
import { Table } from "antd";
import { connect } from "react-redux";
import WebApiUser from "../../../../api/users";

const TableUser = ({ users = [], setUsers, ...props }) => {
  const remove = async (id) => {
    try {
      const response = await WebApiUser.deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      key: "name",
      title: "Nombre",
      dataIndex: "name",
    },
    {
      key: "action",
      title: "Acciones",
      render: (user) => {
        return (
          props.user?.id != user.id && (
            <Trash size={30} color="red" onClick={() => remove(user.id)} />
          )
        );
      },
    },
  ];
  return <Table columns={columns} dataSource={users} />;
};

const mapState = (state) => {
  return {
    user: state.globalStore.user,
  };
};

export default connect(mapState)(TableUser);
