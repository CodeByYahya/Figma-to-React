import HeroSection from "./components/herosection/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Clients from "./components/clients/Clients";
import Frame from "./components/framesection/Frame";
import frameImg from "./components/framesection/Frame 35.svg";

function App() {
  const heading = [
    "The unseen of spending three years at Pixelgrade",
    "How to design your site footer like we did",
  ];
  const paragraph = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
    "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
  ];

  return (
    <>
      <Navbar />
      <HeroSection />
      <Clients />
      <Frame img={frameImg} heading={heading} paragraph={paragraph} />
    </>
  );
}

export default App;
