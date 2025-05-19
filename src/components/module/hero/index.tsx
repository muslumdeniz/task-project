import { Button } from "../../ui/button";
import Icons from "../../ui/icons";
import { ProfileAvatar } from "../../ui/profile-avatar";

type Props = {};

const Hero = ({}: Props) => {
  return (
    <section className="flex h-72   relative">
      <div>
        <div className="flex items-center gap-1">
          <p className=" body-xs text-gray-100">Project</p>
          <Icons name="Right" size={14} className="text-gray-150" />
          <p className=" body-xs text-gray-100">International</p>
          <Icons name="Right" size={14} className="text-gray-150" />
          <p className="body-xs text-gray-50">Product Web</p>
        </div>
        <div>
          <h2 className="font-bold text-4xl text-gray">My Tasks</h2>
        </div>
      </div>
      <div className="flex items-center gap-2  ml-auto mb-auto">
        <Button variant="outline" prefixIcon="Setting2" />
        <Button variant="outline" prefixIcon="DotsHorizontal" />
        <Button
          prefixIcon="Plus"
          label="New Task"
          size="sm"
          iconSize={15}
          className="h-10"
        />
      </div>

      <div className="absolute bottom-8 left-auto ">
        <ProfileAvatar />
      </div>
    </section>
  );
};

export { Hero };
