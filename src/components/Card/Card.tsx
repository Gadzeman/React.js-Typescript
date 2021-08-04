import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = "outlined",
    primary = "primary"
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> =
    ({
         width,
         height,
         children,
         variant,
         onClick
     }) => {
    const [number, setNumber] = useState(1)
        return (
            <div style={{
                width,
                height,
                background: variant === CardVariant.primary ? "lightblue" : "",
                border: variant === CardVariant.outlined ? "1px solid gray" : "none",
            }}
                onClick={() => onClick(number)}
            >
                {children}
            </div>
        );
    };

export default Card;