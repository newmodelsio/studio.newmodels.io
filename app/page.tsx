'use client'

import Image from "next/image";
import Filter from "./compoments/Filter";
import Header from "./compoments/Header";
import Footer from "./compoments/Footer";
import { useState } from "react";

export default function Home() {

  const [filter, setFilter] = useState("texts, lectures, special-projects")

  const content = [
    {
      "text": "The Online Marketplace of Ideas, \"Strange Rules,\" Palazzo Diedo | Berggruen, Venice, 2026",
      "url": "https://berggruenarts.org/en/exhibitions/current-exhibitions-palazzo-diedo/current-exhibitions-palazzo-diedo-strange-rules",
      "category": "special-projects",
      "tag": null
    },
    {
      "text": "\"Will AI Slop Kill Culture\" w/ Simon Denny & Marc Spiegler, DLD* Munich Conference, 2026",
      "url": "https://www.youtube.com/watch?v=3mAW5swMOME",
      "category": "lectures",
      "tag": null
    },
    {
      "text": "OTTOLINGER",
      "url": null,
      "category": "special-projects",
      "tag": null
    },
    {
      "text": "sub / Niklas Bildstein Zaar, \"Spatial Intelligence\" profile—Capsule 4, 2025",
      "url": "https://capsule.global/products/capsule-issue-4-sub-spatial-intelligence",
      "category": "texts",
      "tag": "url"
    },
    {
      "text": "MoMA R&D Salon 51 | Off the Record: damnatio memoriae, 2024",
      "url": "https://www.youtube.com/live/pWHaRx-Ir34?si=EhO_WtK5Nae1rpPu&t=1638",
      "category": "lectures",
      "tag": "URL"
    },
    {
      "text": "Holly Herndon & Mat Dryhurst, All Media Is Training Data, coeditor—Serpentine / Koenig, 2024",
      "url": "https://shop.serpentinegalleries.org/products/holly-herndon-mat-dryhurst-all-media-is-training-data",
      "category": "texts",
      "tag": "url"
    },
    {
      "text": "sub / Balenciaga",
      "url": null,
      "category": "texts",
      "tag": null
    },
    {
      "text": "\"Hallucinating Sense in the Era of Infinity Content\"—Document SS 2024",
      "url": "https://www.documentjournal.com/2024/05/technical-images-film01-angelicism-art-showtime-true-detective-shein/",
      "category": "texts",
      "tag": "URL"
    },
    {
      "text": "Trevor Paglen, \"Hide the Real, Show the False\" panel—n.b.k. 2023",
      "url": "https://www.nbk.org/en/diskurs/panel-discussion-paglen",
      "category": "",
      "tag": "VIDEO"
    },
    {
      "text": "\"Influencing the Void: How the Artworld Lost the Thread\"—Kaleidoscope SS 2020",
      "url": "https://studio.newmodels.io/media/pages/home/influencing-the-void-how-the-artworld-lost-the-thread-kaleidoscope-ss-2020/3c825cba0f-1728215671/2020_kaleidoscopess_influencingthevoid.pdf",
      "category": "texts",
      "tag": "pdf"
    },
    {
      "text": "Kevin Munger on Vilém Flusser's 1978 Communicology: Mutations in Human Relations—NM 2023",
      "url": "https://www.youtube.com/watch?v=EpVTEoqUCbs&t=67s",
      "category": "special-projects",
      "tag": "VIDEO"
    },
    {
      "text": "Universal Music Group",
      "url": null,
      "category": "special-projects",
      "tag": null
    },
    {
      "text": "\"The internet didn't kill counterculture, you just won't find it on Instagram\" (Dark Forest)—Document AW 2020/21",
      "url": "https://www.documentjournal.com/2021/01/the-internet-didnt-kill-counterculture-you-just-wont-find-it-on-instagram/",
      "category": "texts",
      "tag": "url"
    },
    {
      "text": "Intvw w/ Harmony Korine, \"Cosmic America\"—Kaleidoscope 43, FW2023",
      "url": "https://studio.newmodels.io/media/pages/home/cosmic-america-intvw-w-harmony-korine-kaleidoscope-2023/70490edf01-1724172405/2023_kaleidoscope43_lilinternet_harmony-korine.pdf",
      "category": "texts",
      "tag": "PDF"
    },
    {
      "text": "\"Future of Critique (collapse of linear media)\"—Bundeskunsthalle Bonn 2022",
      "url": "https://www.youtube.com/watch?si=jk5KHhLch4Im9Otf&v=DCYqtuUPOQ0&feature=youtu.be",
      "category": "lectures",
      "tag": "VIDEO"
    },
    {
      "text": "Bootcut Boys, Illegal Generation (Vol. 1) Mixtape—NM 2024",
      "url": "https://www.patreon.com/posts/105394093?pr=true",
      "category": "special-projects",
      "tag": "URL"
    },
    {
      "text": "\"Chains of Desire\" in Anna Uddenberg: Premium Economy—Kunsthalle Mannheim/Distanz 2023",
      "url": "https://www.distanz.de/en/anna-uddenberg/premium-economy",
      "category": "texts",
      "tag": "URL"
    },
    {
      "text": "Mercedes Future Research Lab",
      "url": null,
      "category": "",
      "tag": null
    },
    {
      "text": "\"Understanding Predicting Media\"—Global Art Forum 16, Dubai, 2023",
      "url": "https://www.youtube.com/watch?v=LaOEbCO45eY&feature=youtu.be",
      "category": "lectures",
      "tag": "VIDEO"
    },
    {
      "text": "\"Best of 2021: Anne Imhof, Natures Mortes\"—Artforum Dec 2021",
      "url": "https://www.artforum.com/features/caroline-busta-and-lil-internet-on-anne-imhofs-nature-mortes-251076/",
      "category": "texts",
      "tag": "url"
    },
    {
      "text": "Intvw w/ Cory Arcangel—Art | Basel 2023",
      "url": "https://www.artbasel.com/stories/cory-arcangel-bots-youtube-art-basel-unlimited-2023-lisson-gallery?lang=en",
      "category": "texts",
      "tag": "URL"
    },
    {
      "text": "Intvw w/ Jordan Wolfson—Cura 41, 2023",
      "url": "https://curamagazine.com/digital/jordan-wolfson-2/",
      "category": "texts",
      "tag": "URL"
    },
    {
      "text": "PRADA",
      "url": null,
      "category": "lectures",
      "tag": null
    },
    {
      "text": "\"No Futures\" in CryptoPunks: Free to Claim—Yuga Labs/Phaidon, 2024",
      "url": "https://www.phaidon.com/store/fashion-and-pop-culture/cryptopunks-free-to-claim-9781838669300/",
      "category": "texts",
      "tag": "URL"
    },
    {
      "text": "\"Notes on Collaboration\"—Kaleidoscope Manifesto, Paris 2019",
      "url": "https://web.archive.org/web/20200214163520/http://kaleidoscope.media/caroline-busta-notes-on-collaboration/",
      "category": "texts",
      "tag": "url"
    },
    {
      "text": "\"Body Con\" in Bernadette Corporation: 2000 Wasted Years—Koenig, 2014",
      "url": "https://studio.newmodels.io/media/pages/home/body-con-bernadette-corporation-2000-wasted-years/4935296dc2-1728316948/2014_bernadetteco_2kwastedyrs_busta.pdf",
      "category": "texts",
      "tag": "pdf"
    },
    {
      "text": "Richard Kennedy, \"Fubu Fukú\"—Trauma Bar und Kino 2020",
      "url": "https://www.youtube.com/watch?v=LW_Y4x-dckc",
      "category": "special-projects",
      "tag": "VIDEO"
    },
    {
      "text": "NIKE",
      "url": null,
      "category": "",
      "tag": null
    },
    {
      "text": "\"Dis Is Back in Berlin with Everything but the World\"—Interview 2023",
      "url": "https://www.interviewmagazine.com/art/dis-collective-is-back-in-berlin-with-everything-but-the-world",
      "category": "texts",
      "tag": "URL"
    },
    {
      "text": "\"The Internet\" perfume—Highsnobiety 2021",
      "url": "https://www.highsnobiety.com/p/new-models-internet-perfume/",
      "category": "special-projects",
      "tag": "URL"
    },
    {
      "text": "\"HSTRY2\" for \"At the End of History\"—AA School of Architecture 2022",
      "url": "https://www.youtube.com/watch?t=4908&v=WyKyJLmI6w0&feature=youtu.be",
      "category": "lectures",
      "tag": "VIDEO"
    }
  ]
  return (
    <>
      <Header invert={false} />

      <div className="p-2 pt-10  md:p-5 my-10 ">

        <Filter setFilter={setFilter} filter={filter} />

        <div className="flex flex-col gap-5 md:gap-10 overflow-hidden md:overflow-visible max-w-[90%] md:max-w-[80%] uppercase tracking-tight md:tracking-tighter text-[40px] md:text-[80px] 2xl:text-[90px] leading-[0.93]">
          {content.filter((item) => filter.includes(item.category)).map((item, index) => (
            <div key={index}>
              {item.url ? <a href={`${item.url}`} target="_blank" className="distort relative hover:underline decoration-4 md:decoration-auto">
                {item.text}
                {item.tag &&
                  <span className="h-full relative">
                    <span className="absolute m-2 p-1 bg-black text-white text-[14px] tracking-normal">
                      {item.tag}
                    </span>
                  </span>
                }
              </a>
                :

                <div>
                  <span className="text-black bg-black inline-block my-1 mr-5">XXXXXXX</span>
                  <span className="text-black bg-black inline-block my-1 mr-5">XXXXXX</span>
                  <span className="text-black bg-black inline-block my-1 mr-5">XXX</span>
                  <span className="text-black bg-black inline-block my-1 mr-5">XXX</span>
                  <span className="text-black bg-black inline-block my-1 mr-5">XXXX</span>
                  <span className="text-black bg-black inline-block my-1 mr-5"> {item.text}</span>
                </div>}
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
}
