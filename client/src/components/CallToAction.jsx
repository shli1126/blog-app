import bannerpic1 from "../../assets/bannerpic1.jpg";
import bannerpic2 from "../../assets/bannerpic2.jpg";
import bannerpic3 from "../../assets/bannerpic3.jpg";
import TopPick from "./TopPick";
export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <TopPick pick={bannerpic1} description="Jersy City"/>
      <TopPick pick={bannerpic2} description="New Jersy"/>
      <TopPick pick={bannerpic3} description="Atlantic City"/>
    </div>
  );
}
