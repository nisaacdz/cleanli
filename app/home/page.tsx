import { Footer } from "../components/footer/footer";
import { Navigation } from "../components/navbar/navbar";
import { Invite, Motivation, Newsletter, Reason, Testimony, Intro } from "./landing";

export default function Home() {
  return (<main>
    <Navigation selected={0}/>
    <Intro />
    <Reason />
    <Newsletter />
    <Testimony />
    <Invite />
    <Motivation />
    <Footer />
  </main>)
}
