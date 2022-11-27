import { observer } from "mobx-react-lite";
import userStore from "../store/userStore";
import { Icon } from "./Icon";

export const Toolbar = observer(() => {
  const { usersSelect, deleteUser, blockUser, unBlockUser, logoutUser } = userStore;
  const getColor = (color: string) => (usersSelect.length ? color : "grey");
  const handleLock = async () => {
    if (usersSelect.length) {
      blockUser(usersSelect);
      logoutUser(usersSelect);
    }
  };
  const handleUnlock = async () => {
    if (usersSelect.length) {
      unBlockUser(usersSelect);
    }
  };
  const handleDelete = async () => {
    if (usersSelect.length) {
      deleteUser(usersSelect);
      logoutUser(usersSelect);
    }
  };
  return (
    <div className="my-4 d-flex justify-content-center">
      <Icon iconName="Lock" color={getColor("dark")} size={30} onClick={handleLock} />
      <Icon iconName="Unlock" color={getColor("blue")} size={30} onClick={handleUnlock} />
      <Icon iconName="Trash" color={getColor("red")} size={30} onClick={handleDelete} />
    </div>
  );
});
