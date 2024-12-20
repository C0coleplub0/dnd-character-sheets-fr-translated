import React from 'react';

interface PageTitleProps {
  value?: string;
  onChange?: (value: string) => void;
}

const PageTitle: React.FC<PageTitleProps> = ({ value = "Titre de la campagne", onChange }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Titre de la campagne" 
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default PageTitle;