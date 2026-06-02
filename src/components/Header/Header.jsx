import Icon from "@mdi/react";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";
import { mdiLoginVariant } from "@mdi/js";
import { useState } from "react";
import Modal from "./../Modal/Modal";
import LoginForm from "../forms/LoginForm";

const Header = () => {
  const { user, error } = useSelector((state) => state.user);
  const [isShowModal, setIsShowModal] = useState(false);
  const handleLogin = () => {
    setIsShowModal(true);
  };
  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <header>
      <div>
        {user ? (
          "Welcome, " + user.username
        ) : (
          <Icon size={1} path={mdiLoginVariant} onClick={handleLogin} />
        )}
      </div>
      <Menu />
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <LoginForm closeModal={closeModal} />
        </Modal>
      )}
      {error && <Modal closeModal={closeModal}>error</Modal>}
    </header>
  );
};

export default Header;
