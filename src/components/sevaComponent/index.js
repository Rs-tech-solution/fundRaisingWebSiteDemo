import React, { useEffect, useRef, useState } from "react";
import styles from "./sevas.module.scss";
import TabButton from "../shared/tabs";
import StorySection from "../storySection";
// import CampaignUpdates from "@/app/dummy/page";
import VideoSection from "../videoSection";
import SevaProduct from "../shared/sevaProduct";
import { useRouter } from "next/navigation";
import CampaignUpdates from "../campaignUpdates";

const events = [
  {
    img: "/slidesImages/categoryicon1.png",
    eventInfo: "Event Mahakshada Ekadashi",
  },
  {
    img: "/slidesImages/categoryicon1.png",
    eventInfo: "Date: 11th Dec 2024",
  },
  {
    img: "/slidesImages/categoryicon1.png",
    eventInfo: "Venue: Tirupati Kshetra",
  },
];

const story =
  "Veda Sankalpa brings special Homa and Puja rituals for you in this Durga Navaratri!Perform the rituals from your home through Paroksha Seva (online Puja), and fulfil your Navaratri Deeksha to transform your life with Jaganmatha’s grace!!!What are the special rituals you can perform with us?October 12th - Vijaya Dashami Special:Lalita Sahasranama HomamChandi Homam Abhishekam How do we perform these Pujas in your name Veda Sankalpa brings special Homa and Puja rituals for you in this Durga Navaratri!Perform the rituals from your home through Paroksha Seva (online Puja), and fulfil your Navaratri Deeksha to transform your life with Jaganmatha’s grace!!!What are the special rituals you can perform with us?October 12th - Vijaya Dashami Special:Lalita Sahasranama HomamChandi Homam Abhishekam How do we perform these Pujas in your name Veda Sankalpa brings special Homa and Puja rituals for you in this Durga Navaratri!Perform the rituals from your home through Paroksha Seva (online Puja), and fulfil your Navaratri Deeksha to transform your life with Jaganmatha’s grace!!!What are the special rituals you can perform with us?October 12th - Vijaya Dashami Special:Lalita Sahasranama HomamChandi Homam Abhishekam How do we perform these Pujas in your name Veda Sankalpa brings special Homa and Puja rituals for you in this Durga Navaratri!Perform the rituals from your home through Paroksha Seva (online Puja), and fulfil your Navaratri Deeksha to transform your life with Jaganmatha’s grace!!!What are the special rituals you can perform with us?October 12th - Vijaya Dashami Special:Lalita Sahasranama HomamChandi Homam Abhishekam How do we perform these Pujas in your name Veda Sankalpa brings special Homa and Puja rituals for you in this Durga Navaratri!Perform the rituals from your home through Paroksha Seva (online Puja), and fulfil your Navaratri Deeksha to transform your life with Jaganmatha’s grace!!!What are the special rituals you can perform with us?October 12th - Vijaya Dashami Special:Lalita Sahasranama HomamChandi Homam Abhishekam How do we perform these Pujas in your name Veda Sankalpa brings special Homa and Puja rituals for you in this Durga Navaratri!Perform the rituals from your home through Paroksha Seva (online Puja), and fulfil your Navaratri Deeksha to transform your life with Jaganmatha’s grace!!!What are the special rituals you can perform with us?October 12th - Vijaya Dashami Special:Lalita Sahasranama HomamChandi Homam Abhishekam How do we perform these Pujas in your name";

