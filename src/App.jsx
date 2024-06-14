import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Works, StarsCanvas, Footer, Education } from "./components"
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import Skills from "./components/Skills.jsx";

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <div className="z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <Wrapper>

            <About />
            {/* <Experience /> */}
            {/* <Tech /> */}
            <Skills />
          </Wrapper>
          <Wrapper>

            <Works />
            {/* <Feedbacks /> */}
          </Wrapper>
          <Education/>
          <Wrapper>
            <div className='relative z-0 pb-[70px]'>
              <Contact />
              <StarsCanvas />
            </div>
          </Wrapper>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App