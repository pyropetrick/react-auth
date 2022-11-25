import { observer } from "mobx-react-lite";
import userStore from "../store/userStore";
import { Icon } from "./Icon";

export const Toolbar = observer(() => {
  const { usersSelect } = userStore;
  const getColor = (color: string) => (usersSelect.length ? color : "grey");
  const handleLock = () => {};
  const handleUnlock = () => {};
  const handleDelete = () => {};
  return (
    <div className="my-4 d-flex justify-content-center">
      <Icon iconName="Lock" color={getColor("dark")} size={30} onClick={handleLock} />
      <Icon iconName="Unlock" color={getColor("blue")} size={30} onClick={handleUnlock} />
      <Icon iconName="Trash" color={getColor("red")} size={30} onClick={handleDelete} />
    </div>
  );
});
