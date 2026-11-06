import Image from "next/image";
import Link from "next/link";

export default function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <Link aria-label="Now IT Systems" className="logo" href="/">
      <Image alt="Now IT Systems" src="/logo.webp" width={1242} height={222} priority={priority} />
    </Link>
  );
}
