import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <a href="./index.html">
        <Image
          src="/stayswift.svg"
          alt="Stay Swift Logo"
          width={160}
          height={160}
        />
      </a>

      <ul>
        <li>
          <Link href="#">Recommended Places</Link>
        </li>

        <li>
          <Link href="#">About Us</Link>
        </li>

        <li>
          <Link href="#">Contact us</Link>
        </li>

        <li>
          <Link href="./bookings.html">Bookings</Link>
        </li>

        <li>
          <Link href="./login.html" class="login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
