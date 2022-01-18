import React from 'react';
import ContainerLayout from "./ContainerLayout";

const DarkSection = ({children}) => {
    return (
        <ContainerLayout attrs={{sx: {bgcolor: 'sectionLight.background', color: 'sectionLight.paragraph'}}}>
            {children}
        </ContainerLayout>
    );
};

export default DarkSection;