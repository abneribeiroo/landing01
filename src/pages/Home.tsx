import HeaderSection from '../components/HeaderSection';
import ImageSection from '../components/ImageSection';
import ContentSection from '../components/ContentSection';

function Home() {
  return (
    <div className="space-y-6">
      <HeaderSection />
      <div className="flex justify-center">
        <a className="btn-primary font-bold text-center" href="">
          Join the waitlist
        </a>
      </div>
      <ImageSection src="/src/assets/image1.png" alt="Code image" />
      <ContentSection />
    </div>
  );
}

export default Home;
