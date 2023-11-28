import { useState } from "react";

export function RoundedTabGroup(props) {
  const [selectedPage, setSelectedPage] = useState(props.defaultTabName ?? "");
  return (
    <div className={props.className}>
      <div
        style={{ width: "fit-content" }}
        className={`flex rounded-full shadow-sm bg-secondary  ${props.tabGroupClassName}`}
        role="group"
      >
        {props.children.map((tabItem, index) => {
          console.log(tabItem?.props?.name, "rendertabfunction1");
          return (
            <button
              type="button"
              style={{
                backgroundColor:
                  selectedPage === tabItem?.props?.name
                    ? "#e24840"
                    : "transparent",
              }}
              className={
                "btn px-4 py-2 text-sm font-medium rounded-full hover:opacity-80 focus:z-10 " +
                (selectedPage === tabItem?.props?.name
                  ? "text-light "
                  : "text-lighter border-none")
              }
              onClick={() => setSelectedPage(tabItem.props.name)}
              key={index}
            >
              {tabItem?.props?.title}
            </button>
          );
        })}
      </div>
      {props.children.map((tabItem, index) => (
        <div key={index}>
          {selectedPage === tabItem.props?.name && tabItem.props?.children}
        </div>
      ))}
    </div>
  );
}

export function RoundedTab(props) {
  return <div>{props.children}</div>;
}
