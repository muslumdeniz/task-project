import { Button } from "../../ui/button";
import Icons from "../../ui/icons";
import { Input } from "../../ui/input";

type Props = {};

const FilterBar = ({}: Props) => {
  return (
    <section className="flex  gap-1  relative">
      <div className="flex items-center h-20 border-y border-gray-200  relative w-full">
        {/* Sol div */}
        <div>
          <Input
            icon="Magnifier"
            className="text-gray-150 border-gray-200 shadow h-[40px] w-[200px] mr-4"
          />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <div className="flex items-center gap-2.5">
            <h2 className="body-sm text-gray">Subtasks</h2>
            <Icons name="Down" className="text-gray-50" />
          </div>
          <div className="flex items-center gap-2.5">
            <h2 className="body-sm text-gray">Me</h2>
            <Icons name="Down" className="text-gray-50" />
          </div>
          <div className="flex items-center gap-2.5">
            <h2 className="body-sm text-gray">Assignees</h2>
            <Icons name="Down" className="text-gray-50" />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 pr-2 ">
          <Button variant="outline" prefixIcon="TextalignCenter" />
          <Button variant="outline" prefixIcon="TextalignCenter" />
        </div>
        <div className="flex items-center">
          <Button
            variant="outline"
            prefixIcon="Category"
            className=" rounded-r-none"
          />
          <Button
            variant="outline"
            prefixIcon="Abstract14"
            className=" rounded-l-none"
          />
        </div>
      </div>
    </section>
  );
};

export { FilterBar };
