import { NavBar } from "@workspace/ui/components/ui/tubelight-navbar"
import { LandingAccordionItem } from "@workspace/ui/components/ui/interactive-image-accordion"
import { useScreenSize } from "@workspace/ui/hooks/use-screen-size"
import { PixelTrail } from "@workspace/ui/components/ui/pixel-trail"
import {AboutSection} from "@workspace/ui/components/ui/AboutSection"
import SectorsSection from "@workspace/ui/components/ui/SectorsSection"
import GuideSection from "@workspace/ui/components/ui/GuideSection"
import TeamSection from "@workspace/ui/components/ui/TeamSection"
import FooterSection from "@workspace/ui/components/ui/FooterSection"
export default function App() {
  const screenSize = useScreenSize()

  const navItems = [
    { name: "About", url: "#about" },
    { name: "Sectors", url: "#sectors" },
    { name: "Guide", url: "#guide" },
    { name: "People", url: "#people" },
    { name: "Signup", url: "#signup" },
    { name: "Login", url:  "#login" },
  ]

  return (
    <div className="relative w-full font-sans">

      {/* Hero Section */}
      <div className="relative h-screen min-h-[500px] overflow-hidden bg-[#5F9598] text-[#F3F4F4] flex flex-col">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <PixelTrail
            pixelSize={screenSize.lessThan("md") ? 48 : 80}
            fadeDuration={0}
            delay={1200}
            pixelClassName="rounded-full bg-[#1D546D]"
          />
        </div>

        <div className="relative z-10 flex flex-col h-full pointer-events-none">
          <div className="pointer-events-auto">
            <NavBar items={navItems} />
          </div>

          <div className="flex flex-1 min-h-0 items-center justify-center px-12">
            <div className="pointer-events-auto">
              <LandingAccordionItem />
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      <GuideSection/>
      <SectorsSection/>
      <TeamSection/>
      <FooterSection/>
    </div>
  )
}