import { Layout } from "../components/layout";
import { FilterBar } from "../components/module/filter-bar";
import { Hero } from "../components/module/hero";

function Home() {
  return (
    <Layout>
      <div className="">
        <Hero />
        <FilterBar />
      </div>
    </Layout>
  );
}

export default Home;
