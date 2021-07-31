import Image from "next/image";
import Link from "next/link";

const YourComponent = () => {
  return (
    <div>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="Your Name"
      />
      <Link href="/">
        <a>Go to home</a>
      </Link>
    </div>
  );
};

export default YourComponent;
