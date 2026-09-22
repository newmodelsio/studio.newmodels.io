
import { client } from "@/sanity/lib/client";

import Image from "next/image";
import Header from "../compoments/Header";
import Footer from "../compoments/Footer";
import { PortableText } from "next-sanity";

async function getAboutPage() {
  return await client.fetch(`
      *[_type == "about" && _id == "about"][0]{
      ...,
      bioImage{
          asset->{
            url
          }
        }
      }
    `,
    {},
    {
      next: { tags: ['sanity'] }
    })
}

export default async function About() {

  const data = await getAboutPage()

  return (
    <div className="bg-black text-white">

      <Header invert={true} />

      <div className="p-2 md:p-5 uppercase md:mt-10 md:max-w-[90%]">

        <div className="distort tracking-tight text-[24px] md:text-[70px] leading-[1.1] md:leading-[0.95]">
          <Image src={data.bioImage.asset.url}
            width={330}
            height={500}
            alt="NM Studio portrait"
            className="w-full md:max-w-[650px] p-5  float-right grayscale contrast-[2]" />

          <PortableText value={data.body} />
        </div>

        <div className="distort uppercase my-14 md:my-20 leading-[1]">
          <div>Contact</div>
          <div className="text-[24px] md:text-[70px] hover:underline">
            <p><a href={`mailto:${data.contact}`}>{data.contact}</a></p>
          </div>
        </div>

        <div className="distort uppercase gap-6 mb-2 my-14 md:my-20">
          <div>Selected Clients</div>
          <div className="md:columns-2  pl-5 [&>p]:-indent-5 text-[24px]  md:text-3xl leading-[1.1]">
            <PortableText value={data.clients} />
          </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}
