import React from "react";
// import "./Profile.css";
const Profile = () => {
  return (
    <div className="container-md  mt-5">
      <h1 className="my-5 title">
        About The <span className="under">Company</span>
      </h1>

      <p>
          <span>Rahmat knit-Tex Ltd</span>  is an ultra modern production company specializing in short
        lead times, from where keeping promises has been the success of our
        company's growth over these past few years. By working closely with our
        clients we are able to achieve their wishes into an integrated
        organization. Which has all production facilities under the same roof.
        We are extremely fast reacting in order to keep up with the industry's
        constantly changing needs. Which gives our customers the opportunity to
        change their demand.
      </p>
      <hr className="my-5 border border-2 border-secondary" />
      <h1 className="my-5 title">
        Why Choose <span className="under">Us</span> ?
      </h1>
      <div className="my-5">
        <p className="my-4">
          <strong>SERVICE :</strong> We offer the highest level of customer
          service. Our office-based enthusiastic and experienced team is always
          ready to help you and find effective and creative solution.
        </p>
        <p className="mb-4">
          <strong>EXPERIENCE :</strong> We have provided top quality garments
          for many years and this give us the experience that you probably
          looking for.
        </p>
        <p className="mb-4">
          <strong>PRICE :</strong> With our vertical integrated production and
          volume power you can't beat our prices for the quality you get.
        </p>
        <p className="mb-4">
          <strong>QUALITY :</strong> We stand behind our words, no stories, no
          excuses. Our quality control system can provide you any information
          you need, we do not leave any room for errors.
        </p>
        <p className="mb-4">
          <strong>VALUE :</strong> We have the experience and expertise, but we
          like to do more! Add a dash of creativity and what you get is
          satisfied customer.
        </p>
      </div>
      <hr className="my-5 border border-2 border-secondary" />
      <p className="my-4">
        <span className=" under ms-0 fs-5 fw-bold">Respect of I.L.O</span>
      </p>
      <ul className="mb-5 ms-0 p-3">
        <li> No forced labour.</li>
        <li>No child labour.</li>
        <li>
          Freedom of association; the workforce is free to join a trade union.
        </li>
        <li>
          All health, hygiene and safety requirements are met by the company.
        </li>
        <li>Decent shift patterns.</li>
        <li>Decent pay to workforce.</li>
        <li>Equal opportunity for men and women</li>
      </ul>
      <p className="my-4">
        <span className="under fs-3 ms-0 fw-bold">Logistic Solution</span>
      </p>
      <p>
        By means of internet tracking and a good logistic network we are able to
        work with very short lead times.
      </p>
      <p>
        For our customers who need to receive the goods ready for their stores,
        we also offer the possibility where we hang the garments in our factory,
        price them and then transport the goods hanging directly to your
        logistic center, in this case after receiving the goods they can be
        transported directly to their final destination.
      </p>
    </div>
  );
};

export default Profile;