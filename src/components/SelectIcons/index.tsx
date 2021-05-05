import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SelectIconsProps {
    name: string;
}

const SelectIcons: React.FC<SelectIconsProps> = ({ name }) => {
    
  return <Icon name={name} size={18} color="#333" />;
}

export default SelectIcons;