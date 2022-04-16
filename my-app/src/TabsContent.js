import React from "react";


const TabsContent = (props) => {
  const { children, tabId, activeTab } = props;
  return (
    <div className={`tabs__content ${activeTab == tabId ? "active" : ""}`}>
      {children}
    </div>
  );
};

export default TabsContent;