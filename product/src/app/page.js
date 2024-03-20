import Image from "next/image";
import Link from "next/link";
import Module from "./style.module.css";
import OutsideModule from "@/style/style.module.css";
import "@/style/style.css";
import image from "../../public/next.svg";
// import websiteImage from "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg";
// import websiteImage from "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg";
export default function Home() {
  return (
    <main>
      <Link href="products">Products</Link>
      &emsp;
      <Link href="product-with-second-method">Products 2nd Method</Link>
      <h4 className="heading">Global CSS</h4>
      <h4 style={{color:"green"}}>Inline CSS</h4>
      <h4 className={Module.heading}>Module CSS</h4>
      <h4 className="headingh4">Outside CSS</h4>
      <h4 className={OutsideModule.heading}>Outside Module CSS</h4>
      <Image src={image}/>
      <img src="https://media.istockphoto.com/id/1413506739/photo/tom-yam-kung-prawn-and-lemon-soup-with-mushrooms-thai-food-in-two-white-bowl-top-view.jpg?s=1024x1024&w=is&k=20&c=JAzsYFddlFdrBZbyJfhtShZd6HAZt66WEjXCBOlpnRs=" width={300} height={200} alt="Tom Yam Kung" />
      {/* <Image src={websiteImage} height={200} width={200}  alt="Your image description"/> */}
    <h1>Font Design</h1>
    <h3 style={{fontFamily: "Madimi One",fontWeight: 400}}>Hello World</h3>
    </main>
  );
}

