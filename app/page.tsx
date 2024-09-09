import { Footer } from "./components/footer/footer";
import { Navigation } from "./components/navbar/navbar";
import { Invite, Motivation, Objectives, Reason, Testimony, Intro } from "./home/landing";

export default function Home() {
  return (<main>
    <Navigation selected={0} />
    <Intro />
    <Reason />
    <Objectives />
    <Testimony />
    <Invite />
    <Motivation />
    <Footer />
  </main>)
}
