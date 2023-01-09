import React from "react";
import { IconType } from "react-icons/lib";

enum IconSizes {
    "xs" = 14,
    "s" = 20,
    "m" = 26,
    "l" = 32,
    "xl" = 38,
}

export type IconSize = keyof typeof IconSizes;

type Props = {
    IconType: IconType;
    size?: IconSize;
    color?: string;
}

export const Icon: React.FC<Props> = ({IconType, size = 'xs', color}) => {
    return (
        <IconType size={IconSizes[size]} color={color}></IconType>
    )
}
