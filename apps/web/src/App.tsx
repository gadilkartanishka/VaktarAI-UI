// import { NavBar } from "@workspace/ui/components/ui/tubelight-navbar"
// import { LandingAccordionItem } from "@workspace/ui/components/ui/interactive-image-accordion"
// import { SmokeBackground } from "@workspace/ui/components/ui/spooky-smoke-animation" 
// import { AboutSection } from "@workspace/ui/components/ui/AboutSection"
// import SectorsSection from "@workspace/ui/components/ui/SectorsSection"
// import GuideSection from "@workspace/ui/components/ui/GuideSection"
// import TeamSection from "@workspace/ui/components/ui/TeamSection"
// import FooterSection from "@workspace/ui/components/ui/FooterSection"
// import AvatarGenerator from "@workspace/ui/components/ui/AvatarGenerator"

// export default function App() {
//   const navItems = [
//     { name: "About", url: "#about" },
//     { name: "Sectors", url: "#sectors" },
//     { name: "Guide", url: "#guide" },
//     { name: "People", url: "#people" },
//     { name: "Signup", url: "#signup" },
//     { name: "Login", url: "#login" },
//   ]

//   return (
//     <div className="relative w-full font-sans">

//       {/* Hero Section */}
//       <div className="relative h-screen min-h-[500px] overflow-hidden bg-[#061E29] text-[#F3F4F4] flex flex-col">
        
//         {/* Smoke fills the entire hero background */}
//         <div className="absolute inset-0 z-0">
//           <SmokeBackground smokeColor="#1D546D" />
//         </div>

//         <div className="relative z-10 flex flex-col h-full pointer-events-none">
//           <div className="pointer-events-auto">
//             <NavBar items={navItems} />
//           </div>

//           <div className="flex flex-1 min-h-0 items-center justify-center px-12">
//             <div className="pointer-events-auto">
//               <LandingAccordionItem />
//             </div>
//           </div>
//         </div>
//       </div>

//       <AboutSection />
//       <GuideSection />
//       <SectorsSection />
//       <TeamSection />
//       <FooterSection />
//       <AvatarGenerator />
//     </div>
//   )
// }
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { NavBar } from "@workspace/ui/components/ui/tubelight-navbar"
import { LandingAccordionItem } from "@workspace/ui/components/ui/interactive-image-accordion"
import { SmokeBackground } from "@workspace/ui/components/ui/spooky-smoke-animation" 
import { AboutSection } from "@workspace/ui/components/ui/AboutSection"
import SectorsSection from "@workspace/ui/components/ui/SectorsSection"
import GuideSection from "@workspace/ui/components/ui/GuideSection"
import TeamSection from "@workspace/ui/components/ui/TeamSection"
import FooterSection from "@workspace/ui/components/ui/FooterSection"
import AvatarPage from "./AvatarPage"

function Home() {
  const navItems = [
    { name: "About", url: "#about" },
    { name: "Sectors", url: "#sectors" },
    { name: "Guide", url: "#guide" },
    { name: "People", url: "#people" },
    { name: "Try It", url: "/avatar" }, // ✅ changed
    { name: "Signup", url: "#signup" },
    { name: "Login", url: "#login" },
  ]

  return (
    <div className="relative w-full font-sans">
      <div className="relative h-screen min-h-[500px] overflow-hidden bg-[#061E29] text-[#F3F4F4] flex flex-col">
        
        <div className="absolute inset-0 z-0">
          <SmokeBackground smokeColor="#1D546D" />
        </div>

        <div className="relative z-10 flex flex-col h-full pointer-events-none">
          <div className="pointer-events-auto">
            <NavBar items={navItems} />
          </div>

          <div className="flex flex-1 items-center justify-center px-12">
            <div className="pointer-events-auto">
              <LandingAccordionItem />
            </div>
          </div>
        </div>
      </div>

      <AboutSection />
      <GuideSection />
      <SectorsSection />
      <TeamSection />
      <FooterSection />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avatar" element={<AvatarPage />} />
      </Routes>
    </Router>
  )
}