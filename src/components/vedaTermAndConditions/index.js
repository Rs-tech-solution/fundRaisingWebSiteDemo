import React from "react";
import styles from "./TermsAndConditions.module.scss";
import OrderListComponent from "../RenderListComponent";

// const RenderList = ({ items, parentIndex = "" }) => {
//   return (
//     <ol>
//       {items.map((item, idx) => {
//         const currentIndex = parentIndex
//           ? `${parentIndex}.${idx + 1}`
//           : `${idx + 1}`;
//         const hasChildren = item.children && item.children.length > 0;

//         return (
//           <li key={currentIndex}>
//             <strong>{item.title && `${item.title}`}</strong>
//             <div className={styles.condition}>{item.description}</div>

//             {hasChildren && (
//               <ol className={styles.nestedList}>
//                 {item.children.map((child, childIdx) => {
//                   const childIndex = `${currentIndex}.${childIdx + 1}`;
//                   return (
//                     <li key={childIndex}>
//                       <div className={styles.condition}>
//                         <span>{`${currentIndex}.${childIdx + 1}`}</span>{" "}
//                         {child.description}
//                       </div>
//                     </li>
//                   );
//                 })}
//               </ol>
//             )}
//           </li>
//         );
//       })}
//     </ol>
//   );
// };

const TermsAndConditions = () => {
  const termsData = [
    {
      title: "Introduction",
      description:
        "Vaidika Dharma Services Pvt Ltd (Vedasankalpa) is committed to providing a seamless and transparent online platform for donations and related contributions. In addition to standard donations, we seek tips, which are optional, from the donors to support our platform and its operations.",
    },
    {
      title: "Tips Collection",
      //   description:
      //     "Grants a limited, non-exclusive, non-transferable license to use Platform Services.",
      children: [
        {
          description:
            "Donors may voluntarily choose to provide tips in addition to their donations.",
        },
        {
          description:
            "The amount of tips is entirely at the discretion of the donor and is not subject to any fixed percentage or requirement.",
        },
        {
          description:
            "Donors can even choose to avoid tips to Vedasankalpa and proceed to give their donations for their chosen causes.",
        },
      ],
    },
    {
      title: "Usage of Tips",
      description:
        "The Company may suspend or terminate a user’s account for breach of these Terms.",
      children: [
        {
          description: "Termination does not impose liability on the Company.",
        },
        {
          description: "Termination does not impose liability on the Company.",
        },
      ],
      unorderedChildren: [
        {
          description:
            "The Company reserves the right to use tips for operational costs, platform improvements, and charitable initiatives.",
        },
        {
          description:
            "Tips may be used to enhance user experience, maintain the platform, and support community outreach programs.",
        },
      ],
    },
  ];
  return (
    <div className={styles.termsContainer}>
      <h1>Terms and Conditions</h1>
      <p className={styles.intro}>
        These Terms and Conditions govern the relationship between the user and
        the Company related to the usage of platform services such as CSR and
        Campaigns. By using this platform, you agree to abide by these terms.
      </p>

      <section>
        <h2>User Definition</h2>
        <p>
          The term “User” refers to donors, campaign creators, beneficiaries,
          organizations, or individuals registering, creating, operating,
          utilizing or engaging with platform services, regardless of belonging
          to each category.
        </p>
      </section>

      <section>
        <h2>Platform Services</h2>
        <p>
          The Platform Services include tools to create/manage online campaigns
          and raise donations for social causes, with access to a dashboard, CSR
          services, donation tracking, and more. Users are prohibited from
          misusing the services or violating the rights of others.
        </p>
      </section>

      <section className={styles.policySection}>
        <h3>The Standard Usage Policy</h3>
        <h5>Effective from Jan 1, 2025</h5>
        <OrderListComponent
          items={termsData}
          olClassName={styles.olList}
          nestedListClassName={styles.nestedList}
          unOrderListClassName={styles.unOrderList}
        />
      </section>

      <section>
        <h2>Campaigns and Donations</h2>
        <p>
          Campaigners raise funds by asking donors in India and abroad (Donors)
          to donate money to their programs, projects and listed purposes
          (Pujas, Homam, Donations) The Platform lists and hosts Users, and acts
          as an online intermediary that enables Campaigners platform organises
          Puja and Homam by consulting with Vedapandits.
        </p>
        <p>
          Campaigners raise funds by asking donors in India and abroad (Donors)
          to donate money to their programs, projects and listed purposes
          (Pujas, Homam, Donations) The Platform lists and hosts Users, and acts
          as an online intermediary that enables Campaigners platform organises
          Puja and Homam by consulting with Vedapandits.
        </p>
      </section>

      <section>
        <h2>Corporate Social Responsibility (CSR) Services</h2>

        <p>
          enter into contracts as defined by the Indian Contract Act, of 1872.
          By accessing or utilizing the Platform, you affirm and confirm that
          you have the competence to enter into a contract, or you have obtained
          the necessary parental/guardian consent if you are below 18 years of
          age.
        </p>
      </section>

      <section>
        <h2>User Eligibility Requirements</h2>
        <h5>
          Individual Users: To use the Platform, individuals must be at least 18
          years old and possess the legal capacity to
        </h5>
        <p>
          Users must be at least fourteen (14) years old. Users under eighteen
          (18) require parental/guardian consent.
        </p>
        <h5>
          Charitable Organizations and Legal Entities: For charitable
          organizations or any legal entities, excluding natural
        </h5>
        <p>
          enter into contracts as defined by the Indian Contract Act, of 1872.
          By accessing or utilizing the Platform, you affirm and confirm that
          you have the competence to enter into a contract, or you have obtained
          the necessary parental/guardian consent if you are below 18 years of
          age.
        </p>
      </section>

      <section>
        <h2>Registration</h2>
        <h5>
          Individual Users: To use the Platform, individuals must be at least 18
          years old and possess the legal capacity to
        </h5>
        <p>
          Users must be at least fourteen (14) years old. Users under eighteen
          (18) require parental/guardian consent.
        </p>
        <h5>
          Charitable Organizations and Legal Entities: For charitable
          organizations or any legal entities, excluding natural
        </h5>
        <p>
          enter into contracts as defined by the Indian Contract Act, of 1872.
          By accessing or utilizing the Platform, you affirm and confirm that
          you have the competence to enter into a contract, or you have obtained
          the necessary parental/guardian consent if you are below 18 years of
          age.
        </p>
        <h5>
          Individual Users: To use the Platform, individuals must be at least 18
          years old and possess the legal capacity to
        </h5>
        <p>
          Users must be at least fourteen (14) years old. Users under eighteen
          (18) require parental/guardian consent.
        </p>
      </section>

      <footer>
        <div>
          Note: <a href="www.vedasankalpa.comm">vedasankalpa.com</a> operates
          for helpdesk inquiries. This notice is available in both English and
          Hindi.
        </div>
        <p style={{ marginTop: 0 }}>of Veda Sankalpa Seva Trust</p>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
