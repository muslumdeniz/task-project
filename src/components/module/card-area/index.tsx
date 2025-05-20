import { Backlog } from "../../ui/add-card";

type Props = {};

const CardArea = ({}: Props) => {
  return (
    <div className="flex gap-4">
      <Backlog />
    </div>
  );
};

export { CardArea };
