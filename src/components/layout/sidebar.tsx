import { Button } from "../ui/button";
import Icons from "../ui/icons";

const Sidebar = () => {
  return (
    <aside className="col-span-2 h-screen flex flex-col border-r border-gray-200 px-4">
      {/* ÜST KISIM */}
      <div className="py-4 border-b border-gray-200 h-16 flex items-center">
        <img className="h-10" src="/logo.png" alt="logo" />
      </div>

      {/* ORTA MENÜLER (scrollable) */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-4 mt-10">
        <div className="flex gap-3 items-center cursor-pointer">
          <Icons name="Element11" className="text-gray-100" size={18} />
          <p className="body-sm-medium text-gray-50">Dashboard</p>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <Icons name="Abstract26" className="text-gray-100" size={18} />
          <p className="body-sm-medium text-gray-50">Project</p>
          <Icons name="Down" size={20} className="ml-auto" />
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <Icons
            name="QuestionnaireTablet"
            className="text-gray-150"
            size={18}
          />
          <h2 className="body-sm-medium text-gray-50">Tasks</h2>
          <span className="flex items-center justify-center body-xs bg-gray-200 text-gray-50 h-6 w-9 rounded-full ml-auto">
            10
          </span>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <Icons name="MessageText2" className="text-gray-100" size={18} />
          <h2 className="body-sm-medium text-gray-50">Messages</h2>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <Icons name="Profile2User" className="text-gray-100" size={18} />
          <h2 className="body-sm-medium text-gray-50">Users</h2>
        </div>
      </div>

      <div className="flex gap-3.5 items-center pt-4 border-t border-gray-200 pb-4">
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
