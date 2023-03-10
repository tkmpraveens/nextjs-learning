import Link from "next/link";

import classes from "./header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.header__logo}>Eventify</div>
      </Link>
      <nav>
        <ul>
          <li className={classes.header__link}>
            <Link href="/event">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
