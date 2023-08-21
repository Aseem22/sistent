import { FC } from "react";
import { IconProps } from "./types";

export const TouchAppIcon: FC<IconProps> = ({
    width,
    height,
    fill,
    color,
    className,
    onClick,
    ...props
}) => {
    const defaultFill = color ? color : "currentColor";
    const defaultWidth = width ? width : "18px";
    const defaultHeight = height ? height : "24px";

    return (
        <svg
            width={defaultWidth}
            height={defaultHeight}
            fill={fill ? fill : defaultFill}
            onClick={onClick}
            className={className}
            color={color ? color : "unset"}
            viewBox="0 0 18 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#clip0_1_9)">
                <path d="M4.85714 9.41714V5.14286C4.85714 3.56571 6.13714 2.28571 7.71429 2.28571C9.29143 2.28571 10.5714 3.56571 10.5714 5.14286V9.41714C11.9543 8.49143 12.8571 6.92571 12.8571 5.14286C12.8571 2.29714 10.56 0 7.71429 0C4.86857 0 2.57143 2.29714 2.57143 5.14286C2.57143 6.92571 3.47429 8.49143 4.85714 9.41714ZM16.1029 14.7086L10.9143 12.1257C10.72 12.0457 10.5143 12 10.2971 12H9.42857V5.14286C9.42857 4.19429 8.66286 3.42857 7.71429 3.42857C6.76571 3.42857 6 4.19429 6 5.14286V17.4171C1.88571 16.5486 1.95429 16.56 1.80571 16.56C1.45143 16.56 1.13143 16.7086 0.902857 16.9371L0 17.8514L5.64571 23.4971C5.95428 23.8057 6.38857 24 6.85714 24H14.6171C15.4743 24 16.1371 23.3714 16.2629 22.5371L17.12 16.5143C17.1314 16.4343 17.1429 16.3543 17.1429 16.2857C17.1429 15.5771 16.7086 14..96 16.1029 14.7086Z" fill="#808080" />
            </g>
            <defs>
                <clipPath id="clip0_1_9">
                    <rect width="17.14" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default TouchAppIcon