import { Power, WebhooksLogo } from "@phosphor-icons/react";
import { useState } from "react";
import { connect } from "react-redux";
import { LogOut } from "../../../redux/webDuck";

const NavBar = ({ ...props }) => {
  const [menu, setMenu] = useState(false);

  const logOut = () => {
    console.log("LLEGAAA");
    props
      .LogOut()
      .then((result) => {
        console.log("🚀 ~ logOut ~ result:", result);
      })
      .catch(() => {});
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <WebhooksLogo size={32} color="#bb3a3a" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="blog"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Blog
                </a>
                {props.user && props.user.role == "admin" && (
                  <a
                    href="users"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Usuarios
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setMenu(menu ? false : true)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              {menu && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <a
                    onClick={() => logOut()}
                    className="hover:cursor-pointer block px-2 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    <div className="flex justify-center text-red-600">
                      <Power size={20} className="mx-2" /> Cerrar sesion
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="blog"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Blog
          </a>
          <a
            href="users"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Usuarios
          </a>
        </div>
      </div>
    </nav>
  );
};

const mapState = (state) => {
  return {
    user: state.globalStore.user,
  };
};

export default connect(mapState, { LogOut })(NavBar);
