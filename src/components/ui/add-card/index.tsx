import Icons from "../../ui/icons";
import { Card } from "../cards";

type Props = {};

const Backlog = ({}: Props) => {
  return (
    <div className="pt-4 w-[352px]">
      <div className="w-full px-2 py-4 min-h-screen bg-bg-gray rounded-lg">
        <div className="flex py-4 items-center">
          <h2 className=" body-2 text-gray-150">Backlog</h2>
          <div className="flex ml-auto gap-2">
            <Icons name="Plus" className="text-gray-150" size={28} />
            <Icons name="DotsHorizontal" className="text-gray-150" size={28} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Card
            title="Proje Teslimi"
            description="Proje teslim tarihi yaklaşıyor. Gerekli belgeleri ve dokümanları tamamlamayı unutmayın."
            image="/public/card.png"
            tags={[
              { label: "Öncelikli", color: "red" },
              { label: "UI", color: "blue" },
              { label: "Takip", color: "green" },
            ]}
            date="2025-06-10"
            countdown="3 gün kaldı"
            authorImage="https://randomuser.me/api/portraits/men/32.jpg"
            commentCount={5}
            fileCount={2}
            showMenu={true}
          />
          <Card
            title="Proje Teslimi"
            description="Proje teslim tarihi yaklaşıyor. Gerekli belgeleri ve dokümanları tamamlamayı unutmayın."
            image="/public/card.png"
            tags={[
              { label: "Öncelikli", color: "red" },
              { label: "UI", color: "blue" },
              { label: "Takip", color: "green" },
            ]}
            date="2025-06-10"
            countdown="3 gün kaldı"
            authorImage="https://randomuser.me/api/portraits/men/32.jpg"
            commentCount={5}
            fileCount={2}
            showMenu={true}
          />
        </div>
      </div>
    </div>
  );
};

export { Backlog };
