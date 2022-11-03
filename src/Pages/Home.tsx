import { Link } from "wouter";

const Home = () => {
  return (
    <div className="m-4 p-2">
      <span className="text-3xl font-bold">frontend-experiments </span>
      <br />
      <br />
      <Link href="/grid">
        <span className="before:content-['-'] text-2xl font-mono hover:underline hover:cursor-pointer">
          grid
        </span>
      </Link>
    </div>
  );
};

export default Home;
