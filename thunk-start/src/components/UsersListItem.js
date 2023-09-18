import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  return (
    <div>
      <div className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          <div className="flex flex-row items-center justify-between">
            <Button loading={isLoading} onClick={handleClick} className="mr-3">
              <GoTrashcan />
            </Button>
            {error && <div>error deleting user</div>}
            {user.name}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UsersListItem;
