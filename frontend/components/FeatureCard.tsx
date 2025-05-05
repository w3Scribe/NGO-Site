import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { FC } from 'react';

import { elementAnimations, navAnimations } from '../constants/animationSystem';
import { renderIcon, svgIcons } from '../constants/icons';
import { componentStyles, getButtonStyles } from '../constants/uiSystem';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof svgIcons;
  link: string;
  linkText: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  link,
  linkText,
}) => {
  // Use the renderIcon helper from our icon system
  const iconProps = renderIcon(icon, 'h-8 w-8 text-primary mb-4', 1.5);
  
  return (
    <motion.div
      className={`${componentStyles.card.base} ${componentStyles.card.hover} ${componentStyles.card.padded}`}
      variants={elementAnimations.button}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <svg
        viewBox={iconProps.viewBox}
        className={iconProps.className}
        fill={iconProps.fill}
        stroke={iconProps.stroke}
        strokeWidth={iconProps.strokeWidth}
        strokeLinecap={iconProps.strokeLinecap}
        strokeLinejoin={iconProps.strokeLinejoin}
      >
        <path d={iconProps.path} />
      </svg>
      
      <h3 className={componentStyles.text.heading4}>{title}</h3>
      <p className={componentStyles.text.body + ' my-2'}>{description}</p>
      
      <motion.div
        className="mt-4"
        variants={navAnimations.navItem}
      >
        <Link
          to={link}
          className={getButtonStyles('primary')}
        >
          <span className="flex items-center">
            {linkText}
            <motion.svg
              className="ml-1 h-4 w-4"
              variants={elementAnimations.arrowHover}
              whileHover="whileHover"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={svgIcons.arrowRight.path} />
            </motion.svg>
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
