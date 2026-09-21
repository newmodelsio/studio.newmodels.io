import Image from "next/image";
import Filter from "../compoments/Filter";
import Header from "../compoments/Header";
import Footer from "../compoments/Footer";

export default function About() {
  return (
    <div className="bg-black text-white">
      <Header invert={true} />
      <div className="p-2 md:p-5 uppercase md:mt-10 md:max-w-[90%]">

        <div className="distort tracking-tight text-[24px] md:text-[70px] leading-[1.1] md:leading-[0.95]">
          <img className=" w-full max-w-[450px] p-5 pl-0 md:pl-5 float-right grayscale contrast-[2]" src="/802561812_18345948898265930_1114145004734290207_n.jpg" alt="" />

          <p>NEW MODELS STUDIO, LED BY <a href="https://www.instagram.com/cbcb2000/" target="_blank">CAROLINE BUSTA</a> &amp; @<a href="https://lilinter.net/" target="_blank">LILINTERNET</a>, SPECIALIZES IN ANALYZING &amp; COMMUNICATING THE EVOLUTION OF NETWORKED MEDIA. KNOWN FOR THEIR INFLUENTIAL TEXTS AND LECTURES, THEY PROVIDE CREATIVE CONSULTING, NARRATIVE STRATEGY, AND COPYWRITING FOR AN INTERNATIONAL LIST OF ARTISTS, INSTITUTIONS, AND BRANDS. THEY ARE CO-FOUNDERS OF THE AUDIO MAGAZINE &amp; COMMUNITY <a href="https://newmodels.io/" target="_blank">NEWMODELS.IO</a></p>    </div>

        <div className="distort uppercase my-14 md:my-20 leading-[1]">
          <div>Contact</div>
          <div className="text-[24px] md:text-[70px] hover:underline">
            <p><a href="mailto:INFO@NEWMODELS.IO">INFO@NEWMODELS.IO</a></p>
          </div>
        </div>

        <div className="distort uppercase gap-6 mb-2 my-14 md:my-20">
          <div>Selected Clients</div>
          <div className="md:columns-2 text-[24px]  md:text-3xl leading-[1.1]">
            <div className="pl-[20px] indent-[-20px] block">Adidas</div>
            <div className="pl-[20px] indent-[-20px] block"> Art | Basel</div>
            <div className="pl-[20px] indent-[-20px] block">Artforum</div>
            <div className="pl-[20px] indent-[-20px] block"> Balenciaga</div>
            <div className="pl-[20px] indent-[-20px] block"> Bundeskunsthalle Bonn</div>
            <div className="pl-[20px] indent-[-20px] block"> CTM Festival</div>
            <div className="pl-[20px] indent-[-20px] block"> Cura</div>
            <div className="pl-[20px] indent-[-20px] block"> Document </div>
            <div className="pl-[20px] indent-[-20px] block">Dubai Future Foundation</div>
            <div className="pl-[20px] indent-[-20px] block"> EU National Inst. for Culture </div>
            <div className="pl-[20px] indent-[-20px] block"> Global Art Forum</div>
            <div className="pl-[20px] indent-[-20px] block">Goethe Institute</div>
            <div className="pl-[20px] indent-[-20px] block"> Highsnobiety</div>
            <div className="pl-[20px] indent-[-20px] block"> Interview</div>
            <div className="pl-[20px] indent-[-20px] block">Kaleidoscope</div>
            <div className="pl-[20px] indent-[-20px] block">KW Inst. for Contemporary Art</div>
            <div className="pl-[20px] indent-[-20px] block"> Mercedes</div>
            <div className="pl-[20px] indent-[-20px] block"> MoMA</div>
            <div className="pl-[20px] indent-[-20px] block">Nike</div>
            <div className="pl-[20px] indent-[-20px] block">Novembre</div>
            <div className="pl-[20px] indent-[-20px] block"> Prada </div>
            <div className="pl-[20px] indent-[-20px] block">Serpentine</div>
            <div className="pl-[20px] indent-[-20px] block"> sub</div>
            <div className="pl-[20px] indent-[-20px] block"> Universal Music Group</div>
            <div className="pl-[20px] indent-[-20px] block"> Vogue</div>
            <div className="pl-[20px] indent-[-20px] block">Vogue Italia</div>
            <div className="pl-[20px] indent-[-20px] block"> Yuga Labs</div>
            <div className="pl-[20px] indent-[-20px] block"> 032c</div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
