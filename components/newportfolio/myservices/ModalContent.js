import { RoundedTab, RoundedTabGroup } from "@utils/customhook/roundedTabs";
import React from "react";
import IconSearch from "../Sample";

const ModalContent = (props) => {
  return (
    <div>
      <RoundedTabGroup defaultTabName="all" tabGroupClassName="ml-10 mb-2">
        <RoundedTab name="all" title="All Icons">
          <div>
            <IconSearch {...props} />
          </div>
        </RoundedTab>
        <RoundedTab name="Ai" title="Solid Icons">
          <div>qwe</div>
        </RoundedTab>
        <RoundedTab name="Bs" title="Outlined Icons">
          <div>zxc</div>
        </RoundedTab>
      </RoundedTabGroup>
    </div>
  );
};

export default ModalContent;
