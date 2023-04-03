import Link from "next/link";

const Nav = () => {
  return (
    <>
      <ul class="nav nav-tabs justify-content-center mt-2 mb-2">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" href="/">Consultoria Fitness</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/">Clientes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="/workouts/Workouts">Treinos</Link>
        </li>
      </ul>
    </>
  );
};

export default Nav;