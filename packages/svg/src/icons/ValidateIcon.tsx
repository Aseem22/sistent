import { FC } from "react";
import { IconProps } from "./types";

export const ValidateIcon: FC<IconProps> = ({
    width,
    height,
    fill
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
            viewBox="0 0 24 24"
            fill={fill}
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
    )
}

export default ValidateIcon