import { Backlog } from "../../ui/add-card";

type Props = {};

const CardArea = ({}: Props) => {
  return (
    <div className="flex gap-4">
      <Backlog />
      <Backlog />
      <Backlog />
    </div>
  );
};

export { CardArea };
