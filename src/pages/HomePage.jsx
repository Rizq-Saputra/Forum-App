import ForumContent from "../components/ForumContent";

function HomePage() {
  return (
    <div className="container font-inter h-screen flex justify-center items-center">
      <div className="lg:ms-20 ps-2 lg:ps-64 flex flex-col items-center text-center">
        <ForumContent />
      </div>
    </div>
  );
}

export default HomePage;
