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
            <Link href="/unit/control">
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
            <Link href="/unit/mapping">
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
            <Link href="/unit/database">
              <img src="/icons/map-svgrepo-com.svg" alt="" />
              <p>Database</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
