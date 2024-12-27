function Home() {
  return (
    <div className="space-y-6">
      <div className="pt-28 text-center">
        <h1 className="text-6xl font-bold leading-tight max-w-5xl mx-auto">
          Learn to code and boost your career with our expert-crafted eBooks!
        </h1>
        <p className="leading-relaxed text-2xl max-w-4xl mx-auto pt-7">
          Discover practical and up-to-date content for beginners and
          professionals. Access now and take the next step in your development
          journey.
        </p>
      </div>
      <div className="flex justify-center">
        <a className="btn-primary font-bold text-center" href="">
          Join the waitlist
        </a>
      </div>

      <section className="pt-20">
        <img
          className="rounded-2xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
          src="/src/assets/Code.png"
          alt="Description of the image"
        />
      </section>
      <section className="">
        <div className="pt-20 text-center">
          <h2 className="text-4xl font-bold leading-tight max-w-5xl mx-auto">
            Why choose our eBooks?
          </h2>
          <p className="leading-relaxed text-2xl max-w-4xl mx-auto pt-7">
            Our eBooks are designed to help you learn to code and boost your
            career. We have a wide range of topics that are beginner-friendly
            and expert-approved.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 pt-20">
          <div className="grid grid-cols-1 gap-8 pt-20">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <img
                className="w-full md:w-1/2 mx-auto md:mx-0 md:mr-8"
                src="https://images.unsplash.com/photo-1607798748738-b15c40d33d57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Description of the image"
              />
              <div>
                <h3 className="text-2xl font-bold pt-7 md:pt-0">
                  Expert authors
                </h3>
                <p className="text-lg pt-4">
                  Our eBooks are written by experts in the field who have years
                  of experience.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center text-center md:text-left">
              <img
                className="w-full md:w-1/2 mx-auto md:mx-0 md:ml-8"
                src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Description of the image"
              />
              <div>
                <h3 className="text-2xl font-bold pt-7 md:pt-0">
                  Practical content
                </h3>
                <p className="text-lg pt-4">
                  Our eBooks are designed to be practical and easy to
                  understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
