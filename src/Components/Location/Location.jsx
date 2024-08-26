import React from "react";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit (Gowrivakkam Office)
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15554.557664942993!2d80.15893817876766!3d12.930881611790433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s16%2C%20Shanthi%20nagar%202nd%20cross%20street%2C%20Gowrivakkam%20Chennai-600%20073!5e0!3m2!1sen!2sin!4v1719114737915!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
      <br />
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location to visit (Virugambakkam Office)
          </h1>

          <div className="rounded-xl ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7144776072882!2d80.19236767381173!3d13.053837513072482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267afda7c827b%3A0x2d87b6e28d8d53ac!2sSri%20Sathya%20Sai%20Baba%20Flat!5e0!3m2!1sen!2sin!4v1719166237356!5m2!1sen!2sin"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
