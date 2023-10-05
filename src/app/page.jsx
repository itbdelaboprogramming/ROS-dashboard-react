import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <body>
      <div className="centered-content">
        <button class="close-button">X</button>
        <div class="greetings">
          <p>Hello Username, welcome to the MSD700 application!</p>
        </div>
      </div>

      <div class="data-section">
        <div>
          <div class="label-section">
            <p>
              <span>
                <Image
                src="/icons/information-circle-svgrepo-com.svg"
                alt="Picture of the author"
                width={500}
                height={500}
                />
                {/* <img
                  class="icon_information"
                  src="/icons/information-circle-svgrepo-com.svg"
                  alt=""
                /> */}
              </span>
              Please input your MSD700 unit data.
            </p>
          </div>
          <div class="input-section">
            <form action="#" method="post">
              <label for="unitID">Unit ID:</label>
              <input
                type="text"
                id="unitID"
                name="unitID"
                value="Unit A"
                required
              />

              <label for="ipAddress">IP Address:</label>
              <input
                type="text"
                id="ipAddress"
                name="ipAddress"
                value="192.168.18.17"
                required
              />

              <input type="submit" value="Proceed" />
            </form>
          </div>
        </div>

        <div class="util_section">
          <img src="/images/MSD700.png" alt="" />

          <div class="data_util">
            <form action="#" method="post">
              <label for="battery">Battery:</label>
              <input type="text" id="battery" value="50%" name="battery" />

              <label for="uptime">Uptime:</label>
              <input type="text" id="uptime" value="05:33:00" name="uptime" />
            </form>
          </div>
          <button class="submit_button">
            <p>Login</p>
            <img
              src="/icons/arrow-right-3-svgrepo-com (1).svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </body>
  );
}
