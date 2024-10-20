import React from "react";
import Tab from "../Tab/Tab";
import PlusButton from "../PlusButton/PlusButton";

export default function PresetTabs({
  TabsInfo,
  plusButtonClick,
  onTabSelect,
  activeTab,
  variant,
  themeMode,
  loading,
}) {
  const handleTabClick = (identifier) => {
    if (!loading && onTabSelect) {
      onTabSelect(identifier);
    }
  };

  return (
    <>
      <div className="mb-[4px] mt-[4px] flex w-auto items-center gap-5 lg:mb-0 lg:gap-5 xl:mt-0 ">
        {TabsInfo.map((tab, index) => {
          const tabIdentifier = tab.name || tab.title || tab.label || index;
          const isActive = activeTab === tabIdentifier;
          const isLast = index === TabsInfo.length - 1;

          return (
            tab.checked && (
              <React.Fragment key={index}>
                <div
                  className="flex-shrink-0"
                  style={
                    loading && !isActive
                      ? { opacity: 0.7, pointerEvents: "none" }
                      : {}
                  }
                >
                  <Tab
                    tab={tab}
                    toggle={isActive}
                    onClick={() => handleTabClick(tabIdentifier)}
                    isFirst={index === 0}
                    isLast={isLast}
                    variant={variant}
                    themeMode={themeMode}
                  />
                </div>
              </React.Fragment>
            )
          );
        })}
        <div
          className="relative -left-3 z-10 mb-1"
          style={loading ? { opacity: 0.7, pointerEvents: "none" } : {}}
        >
          <PlusButton
            action={!loading ? plusButtonClick : null}
            size={32}
            variant={variant}
            themeMode={themeMode}
          />
        </div>
      </div>
    </>
  );
}
