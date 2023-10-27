"use client";

import Image from "next/image";
import { useState } from "react";
import ConfirmElement from "../../components/confirm-element/confirmElement";
import { useRouter } from "next/navigation";
import CloseButton from "../../components/close-button/closeButton";
import Footer from "../../components/footer/footer";

export default function Home() {
  const router = useRouter();

  const [showUtilSection, setShowUtilSection] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const onProceedButtonClick = () => {
    // Set the state variable to true to show the .util_section
    setShowUtilSection(true);
  };

  const onConfirmButtonClick = () => {
    setShowConfirmDialog(true);
  };

  const handleCancel = () => {
    // Set showConfirmDialog to false when Cancel button is clicked
    setShowConfirmDialog(false);
  };

  const goToUnitPage = () => {
    router.push("/unit/control");
  };

  return (
    <body>
      <ConfirmElement
        message="Are you sure you want to close this app?"
        status={showConfirmDialog}
        onCancel={handleCancel}
      />
      <div className="centered-content">
        <CloseButton onClick={onConfirmButtonClick} />
        <div className="greetings">
          <p>Hello Username, welcome to the MSD700 application!</p>
        </div>

        <div className="data-section">
          <div>
            <div className="label-section">
              <p>
                <span>
                  <Image
                    src="/icons/information-circle-svgrepo-com.svg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </span>
                Please input your MSD700 unit data.
              </p>
            </div>
            <div className="input-section">
              <form action="#" method="post">
                <div className="inputUnit">
                  <label htmlFor="unitID">Unit ID</label>
                  <p className="separateElement">:</p>
                  <input
                    type="text"
                    id="unitID"
                    name="unitID"
                    defaultValue="Unit A"
                    required
                  />
                </div>

                <div className="inputUnit">
                  <label htmlFor="ipAddress">IP Address</label>
                  <p className="separateElement">:</p>
                  <input
                    type="text"
                    id="ipAddress"
                    name="ipAddress"
                    defaultValue="192.168.18.17"
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Proceed"
                  onClick={onProceedButtonClick}
                />
              </form>
            </div>
          </div>

          <div
            className={`util_section ${
              showUtilSection === true ? "show-class" : "hide-class"
            }`}
          >
            <Image
              src="/images/MSD700.png"
              alt="Picture of the author"
              width={350}
              height={264}
            />
            <div className="data_util">
              <form action="#" method="post">
                <div className="inputUnit">
                  <label htmlFor="battery">Battery</label>
                  <p className="separateElement">:</p>
                  <input
                    type="text"
                    id="battery"
                    name="battery"
                    defaultValue="50%"
                    required
                  />
                </div>

                <div className="inputUnit">
                  <label htmlFor="uptime">Uptime</label>
                  <p className="separateElement">:</p>
                  <input
                    type="text"
                    id="uptime"
                    name="uptime"
                    defaultValue="05:33:00"
                    required
                  />
                </div>
              </form>
            </div>
            <button
              onClick={goToUnitPage}
              aria-label="Submit form Button"
              className="submit_button"
            >
              <p>Login</p>
              <Image
                src="/icons/arrow-right-3-svgrepo-com (1).svg"
                alt=""
                width={500}
                height={500}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="theFooter">
        <Footer status={true} />
      </div>
    </body>
  );
}
