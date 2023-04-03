import Nav from "@/components/nav/Nav";
import Head from "next/head";

const WorkoutHistory = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://www.flaticon.com/free-icons/gym"
        ></link>
        <title>Consultoria Fitness</title>
      </Head>

      <div className="container">
        <Nav />
      </div>
    </>
  );
};

export default WorkoutHistory;