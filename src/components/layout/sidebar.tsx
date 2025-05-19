import { Button } from "../ui/button";
import Icons from "../ui/icons";

type Props = {};

const Sidebar = ({}: Props) => {
  return (
    <aside className="col-span-2 h-screen flex flex-col border-r border-gray-200 px-4 pb-4">
      <div className="py-4 border-b h-16 border-gray-200">
        <img className="h-10" src="/logo.png" alt="logo" />
      </div>

      <div className="flex-1 flex flex-col mt-10 gap-4">
        <div className="flex gap-3">
          <Icons name="Element11" className="text-gray-100" size={18} />
          <p className="body-sm-medium text-gray-50">Dashboard</p>
        </div>
        <div className="flex gap-3">
          <Icons name="Abstract26" className="text-gray-100" size={18} />
          <p className="body-sm-medium text-gray-50">Project</p>
          <Icons name="Down" size={20} className="ml-auto" />
        </div>
        <div className="flex gap-3">
          <Icons
            name="QuestionnaireTablet"
            className="text-gray-150"
            size={18}
          />
          <h2 className="body-sm-medium text-gray-50">Tasks</h2>
          <span className="flex items-center justify-center body-xs bg-gray-200 text-gray-50 h-6 w-9 rounded-full ml-auto ">
            10
          </span>
        </div>
        <div className="flex gap-3">
          <Icons name="MessageText2" className="text-gray-100" size={18} />
          <h2 className="body-sm-medium text-gray-50">Messages</h2>
        </div>
        <div className="flex gap-3">
          <Icons name="Profile2User" className="text-gray-100" size={18} />
          <h2 className="body-sm-medium text-gray-50">Users</h2>
        </div>
      </div>

      <div className="flex gap-3.5 items-center pt-4 m border-t border-gray-200">
        <img
          className="w-10 h-10 rounded-full"
          src="/avatar.jpg"
          alt="avatar"
        />
        <div className="flex flex-col">
          <span className="body-sm-medium text-gray">Donye</span>
          <span className="body-xs text-gray-100">collins@brees.com</span>
        </div>
        <Button
          className="ml-auto"
          variant="outline"
          color="gray"
          isIconButton
          prefixIcon="DotsHorizontal"
        />
      </div>
    </aside>
  );
};

export { Sidebar };