const products = [
  {
    id: 1,
    imageSrc: "/slidesImages/sevaproduct.png",
    title:
      " Sampoorna Bhagavad Gita Homa + Madhu Abhishekam + Sahasra Tulasi Archana + Energised Sri Krishna Lotus Feet",
    description:
      " Imbibe the divine virtues of the Gita and transform your life of Moshada Ekadashi. Appease Lord Mahavishnu by offering Abhishekam with honey and Archana with 1000 Tulasi Dalas. Purify your energy and overcome mental stress, negative thoughts and issues. Boost your self confidence and strengthen your Bhakti and Spiritual Sadhana",
    originalPrice: "₹4,048",
    discountedPrice: "₹3,717",
    discount: "8% off",
  },
  {
    id: 2,
    imageSrc: "/slidesImages/sevaproduct.png",
    title:
      " Sampoorna Bhagavad Gita Homa + Madhu Abhishekam + Sahasra Tulasi Archana + Energised Sri Krishna Lotus Feet",
    description:
      " Imbibe the divine virtues of the Gita and transform your life of Moshada Ekadashi. Appease Lord Mahavishnu by offering Abhishekam with honey and Archana with 1000 Tulasi Dalas. Purify your energy and overcome mental stress, negative thoughts and issues. Boost your self confidence and strengthen your Bhakti and Spiritual Sadhana",
    originalPrice: "₹4,048",
    discountedPrice: "₹3,717",
    discount: "8% off",
  },
  {
    id: 3,
    imageSrc: "/slidesImages/sevaproduct.png",
    title:
      " Sampoorna Bhagavad Gita Homa + Madhu Abhishekam + Sahasra Tulasi Archana + Energised Sri Krishna Lotus Feet",
    description:
      " Imbibe the divine virtues of the Gita and transform your life of Moshada Ekadashi. Appease Lord Mahavishnu by offering Abhishekam with honey and Archana with 1000 Tulasi Dalas. Purify your energy and overcome mental stress, negative thoughts and issues. Boost your self confidence and strengthen your Bhakti and Spiritual Sadhana",
    originalPrice: "₹4,048",
    discountedPrice: "₹3,717",
    discount: "8% off",
  },
  {
    id: 4,
    imageSrc: "/slidesImages/sevaproduct.png",
    title:
      " Sampoorna Bhagavad Gita Homa + Madhu Abhishekam + Sahasra Tulasi Archana + Energised Sri Krishna Lotus Feet",
    description:
      " Imbibe the divine virtues of the Gita and transform your life of Moshada Ekadashi. Appease Lord Mahavishnu by offering Abhishekam with honey and Archana with 1000 Tulasi Dalas. Purify your energy and overcome mental stress, negative thoughts and issues. Boost your self confidence and strengthen your Bhakti and Spiritual Sadhana",
    originalPrice: "₹4,048",
    discountedPrice: "₹3,717",
    discount: "8% off",
  },
];

const SevaComponent = ({ id }) => {
  const [activeTab, setActiveTab] = useState(null);
  const isScrolling = useRef(false);
  const [tabVisible, setTabVisible] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    // router.push("/checkoutpage");
    console.log("clicked");
  };

  const refs = {
    sevaRef: useRef(null),
    storyRef: useRef(null),
    updatesRef: useRef(null),
    videoRef: useRef(null),
  };

  const tabs = [
    {
      label: "Seva",
      ref: refs.sevaRef,
    },
    {
      label: "Story",
      ref: refs.storyRef,
    },
    {
      label: "Updates",
      ref: refs.updatesRef,
    },
    {
      label: "Videos",
      ref: refs.videoRef,
    },
  ];

  const scrollToSection = (ref, tabName) => {
    isScrolling.current = true;
    setActiveTab(tabName);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      isScrolling.current = false;
    }, 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling.current) return;
      let closestTab = activeTab;
      tabs.forEach((tab) => {
        if (tab.ref.current) {
          const rect = tab.ref.current.getBoundingClientRect();
          if (rect.top <= 40 && rect.bottom > window.innerHeight / 2) {
            closestTab = tab.label;
          }
        }
      });

      setActiveTab(closestTab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  useEffect(() => {
    let prevScroll = window.scrollY;
    let hasScrolledUp = false;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScroll > currentScrollPos) {
        setTabVisible(true);
        hasScrolledUp = true;
      }

      if (prevScroll < currentScrollPos && hasScrolledUp) {
        setTabVisible(false);
      }

      prevScroll = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src="/slidesImages/seva.png" />
        <div className={styles.detail}>
          <h2>
            On Moskhada Ekadashi, Sri Krishna revealed the Gita to Arjuna. Join
            Bhagavad Gita Homa for your holistic development in life
          </h2>
          <div className={styles.sevatimer}>
            {events.map((event, index) => (
              <div className={styles.event} key={index}>
                <img src={event.img} />
                <div className={styles.eventinfo}>{event.eventInfo}</div>
              </div>
            ))}
          </div>
          <div className={styles.btn}>
            <button onClick={() => handleClick()}>Book this seva</button>
          </div>
        </div>
      </div>
      <div className={`${styles.tabs} ${tabVisible ? styles.visible : ""}`}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.label}
            label={tab.label}
            icon={tab.icon}
            activeTab={activeTab}
            sectionRef={tab.ref}
            scrollToSection={scrollToSection}
            tabClassName={styles.tab}
            activeClassName={styles.activeTabClassName}
            tabLabelClassName={styles.tabLebel}
          />
        ))}
      </div>
      <div ref={refs.sevaRef}>
        <div className={styles.sevas}>
          {products.map((product, index) => (
            <SevaProduct key={index} product={product} />
          ))}
        </div>
      </div>
      <div ref={refs.storyRef}>
        <StorySection story={story} className={styles.story} />
      </div>
      <div ref={refs.updatesRef}>
        <CampaignUpdates campaignUpdates={[]} />
      </div>
      <div ref={refs.videoRef}>
        <VideoSection />
      </div>
    </div>
  );
};

export default SevaComponent;
