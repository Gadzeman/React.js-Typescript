import React, {FC} from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: () => void;
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         children,
         variant,
         onClick
     }) => {
        return (
            <div style={{
                width,
                height,
                background: variant === CardVariant.primary ? "lightblue" : "",
                border: variant === CardVariant.outlined ? "1px solid gray" : "none",
            }}
                onClick={onClick}
            >
                {children}
            </div>
        );
    };

export default Card;