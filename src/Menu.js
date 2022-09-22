import { useState } from "react";

export const Menu = (props) => {

  const { menuConfig } = props;
  const [clicked, setClicked] = useState(null);

  return (
    <>
      {menuConfig.map((item, index) => {
        return (
          <div data-test-id={`first-level-${item.title.toLowerCase()}`} key={`${item}${index}`}>

            <div>
              {item.title}
              {item.subItems && (
                <button
                  data-test-id={`button-${item.title.toLowerCase()}`}
                  onClick={(e) => {
                    const clickData = e.target.innerText === "Hide" ? null : item;
                    setClicked(clickData);
                  }}
                >
                  {clicked?.title !== item.title ? "Expand" : "Hide"}
                </button>
              )}

              <div>
                {clicked?.title === item.title && (
                  <ul>
                    {clicked &&
                      clicked?.subItems?.map((subItem, index) => {
                        if (clicked.title === item.title) {
                          return (
                            <li
                              key={`${subItem}${index}`}
                              data-test-id={`li-${item.title.toLowerCase()}-${subItem.toLowerCase()}`}
                            >
                              {subItem}
                            </li>
                          );
                        }
                      })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
