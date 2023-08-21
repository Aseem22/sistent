import { FC } from "react";
import { IconProps } from "./types";

export const PatternSwitchIcon: FC<IconProps> = ({
  width,
  height,
  color,
  ...props
}) => {
  const patternColor = color === "true" ? "#00B39F" : "#CCCCCC"

  return (
    <svg
      width={width}
      height={height}
      fill={patternColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M38.6219 9.30732C39.8705 10.8693 40.7821 12.6188 41.4814 14.4682C42.3804 16.855 42.7925 19.3542 42.2805 21.8785C41.5937 25.2649 39.6083 27.6517 36.2993 28.8013C35.0132 29.2512 33.6771 29.4261 32.3535 28.8638C32.1693 28.8 31.9965 28.7072 31.8415 28.5889C31.8217 29.3773 31.5255 30.1337 31.0049 30.7257C31.1804 30.6511 31.3652 30.6007 31.5543 30.5758C31.7356 30.5386 31.9191 30.5135 32.1037 30.5008C33.8769 30.3509 35.5876 29.976 37.1984 29.2012C39.6957 28.0016 41.7935 26.3021 43.5667 24.1902C44.5866 23.0042 45.4394 21.684 46.1015 20.2665C47.063 18.1671 47.6124 15.9803 47.8871 13.681C48.1119 11.7191 48.0494 9.79467 47.8621 7.85777C47.8122 7.39541 47.6124 7.19547 47.1878 7.12049C46.1015 6.93305 45.0276 6.70812 43.9537 6.4582C41.1692 5.7834 38.3721 5.20858 35.5751 4.55878C34.5886 4.33385 33.5897 4.12391 32.5907 3.89648C33.315 4.59627 34.1016 5.1586 34.8633 5.77091C36.2119 6.83308 37.5355 7.94524 38.6219 9.30732Z" fillOpacity="0.8" />
      <path d="M8.00372 33.4249C8.85283 29.8385 10.2638 26.5396 13.1858 24.1153C15.8455 21.9035 18.8423 21.2162 22.1513 22.3658C23.8246 22.9407 25.2606 23.8779 26.0223 25.5773C26.0949 25.7287 26.1493 25.8881 26.1846 26.0522C26.7023 25.5532 27.3688 25.2373 28.0826 25.1525C28.0451 25.1275 27.9952 25.09 27.9452 25.0525C26.9338 24.2403 25.9598 23.3405 24.7861 22.7407C20.5905 20.6039 16.1826 20.329 11.6998 21.4661C6.94234 22.6782 3.2712 25.5649 0.261872 29.3637C-0.0752731 29.7886 -0.0502994 30.0635 0.224411 30.5008C2.55945 34.1372 4.88201 37.7986 7.20456 41.4475C7.51674 41.9348 7.82891 42.4097 8.25346 43.047C8.30341 41.9723 8.06616 41.1101 7.95378 40.2478C7.60414 37.961 7.46679 35.6992 8.00372 33.4249Z" />
      <path d="M15.159 8.18269C16.7748 7.90976 18.405 7.73035 20.0414 7.64535C21.5273 7.55788 22.9758 7.85778 24.3993 8.23267C27.7957 9.1199 30.8425 10.6069 33.0652 13.4186C35.2004 16.1053 35.7124 19.1043 34.5636 22.3408C33.9767 23.9903 32.9903 25.3649 31.3045 26.1022C31.1875 26.1601 31.0602 26.1941 30.9299 26.2022C31.4397 26.7376 31.7561 27.4281 31.829 28.1641C31.9052 28.0394 31.993 27.9223 32.0912 27.8142C33.3274 26.3396 34.4512 24.8026 35.0881 22.9531C35.9364 20.5367 36.2889 17.9739 36.1245 15.418C36.0029 12.9268 35.374 10.4869 34.2764 8.24767C32.7031 5.06114 30.4305 2.44945 27.6584 0.237624C27.2463 -0.0872761 26.9466 -0.0497876 26.5096 0.225128C22.9383 2.52442 19.3546 4.78623 15.7834 7.07303C15.234 7.42292 14.6346 7.73532 14.0977 8.23517C14.4523 8.24888 14.8075 8.23132 15.159 8.18269V8.18269Z" />
      <path d="M5.1571 23.0283C6.55563 21.2413 7.87923 19.3919 9.76475 18.0673C13.2361 15.6181 17.0071 14.0185 21.3526 14.6059C24.8489 15.0682 27.3962 16.9676 28.6698 20.3291C29.2193 21.7787 29.3941 23.2657 28.7697 24.7652C28.7324 24.8671 28.682 24.9637 28.6199 25.0527C29.3394 25.0679 30.0351 25.3131 30.6053 25.7524L30.5679 25.6025C30.5388 25.4164 30.5221 25.2285 30.5179 25.0402C30.393 23.5656 30.1433 22.1286 29.6064 20.729C28.4701 17.7799 26.5346 15.4431 24.1496 13.4062C20.6283 10.4197 16.5076 9.14505 11.9874 9.00759C10.7013 8.9701 9.41512 8.9576 8.12897 9.13255C7.2424 9.25751 7.17997 9.25751 6.99267 10.1322C6.19351 13.9186 5.38602 17.7008 4.57021 21.4788C4.35794 22.466 4.15815 23.4532 3.9209 24.5653C4.48281 24.078 4.78249 23.5281 5.1571 23.0283Z" fillOpacity="0.8" />
      <path d="M56.7776 26.5271C54.4301 22.8657 52.1075 19.1919 49.76 15.543C49.4478 15.0556 49.1981 14.5183 48.6861 13.981C48.836 15.2556 48.9484 16.3677 49.0982 17.4674C49.4229 19.7667 49.4228 22.0535 48.811 24.3278C47.8495 27.8892 46.2637 31.0507 43.2668 33.35C41.6311 34.6121 39.7331 35.187 37.6852 35.2119C36.2492 35.2244 34.9006 34.8121 33.627 34.1373C32.5281 33.55 31.5791 32.7752 31.0297 31.613C30.8549 31.2507 30.78 31.0257 30.8299 30.8758C30.2944 31.415 29.588 31.7507 28.832 31.8255C29.0325 31.9488 29.2206 32.0911 29.3939 32.2504C30.4428 33.1001 31.4917 33.9623 32.7279 34.5496C36.1618 36.1866 39.7955 36.5365 43.4916 35.9492C49.0607 35.0745 53.2938 31.9379 56.7526 27.6393C57.0773 27.2419 57.0398 26.927 56.7776 26.5271Z" />
      <path d="M49.3851 37.0737C45.9263 40.5477 41.7931 42.4846 36.8109 42.4971C33.3395 42.5096 29.6559 40.2228 28.4197 36.8738C27.9077 35.4867 27.5706 34.0747 28.095 32.6126C28.2324 32.2252 28.3323 31.9753 28.4322 31.8504C27.6768 31.8399 26.9469 31.5759 26.3594 31.1006C26.4219 31.2864 26.4597 31.4797 26.4718 31.6754C26.5841 32.7501 26.6341 33.8372 26.9587 34.8744C28.6694 40.3977 32.3531 44.1716 37.5476 46.4584C40.8691 47.9204 44.4029 48.3703 48.0366 47.9829C49.6598 47.808 49.6723 47.8454 49.997 46.4209C50.8836 42.4971 51.7826 38.5608 52.6442 34.6245C52.794 33.9622 53.0563 33.3124 53.0438 32.4502C52.844 32.7251 52.7316 32.875 52.6192 33.025C51.6203 34.4496 50.6088 35.8491 49.3851 37.0737Z" fillOpacity="0.8" />
      <path d="M18.9423 48.4077C17.3564 46.6332 16.2201 44.5714 15.4334 42.3471C14.6842 40.2102 14.2472 38.0234 14.5968 35.7366C15.1213 32.4126 16.7945 29.9384 19.9037 28.5513C21.4022 27.8765 22.988 27.5641 24.6238 28.1889C24.8022 28.25 24.9738 28.3296 25.1357 28.4263C25.151 27.7063 25.396 27.0101 25.835 26.4395C25.6976 26.4644 25.5728 26.4769 25.4354 26.4894C24.5474 26.5518 23.6635 26.6645 22.7882 26.8268C19.7664 27.4641 17.2565 29.0511 15.0464 31.138C12.1376 33.829 10.1644 37.3798 9.41478 41.2724C8.9278 43.6966 8.86536 46.1209 9.05267 48.5826C9.12759 49.5324 9.51468 49.8697 10.4637 50.0572C14.4345 50.8569 18.3679 51.8067 22.3262 52.6689C23.0005 52.8188 23.6623 53.0688 24.5488 53.0938C23.8995 52.5939 23.4001 52.2065 22.8881 51.8316C21.4896 50.782 20.1035 49.7198 18.9423 48.4077Z" fillOpacity="0.8" />
      <path d="M42.5805 48.7352C41.1695 48.9851 39.7585 49.1601 38.3225 49.2975C37.1612 49.41 35.9749 49.4725 34.8386 49.2975C33.1906 49.0681 31.579 48.6271 30.0437 47.9854C27.6587 46.9857 25.486 45.6612 23.8752 43.5743C21.9397 41.0501 21.2779 38.2509 22.2394 35.1769C22.7763 33.4399 23.6754 31.8904 25.4235 31.0531C25.7357 30.9032 25.948 30.8282 26.0978 30.8532C25.5721 30.3282 25.2379 29.6417 25.1488 28.9038C25.0726 29.0173 24.9892 29.1259 24.8991 29.2287C24.0875 30.2034 23.2633 31.1656 22.6764 32.3028C21.2654 35.0519 20.7535 37.976 20.8284 41.0501C20.8759 43.3194 21.3416 45.5604 22.2019 47.6605C23.7253 51.2844 26.1353 54.2335 29.2071 56.6828C29.6816 57.0701 30.0312 57.1076 30.5681 56.7577C33.6524 54.7584 36.7741 52.7965 39.8708 50.8221C40.8948 50.1723 41.9187 49.51 42.9551 48.8352C42.9077 48.7859 42.8477 48.7505 42.7817 48.7329C42.7157 48.7153 42.6461 48.7161 42.5805 48.7352V48.7352Z" />
    </svg>
  )
}
export default PatternSwitchIcon