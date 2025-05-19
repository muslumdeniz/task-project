import Icons from "../../ui/icons";

type Props = {};

const Backlog = ({}: Props) => {
  return (
    <div className="pt-4">
      <div className="w-80 px-2 py-4 min-h-screen bg-bg-gray rounded-lg">
        <div className="flex items-center">
          <h2 className=" body-2 text-gray-150">Backlog</h2>
          <div className="flex ml-auto gap-2">
            <Icons name="Plus" className="text-gray-150" size={28} />
            <Icons name="DotsHorizontal" className="text-gray-150" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Backlog };
