import React, { useState } from "react";
import TabsList from "./TabsList";
import TabsItem from "./TabsItem";
import TabsContent from "./TabsContent";
import TabContent1 from "./TabContent1";
import TabContent2 from "./TabContent2";

const Tabs = () => {
    const [data, setData] = useState([
      { id: 1, title: "ثبت نام" },
      { id: 2, title: "ورود" },
    ]);
    const [selectedTab, setSelectedTab] = useState(0);
    const handleClick = (index) => {
    setSelectedTab(index);
    };
      return ( 
        <div className="tabs">
          <TabsList>
            {data.map((item, index) => (
              <TabsItem
                key={item.id}
                classes={selectedTab == index ? "activeTab" : ""}
                handleClick={() => handleClick(index)}
              >
                {item.title}
              </TabsItem>
            ))}
          </TabsList>
          <TabsContent tabId="0" activeTab={selectedTab}>
              <TabContent2/>
          </TabsContent>
          <TabsContent tabId="1" activeTab={selectedTab}>
              <TabContent1/>
          </TabsContent>
        </div>
      );
    };
    
    export default Tabs;