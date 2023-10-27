import { useRouter, usePathname } from "next/navigation";
import styles from "./navigation.module.css";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  function isActive(href) {
    return pathname == href;
  }

  const goToControlPage = () => {
    router.push("/unit/control");
  };

  const goToMappingPage = () => {
    router.push("/unit/mapping");
  };

  const goToDatabasePage = () => {
    router.push("/unit/database");
  };

  const navLinks = [
    { href: "/unit/control", text: "Control Mode" },
    { href: "/unit/mapping", text: "Mapping" },
    { href: "/unit/database", text: "Database" },
  ];

  return (
    <>
      <div className={`${styles.sideSection}`}>
        <div
          className={`${styles.greetings} ${
            isActive("/unit/control") && styles.active
          }`}
        >
          <img src="/icons/user-10-svgrepo-com.svg" alt="" />
          <p>Welcome, Unit A!</p>
        </div>
        <div className={styles.menu}>
          <div
            className={`${styles.controlMode} ${
              isActive("/unit/control") && styles.active
            }`}
            onClick={goToControlPage}
          >
            <Link href="/unit/control" className={styles.buttonLink}>
              <img src="/icons/map-svgrepo-com.svg" alt="" />
              <p>Control Mode</p>
            </Link>
          </div>
          <div
            className={`${styles.mapping} ${
              isActive("/unit/mapping") && styles.active
            }`}
            onClick={goToMappingPage}
          >
            <Link href="/unit/mapping" className={styles.buttonLink}>
              <img src="/icons/map-svgrepo-com.svg" alt="" />
              <p>Mapping</p>
            </Link>
          </div>
          <div
            className={`${styles.database} ${
              isActive("/unit/database") && styles.active
            }`}
            onClick={goToDatabasePage}
          >
            <Link href="/unit/database" className={styles.buttonLink}>
              <img src="/icons/map-svgrepo-com.svg" alt="" />
              <p>Database</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={`${styles.centerSection}`}>
        <div
          className={`${styles.greetings} ${
            isActive("/unit/control") && styles.active
          }`}
        >
          <img src="/icons/user-10-svgrepo-com.svg" alt="" />
          <p>Welcome, Unit A!</p>
        </div>
        <div className={`${styles.menu}`}>
          <select
            className={`${styles.menu} `}
            value={pathname} // Set "/unit/control" as the default value
            onChange={(e) => router.push(e.target.value)}
          >
            {navLinks.map((link) => (
              <option key={link.href} value={link.href}>
                {link.text}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
