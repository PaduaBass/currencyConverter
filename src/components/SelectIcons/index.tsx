import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SelectIconsProps {
    name: string;
    color: string;
}

const SelectIcons: React.FC<SelectIconsProps> = ({ name, color}) => {
    
  return <Icon name={name} size={18} color={color} />;
}

export default SelectIcons;