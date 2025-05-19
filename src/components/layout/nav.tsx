import { Button } from "../ui/button";
import Icons from "../ui/icons";
import { Input } from "../ui/input";

type Props = {};

const Nav = ({}: Props) => {
  return (
    <nav className="pl-5">
      <div className="flex items-center h-16 border-b  border-gray-200 gap-5">
        <div className="flex items-center  gap-2 ">
          <Icons
            name="TextalignJustifycenter"
            className="text-primary"
            size={16}
          />
          <h2 className=" body-2-semibold text-primary">Board</h2>
        </div>
        <div className="flex items-center  gap-2 ">
          <Icons name="Element1" className="text-gray" size={16} />
          <h2 className="body-sm text-gray">List</h2>
        </div>
        <div className="flex items-center  gap-2 ">
          <Icons name="Calendar" className="text-gray" size={16} />
          <h2 className="body-sm text-gray">Calendar</h2>
        </div>
        <div className="flex items-center ml-auto mr-8">
          <Input
            icon="Magnifier"
            className=" text-gray-150 border-gray-200 shadow  h-[40px] w-[200px] mr-4 "
          />
          <Button
            variant="bare"
            className="text-gray-50"
            prefixIcon="Notification"
          />
          <Button
            variant="bare"
            className="text-gray-50"
            prefixIcon="Setting2"
          />
        </div>
      </div>
    </nav>
  );
};

export { Nav };
