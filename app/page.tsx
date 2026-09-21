
import Image from "next/image";
import Filter from "./compoments/Filter";
import Header from "./compoments/Header";
import Footer from "./compoments/Footer";
import { client } from "@/sanity/lib/client";
import Feed from "./compoments/Feed";


async function getHomePage() {
  return await client.fetch(`
  *[_type == "home" && _id == "home"][0]
`)
}

export default async function Home() {

  const content = await getHomePage()

  return (
    <>
      <Header invert={false} />
      <Feed content={content} />
      <Footer />
    </>
  );
}
