import { Layout } from "../components/layout";
import { CardArea } from "../components/module/card-area";

import { FilterBar } from "../components/module/filter-bar";
import { Hero } from "../components/module/hero";

function Home() {
  return (
    <Layout>
      <div className="p-8">
        <Hero />
        <FilterBar />
        <CardArea />
      </div>
    </Layout>
  );
}

export default Home;
