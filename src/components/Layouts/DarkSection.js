import React from "react";
import { ContainerLayout } from "./ContainerLayout";

export const DarkSection = ({ children }) => {
  return (
    <ContainerLayout
      attrs={{
        sx: {
          bgcolor: "sectionDark.background",
          color: "sectionDark.paragraph",
        },
      }}
    >
      {children}
    </ContainerLayout>
  );
};
