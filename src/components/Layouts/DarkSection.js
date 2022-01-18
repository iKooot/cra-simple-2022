import React from 'react';
import ContainerLayout from "./ContainerLayout";

const DarkSection = ({children}) => {
    return (
        <ContainerLayout attrs={{sx: {bgcolor: 'sectionDark.background', color: 'sectionDark.paragraph'}}}>
            {children}
        </ContainerLayout>
    );
};

export default DarkSection;