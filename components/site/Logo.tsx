import Image from "next/image";
import Link from "next/link";

export default function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link aria-label="Now IT Systems" className="logo" href="/">
      <Image alt="Now IT Systems" src="/logo.png" width={1024} height={248} priority={priority} />
    </Link>
  );
}
