const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About Anik's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Anik's Blog is a Blog website that I created in MERN stack along
              with flowbite, tailwind css, react icons, react-quill,etc for
              styling, redux, redux toolkit and redux persist for state
              management, firebase for authentication and image upload. Where as
              in backend used dotenv, cookie-parser, jwt, bcryptjs.
            </p>
            <p>
              I am learning full stack web development. Hope you enjoy going
              through this project and read my blogs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
