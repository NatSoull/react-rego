import { useRef, useState } from "react";
import Accordion from "./Accordion";

const AccordionGroup = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Fix a problem",
      content:
        "Troubleshoot problems playing videos Troubleshoot account issues Fix upload problems Fix YouTube Premium membership issues Get help with the YouTube Partner Program Learn about recent updates on YouTube Get help with YouTube",
      isShow: false,
    },
    {
      id: 2,
      title: "Watch videos",
      content:
        "Find videos to watch Change video settings Watch videos on different devices Comment, subscribe, & connect with creators Save or share videos & playlists",
      isShow: false,
    },
    {
      id: 3,
      title: "Manage your account & settings",
      content:
        "Sign up and manage your account Manage account settings Manage privacy settings Manage accessibility settings Troubleshoot account issues",
      isShow: false,
    },
    {
      id: 4,
      title: "Supervised experience on YouTube",
      content:
        "Understand your choices as a family What is a supervised experience on YouTube? Get started with supervised accounts Set content settings for supervised experiences Parental controls & settings for supervised experiences on YouTube FAQs for parents about supervised accounts Info for creators about a supervised experience on YouTube",
      isShow: false,
    },
  ]);

  const condShowAccordion = (id) => {
    setData(
      data.map((el) =>
        el.id === id ? { ...el, isShow: !el.isShow } : { ...el, isShow: false }
      )
    );
  };

  console.log(useRef("hello").current)

  return (
    <div>
      <h1>FAQ Group</h1>
      <div>
        {data.map(({ id, title, content, isShow }) => (
          <Accordion
            key={id}
            id={id}
            title={title}
            content={content}
            isShow={isShow}
            condShowAccordion={condShowAccordion}
          />
        ))}
      </div>
    </div>
  );
};

export default AccordionGroup;
