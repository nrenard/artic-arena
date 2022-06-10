import React, { ReactNode } from "react";

import { ContainerNav, TabComponent, TabNav, NavActive } from "./styles";

interface IProps {
  currentTab: number;
  setCurrentTab(currentTab: number): void;
  tabs: {
    component: ReactNode;
    name: string;
  }[];
}

const TabsAbout: React.FC<IProps> = ({ tabs, currentTab, setCurrentTab }) => {
  const tabActive = tabs[currentTab];

  return (
    <>
      <ContainerNav>
        <TabNav>
          {tabs.map(({ name }, index) => (
            <NavActive
              key={name}
              active={index === currentTab}
              onClick={() => setCurrentTab(index)}
              href={`#${name}`}
              id={name}
            >
              {name}
            </NavActive>
          ))}
        </TabNav>
      </ContainerNav>
      <TabComponent>{tabActive.component}</TabComponent>
    </>
  );
};

export default TabsAbout;
