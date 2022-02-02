import React from "react";
import { ContainerLayout } from "./ContainerLayout";

export const LightSection = ({ children }) => {
  return (
    <ContainerLayout
      attrs={{
        sx: {
          bgcolor: "sectionLight.background",
          color: "sectionLight.paragraph",
        },
      }}
    >
      {children}
    </ContainerLayout>
  );
};
