import PortfolioNavbar from '../organisms/PortfolioNavbar';
import HeroSection from '../organisms/HeroSection';
import ProjectsSection from '../organisms/ProjectsSection';
import SkillsSection from '../organisms/SkillsSection';
import AboutSection from '../organisms/AboutSection';
import NewsSection from '../organisms/NewsSection';
import ContactSection from '../organisms/ContactSection';
import PortfolioFooter from '../organisms/PortfolioFooter';

function PortfolioTemplate() {
  return (
    <>
      <PortfolioNavbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <NewsSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </>
  );
}

export default PortfolioTemplate;
