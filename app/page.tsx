import Header from "./compoments/Header";
import Footer from "./compoments/Footer";
import { client } from "@/sanity/lib/client";
import Feed from "./compoments/Feed";

export const revalidate = 10

async function getHomePage() {
  return await client.fetch(`
  {
      "home": *[_id == "home"][0] {
        ...,
        section[] {
          ...,
          category-> {
            title,
            "slug": slug.current
          }
        }
      },
     "categories": *[_type == "category"] {
        title,
        "slug": slug.current
      }
    }
`, {},
    {
      next: { tags: ['tag'] }
    })
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
