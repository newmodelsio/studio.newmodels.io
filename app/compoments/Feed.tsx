'use client'

import { PortableText } from "next-sanity";
import Filter from "./Filter";
import { useState } from "react";

export default function Feed({ content }: { content: any }) {

  const [filter, setFilter] = useState(
    content.categories.map((category: any) => category.slug)
  )

  return (
    <>

      <div className="p-2 pt-10 md:p-5 my-10">

        <Filter categories={content.categories} setFilter={setFilter} filter={filter} />

        <div className="flex flex-col gap-5 md:gap-10 overflow-hidden md:overflow-visible max-w-[90%] md:max-w-[80%] uppercase tracking-tight md:tracking-tighter text-[40px] md:text-[80px] 2xl:text-[90px] leading-[0.93]">
          {content.home.section
            .filter((item: any) => filter.includes(item.category?.slug))
            .map((item: any, index: any) => (
              <div key={index}>
                {item.link ? <a href={`${item.link}`} target="_blank" className="distort relative hover:underline decoration-4 md:decoration-auto">
                  <PortableText value={item.body} />
                  {item.tag &&
                    <span className="h-full relative">
                      <span className="absolute m-2 p-1 bg-black text-white text-[14px] tracking-normal">
                        {item.tag}
                      </span>
                    </span>
                  }
                </a>
                  :
                  <div className="distort">
                    <span className="text-black bg-black inline-block my-1 mr-5">XXXXXXX</span>
                    <span className="text-black bg-black inline-block my-1 mr-5">XXXXXX</span>
                    <span className="text-black bg-black inline-block my-1 mr-5">XXX</span>
                    <span className="text-black bg-black inline-block my-1 mr-5">XXX</span>
                    <span className="text-black bg-black inline-block my-1 mr-5">XXXX</span>
                    <span className="text-black bg-black inline-block my-1 mr-5">{item.title}</span>
                  </div>}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
