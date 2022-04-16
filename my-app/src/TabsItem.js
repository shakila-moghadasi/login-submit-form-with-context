import React from "react";


const TabsItem = (props) => {
  const { handleClick ,children,classes} = props;
  return (
    <li className={`tabs__item ${classes}`} onClick={handleClick}>
      {children}
    </li>
  );
};

export default TabsItem;