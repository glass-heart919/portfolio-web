import { createElement, useRef, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineVerified } from "react-icons/md";
import { ImSpinner } from "react-icons/im";

import { content } from "@/content";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { Contact } = content;
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "message") {
      setMessage(e.target.value);
    }
    if (e.target.name === "otp") {
      setOtp(e.target.value);
    }
  };

  const handleSendOTP = async () => {
    setIsLoading(true);
    try {
      await axios.post("/send-otp", { name, email });
      toast.success(
        "6-digit code sent to your email. Please check your spam folder in case."
      );
      setIsOtpSent(true);
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || "Something went wrong");
      setIsOtpSent(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("/verify", { email, otp });
      toast.success("Verified.");
      setIsVerified(true);
    } catch (error: any) {
      console.log(error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong"
      );
      setIsVerified(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      await handleSendOTP();
      return;
    } else {
      setIsLoading(true);
      axios
        .post("https://formspree.io/f/mlevdrdj", { name, email, message })
        .then(
          (res) => {
            form?.current?.reset();
            toast.success(
              "Message sent successfully. I will get back to you soon. Thanks."
            );
          },
          (error) => {
            console.log(error);
            toast.error("Something went wrong");
          }
        );
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-dark_primary text-white" id="contact">
      <Toaster toastOptions={{ duration: 4000 }} position="top-right" />
      <div className="md:container px-5 py-14">
        <h2 className="title !text-white" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            action="https://formspree.io/f/mlevdrdj"
            method="POST"
            onSubmit={handleSubmitForm}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            {isOtpSent && (
              <div>
                {/* <p className="text-green-400 text-sm">
                  6-digit code sent to your email. Please check your spam folder
                  in case.
                </p> */}
                <div className="relative rounded">
                  <input
                    type="text"
                    name="otp"
                    placeholder="6-digit code"
                    onChange={handleChange}
                    // required
                    className="border border-slate-600 p-3 rounded w-full"
                  />
                  {isVerified ? (
                    <MdOutlineVerified className="text-green-400 absolute right-4 top-1/2 -translate-y-1/2" />
                  ) : (
                    <button
                      className="absolute right-0 h-full bg-white text-dark_primary px-4 rounded"
                      type="button"
                      onClick={handleVerifyOTP}
                    >
                      {isLoading ? (
                        <ImSpinner className="animate-spin" />
                      ) : (
                        "Verify"
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
            <button
              className="btn self-start bg-white text-dark_primary"
              disabled={isLoading}
            >
              {isLoading ? <ImSpinner className="animate-spin" /> : "Submit"}
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content, i) => (
              <div
                key={`${i}-${content.text}`}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
