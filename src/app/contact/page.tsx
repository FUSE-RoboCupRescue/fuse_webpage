import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="flex flex-col md:mx-[3rem] 2xl:mx-[25rem] my-5 font-helvetica">

        <h1 className="font-bold text-5xl md:text-7xl text-colors-black text-center">CONTACT</h1>
        <h1 className="font-semibold text-base md:text-xl text-colors-black text-center md:text-start  mt-5">You can contact us directly 
            at <Link href='mailto:robotechfuse@gmail.com' className="underline underline-offset-1 text-colors-grey_medium">robotechfuse@gmail.com</Link>
        </h1>

        <h1 className="font-semibold text-2xl md:text-4xl text-colors-black text-center md:text-start  mt-5">Team Members' Contact </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:grid-rows-2 my-5 font-normal">
      
            <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center bg-colors-white transition-transform duration-300 hover:scale-110">
            <Image 
                src="./phoo.png"
                width={640}
                height={640}
                className="max-h-[270px] max-w-[270px] md:max-h-[320px] md:max-w-[320px] object-contain top-0 left-0"
                alt="person1" />
            <h1>Woraphon Choaywong</h1>
            <h1>Team Leader</h1>
            <Link href='mailto:w.choaywong@campus.tu-berlin.de'>w.choaywong@campus.tu-berlin.de</Link>
            </div>

            <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center bg-colors-white transition-transform duration-300 hover:scale-110">
            <Image 
                src="./denis.png"
                width={640}
                height={640}
                className="max-h-[270px] max-w-[270px] md:max-h-[320px] md:max-w-[320px] object-contain top-0 left-0"
                alt="person2" />
            <h1>Denis Shcherba</h1>
            <h1>Programming</h1>
            <Link href='mailto:d.shcherba@campus.tu-berlin.de'>d.shcherba@campus.tu-berlin.de</Link>
            </div>

            <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center bg-colors-white transition-transform duration-300 hover:scale-110">
            <Image 
                src="./eckart.png"
                width={640}
                height={640}
                className="max-h-[270px] max-w-[270px] md:max-h-[320px] md:max-w-[320px] object-contain top-0 left-0"
                alt="person3" />
            <h1>Eckart Cobo Briesewitz</h1>
            <h1>Programming</h1>
            <Link href='mailto:cobo-briesewitz@campus.tu-berlin.de'>cobo-briesewitz@campus.tu-berlin.de</Link>
            </div>

            <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center bg-colors-white transition-transform duration-300 hover:scale-110">
            <Image 
                src="./yumi.png"
                width={640}
                height={640}
                className="max-h-[270px] max-w-[270px] md:max-h-[320px] md:max-w-[320px] object-contain top-0 left-0"
                alt="person4" />
            <h1>Patthicha Mahakijdechachai</h1>
            <h1>Treasurer</h1>
            <Link href='mailto:p.mahakijdechachai@campus.tu-berlin.de'>p.mahakijdechachai@campus.tu-berlin.de</Link>
            </div>

            <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center bg-colors-white transition-transform duration-300 hover:scale-110">
            <Image 
                src="./harry.png"
                width={640}
                height={640}
                className="max-h-[270px] max-w-[270px] md:max-h-[320px] md:max-w-[320px] object-contain top-0 left-0"
                alt="person3" />
            <h1>Harry Bason</h1>
            <h1>Mechanical Design</h1>
            <Link href='mailto:h.bason@campus.tu-berlin.de'>h.bason@campus.tu-berlin.de</Link>
            </div>

            <div className="flex flex-col items-center border-4 border-colors-grey_medium rounded max-w-[350px] my-3 justify-self-center bg-colors-white transition-transform duration-300 hover:scale-110">
            <Image 
                src="./dummy_prof.png"
                width={640}
                height={640}
                className="max-h-[270px] max-w-[270px] md:max-h-[320px] md:max-w-[320px] object-contain top-0 left-0"
                alt="person4" />
            <h1>Phumin Lertpredanan</h1>
            <h1>Electronics Design</h1>
            <Link href='mailto:p.lertpredanan@campus.tu-berlin.de'>p.lertpredanan@campus.tu-berlin.de</Link>
            </div>
        </div>
    </div>
  );
}
