import { Mail, Phone } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const Contact = () => {
  return (
    <AnimatedSection sectionId="contact">
      <h2 className="section-title">
        CONTACT
        <small>GET IN TOUCH</small>
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:justify-between">
        <div>
          <div className="mb-4 text-left">
            <h3 className="mb-2 text-3xl font-bold text-[#575757]">
              Get in Touch!
            </h3>
            <p className="text-lg text-[#676767]">
              Feel free to get in touch with me. I am always open to discussion
              and opportunities to be a part of your vision.
            </p>
          </div>
          <ul className="w-fit text-left">
            <li className="w-fit">
              <a
                href="mailto:mahmoudelagamy474@gmail.com"
                className="group/item btn btn-ghost border-none pl-0 shadow-none hover:scale-105"
              >
                <Mail className="text-[#3bb5e6] transition group-hover/item:text-[#fd47b4]" />
                MAIL ME
              </a>
            </li>
            <li className="w-fit">
              <a
                href="tel:+201277911846"
                className="group/item btn btn-ghost border-none pl-0 shadow-none hover:scale-105"
              >
                <Phone className="text-[#3bb5e6] transition group-hover/item:text-[#fd47b4]" />
                CALL ME
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Mahmoud-Elagamy"
                className="group/item btn btn-ghost btn-sm pl-0 hover:scale-110 hover:bg-[#daa3a30a]"
                target="_blank"
                title="Github"
              >
                <svg
                  className="transition group-hover/item:fill-[#fd47b4]"
                  width="28"
                  height="28"
                  viewBox="0 0 20 20"
                  fill="#3bb5e6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 0C4.475 0 0 4.475 0 10C0 14.425 2.8625 18.1625 6.8375 19.4875C7.3375 19.575 7.525 19.275 7.525 19.0125C7.525 18.775 7.5125 17.9875 7.5125 17.15C5 17.6125 4.35 16.5375 4.15 15.975C4.0375 15.6875 3.55 14.8 3.125 14.5625C2.775 14.375 2.275 13.9125 3.1125 13.9C3.9 13.8875 4.4625 14.625 4.65 14.925C5.55 16.4375 6.9875 16.0125 7.5625 15.75C7.65 15.1 7.9125 14.6625 8.2 14.4125C5.975 14.1625 3.65 13.3 3.65 9.475C3.65 8.3875 4.0375 7.4875 4.675 6.7875C4.575 6.5375 4.225 5.5125 4.775 4.1375C4.775 4.1375 5.6125 3.875 7.525 5.1625C8.325 4.9375 9.175 4.825 10.025 4.825C10.875 4.825 11.725 4.9375 12.525 5.1625C14.4375 3.8625 15.275 4.1375 15.275 4.1375C15.825 5.5125 15.475 6.5375 15.375 6.7875C16.0125 7.4875 16.4 8.375 16.4 9.475C16.4 13.3125 14.0625 14.1625 11.8375 14.4125C12.2 14.725 12.5125 15.325 12.5125 16.2625C12.5125 17.6 12.5 18.675 12.5 19.0125C12.5 19.275 12.6875 19.5875 13.1875 19.4875C15.1728 18.8175 16.8979 17.5417 18.12 15.8397C19.3421 14.1377 19.9997 12.0953 20 10C20 4.475 15.525 0 10 0Z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoudelagamy/"
                className="group/item btn btn-ghost btn-sm hover:scale-110 hover:bg-[#a382820a]"
                target="_blank"
                title="Linked In"
              >
                <svg
                  className="transition group-hover/item:fill-[#fd47b4]"
                  width="28"
                  height="28"
                  viewBox="0 0 20 19"
                  fill="#3bb5e6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.82306 6.29663H0.315552V18.9689H4.82306V6.29663Z"></path>
                  <path d="M4.06529 0.382998C3.6357 0.133278 3.13083 7.59623e-06 2.6144 3.24029e-10C2.2698 -5.0636e-06 1.92862 0.0593443 1.61045 0.174636C1.29227 0.289926 1.0034 0.458883 0.760439 0.671792C0.517474 0.884699 0.325217 1.13736 0.19472 1.41523C0.0642237 1.69311 -0.00193725 1.99071 4.31803e-05 2.29094C0.00301166 2.7409 0.15886 3.18 0.447928 3.55287C0.736994 3.92575 1.14633 4.21566 1.6243 4.38606C2.10226 4.55647 2.62744 4.5997 3.13358 4.51035C3.63973 4.42098 4.10415 4.20301 4.46827 3.88392C4.8324 3.56485 5.0799 3.15896 5.17956 2.71745C5.27922 2.27595 5.22659 1.81863 5.02828 1.40316C4.82996 0.987701 4.49488 0.632718 4.06529 0.382998Z"></path>
                  <path d="M10.2851 6.16159H5.94287L5.92786 18.86H10.4354V12.5894C10.4354 10.9399 10.796 9.34273 13.1399 9.34273C15.4838 9.34273 15.4838 11.241 15.4838 12.7072V18.8338H19.9913V11.8824C19.9913 8.46564 19.0748 5.8474 14.5672 5.8474C13.7081 5.81811 12.856 5.99262 12.1019 6.35228C11.3477 6.71196 10.7198 7.24332 10.2851 7.88963V6.16159Z"></path>
                </svg>
              </a>
              <a
                href="https://www.frontendmentor.io/profile/Mahmoud-Elagamy"
                target="_blank"
                className="group/item btn btn-ghost border-none shadow-none hover:scale-110"
                title="Frontend Mentor"
              >
                <svg
                  width="28"
                  height="26"
                  viewBox="0 0 52 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="*:transition *:group-hover/item:fill-[#fd47b4]"
                >
                  <path
                    d="M50.1993 26.1994C49.9787 26.1994 49.7605 26.149 49.5588 26.0515L36.1182 19.4904C35.8429 19.3551 35.6093 19.136 35.4454 18.8595C35.2815 18.583 35.1943 18.2608 35.1943 17.9316C35.1943 17.6024 35.2815 17.2803 35.4454 17.0037C35.6093 16.7272 35.8429 16.5082 36.1182 16.3729L49.5588 9.83494C49.9382 9.6517 50.3687 9.63959 50.7563 9.80124C51.1439 9.9629 51.457 10.2852 51.6273 10.6977C51.7956 11.1114 51.8067 11.581 51.658 12.0036C51.5094 12.4262 51.2132 12.7674 50.8344 12.9525L40.5943 17.9343L50.8363 22.9339C51.2151 23.119 51.511 23.4605 51.659 23.8833C51.8069 24.3061 51.7948 24.7756 51.6254 25.1887C51.5035 25.49 51.3037 25.746 51.0504 25.9255C50.7972 26.105 50.5014 26.2002 50.1993 26.1994Z"
                    fill="#3bb5e6"
                  />
                  <path
                    d="M31.8842 50C17.1073 50 4.1888 39.1273 0.475095 23.5573C0.422859 23.3405 0.410385 23.1146 0.438388 22.8925C0.46639 22.6704 0.534319 22.4565 0.638282 22.2631C0.742245 22.0697 0.880199 21.9005 1.04424 21.7653C1.20828 21.6301 1.39518 21.5315 1.59424 21.4752C2.43113 21.2315 3.28678 21.7845 3.50389 22.6972C6.86133 36.7628 18.5334 46.5866 31.8842 46.5866C32.2927 46.5978 32.6809 46.7825 32.9662 47.1014C33.2514 47.4202 33.4111 47.8479 33.4111 48.2933C33.4111 48.7387 33.2514 49.1664 32.9662 49.4853C32.6809 49.8041 32.2927 49.9888 31.8842 50Z"
                    fill="#3bb5e6"
                  />
                  <path
                    d="M26.49 35.8253C26.0747 35.8253 25.6764 35.6455 25.3827 35.3254C25.089 35.0054 24.924 34.5713 24.9238 34.1186V1.67693C24.9311 1.22946 25.0993 0.803005 25.3922 0.489369C25.6851 0.175734 26.0792 0 26.4898 0C26.9004 0 27.2945 0.175734 27.5874 0.489369C27.8803 0.803005 28.0485 1.22946 28.0558 1.67693V34.1207C28.0552 34.573 27.89 35.0065 27.5965 35.3261C27.3029 35.6457 26.905 35.8253 26.49 35.8253Z"
                    fill="#3bb5e6"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <svg
          width="250"
          height="250"
          viewBox="0 0 368 317"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M297.777 10.5205C260.205 13.3519 203.814 53.5345 225.215 138.01C246.616 222.485 197.647 236.039 170.487 232.257"
            stroke="#fd47b4"
            strokeWidth="3"
          />
          <path
            d="M142.581 242.015C136.194 242.015 131.017 236.838 131.017 230.451C131.017 224.064 136.194 218.886 142.581 218.886C148.968 218.886 154.146 224.064 154.146 230.451C154.146 236.838 148.968 242.015 142.581 242.015Z"
            stroke="#fd47b4"
            strokeWidth="3"
          />
          <path
            d="M112.969 230.451C82.9898 227.709 23.2517 240.98 24.1292 316"
            stroke="#3bb5e6"
            strokeWidth="3"
          />
          <path
            d="M211.131 187.676C211.496 198.826 203.782 220.141 170.001 216.192"
            stroke="#3bb5e6"
            strokeWidth="3"
          />
          <path
            d="M28.2825 95.8923C27.2825 96.4696 27.2825 97.913 28.2825 98.4903L57.9441 115.616C58.9441 116.193 60.1941 115.471 60.1941 114.317V80.0662C60.1941 78.9115 58.9441 78.1898 57.9441 78.7671L28.2825 95.8923Z"
            stroke="#F9850F"
            strokeWidth="3"
          />
          <path
            d="M4.74999 50.6072C3.08334 51.5695 3.08334 53.9751 4.74999 54.9373L23.718 65.8885C25.3846 66.8507 27.468 65.6479 27.468 63.7234V41.8211C27.468 39.8966 25.3846 38.6938 23.718 39.656L4.74999 50.6072Z"
            stroke="#3bb5e6"
            strokeWidth="3"
          />
        </svg>
      </div>
    </AnimatedSection>
  );
};
export default Contact;
