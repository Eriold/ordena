import React, { FC } from "react";
import { Wrapper } from "./styled";

interface TypeFill {
  type:
    | "home"
    | "menu"
    | "payment"
    | "order"
    | "config"
    | "guess"
    | "subtract"
    | "add"
    | "cash"
    | "table"
    | "clock";
  fill?: string;
  size?: number;
  background?: string;
}

export const Icon: FC<TypeFill> = ({
  fill = "#D8DBD9",
  size = 28,
  type,
  background = "white",
}) => {
  const Home = () => (
    <svg
      width={size}
      //   height="24"
      viewBox="0 0 28 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 3.79765L21 10.1506V21.1765H18.2V12.7059H9.8V21.1765H7V10.1506L14 3.79765ZM14 0L0 12.7059H4.2V24H12.6V15.5294H15.4V24H23.8V12.7059H28L14 0Z"
        fill={fill}
      />
    </svg>
  );

  const Menu = () => (
    <svg
      width={size}
      //   height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6522 2.44444L19.5556 8.34778V19.5556H2.44444V2.44444H13.6522ZM13.6522 0H2.44444C1.1 0 0 1.1 0 2.44444V19.5556C0 20.9 1.1 22 2.44444 22H19.5556C20.9 22 22 20.9 22 19.5556V8.34778C22 7.7 21.7433 7.07667 21.2789 6.62444L15.3756 0.721111C14.9233 0.256667 14.3 0 13.6522 0ZM4.88889 14.6667H17.1111V17.1111H4.88889V14.6667ZM4.88889 9.77778H17.1111V12.2222H4.88889V9.77778ZM4.88889 4.88889H13.4444V7.33333H4.88889V4.88889Z"
        fill={fill}
      />
    </svg>
  );

  const Payment = () => (
    <svg
      width={size}
      //   height="20"
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 0H2.5C1.1125 0 0.0125 1.1125 0.0125 2.5L0 17.5C0 18.8875 1.1125 20 2.5 20H22.5C23.8875 20 25 18.8875 25 17.5V2.5C25 1.1125 23.8875 0 22.5 0ZM22.5 17.5H2.5V10H22.5V17.5ZM22.5 5H2.5V2.5H22.5V5Z"
        fill={fill}
      />
    </svg>
  );

  const Order = () => (
    <svg
      width={size}
      //   height="23"
      viewBox="0 0 25 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0V23H25V0H0ZM11.1111 20.4444H2.77778V12.7778H11.1111V20.4444ZM11.1111 10.2222H2.77778V2.55556H11.1111V10.2222ZM22.2222 20.4444H13.8889V12.7778H22.2222V20.4444ZM22.2222 10.2222H13.8889V2.55556H22.2222V10.2222Z"
        fill={fill}
      />
    </svg>
  );

  const Config = () => (
    <svg
      width={size}
      //   height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.1688 13.176C21.2182 12.792 21.2552 12.408 21.2552 12C21.2552 11.592 21.2182 11.208 21.1688 10.824L23.7719 8.844C24.0063 8.664 24.068 8.34 23.9199 8.076L21.4526 3.924C21.3416 3.732 21.1318 3.624 20.9098 3.624C20.8358 3.624 20.7617 3.636 20.7001 3.66L17.6282 4.86C16.9867 4.38 16.2959 3.984 15.5433 3.684L15.0745 0.504C15.0375 0.216 14.7785 0 14.4701 0H9.5354C9.22698 0 8.96791 0.216 8.9309 0.504L8.46211 3.684C7.70957 3.984 7.01872 4.392 6.37722 4.86L3.30539 3.66C3.23137 3.636 3.15735 3.624 3.08334 3.624C2.87361 3.624 2.66389 3.732 2.55286 3.924L0.0855318 8.076C-0.0748444 8.34 -0.00082446 8.664 0.233572 8.844L2.8366 10.824C2.78726 11.208 2.75025 11.604 2.75025 12C2.75025 12.396 2.78726 12.792 2.8366 13.176L0.233572 15.156C-0.00082446 15.336 -0.0625078 15.66 0.0855318 15.924L2.55286 20.076C2.66389 20.268 2.87361 20.376 3.09567 20.376C3.16969 20.376 3.24371 20.364 3.30539 20.34L6.37722 19.14C7.01872 19.62 7.70957 20.016 8.46211 20.316L8.9309 23.496C8.96791 23.784 9.22698 24 9.5354 24H14.4701C14.7785 24 15.0375 23.784 15.0745 23.496L15.5433 20.316C16.2959 20.016 16.9867 19.608 17.6282 19.14L20.7001 20.34C20.7741 20.364 20.8481 20.376 20.9221 20.376C21.1318 20.376 21.3416 20.268 21.4526 20.076L23.9199 15.924C24.068 15.66 24.0063 15.336 23.7719 15.156L21.1688 13.176ZM18.7262 11.124C18.7755 11.496 18.7879 11.748 18.7879 12C18.7879 12.252 18.7632 12.516 18.7262 12.876L18.5535 14.232L19.6514 15.072L20.9838 16.08L20.1202 17.532L18.5535 16.92L17.2705 16.416L16.1602 17.232C15.6297 17.616 15.1239 17.904 14.6181 18.108L13.3104 18.624L13.113 19.98L12.8663 21.6H11.1392L10.9048 19.98L10.7074 18.624L9.39969 18.108C8.86922 17.892 8.37575 17.616 7.88229 17.256L6.75965 16.416L5.45197 16.932L3.88522 17.544L3.02165 16.092L4.35401 15.084L5.45197 14.244L5.27926 12.888C5.24225 12.516 5.21757 12.24 5.21757 12C5.21757 11.76 5.24225 11.484 5.27926 11.124L5.45197 9.768L4.35401 8.928L3.02165 7.92L3.88522 6.468L5.45197 7.08L6.73498 7.584L7.84528 6.768C8.37575 6.384 8.88155 6.096 9.38736 5.892L10.695 5.376L10.8924 4.02L11.1392 2.4H12.854L13.0883 4.02L13.2857 5.376L14.5934 5.892C15.1239 6.108 15.6174 6.384 16.1108 6.744L17.2335 7.584L18.5411 7.068L20.1079 6.456L20.9715 7.908L19.6514 8.928L18.5535 9.768L18.7262 11.124ZM12.0027 7.2C9.27633 7.2 7.06807 9.348 7.06807 12C7.06807 14.652 9.27633 16.8 12.0027 16.8C14.7291 16.8 16.9374 14.652 16.9374 12C16.9374 9.348 14.7291 7.2 12.0027 7.2ZM12.0027 14.4C10.6457 14.4 9.5354 13.32 9.5354 12C9.5354 10.68 10.6457 9.6 12.0027 9.6C13.3598 9.6 14.4701 10.68 14.4701 12C14.4701 13.32 13.3598 14.4 12.0027 14.4Z"
        fill={fill}
      />
    </svg>
  );

  const Guess = () => (
    <svg
      width={size}
      //   height="26"
      viewBox="0 0 32 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.2 11C14.288 11 16.8 8.53286 16.8 5.5C16.8 2.46714 14.288 0 11.2 0C8.112 0 5.6 2.46714 5.6 5.5C5.6 8.53286 8.112 11 11.2 11ZM11.2 3.14286C12.528 3.14286 13.6 4.19571 13.6 5.5C13.6 6.80429 12.528 7.85714 11.2 7.85714C9.872 7.85714 8.8 6.80429 8.8 5.5C8.8 4.19571 9.872 3.14286 11.2 3.14286ZM11.28 18.8571H4.432C6.016 18.0714 8.752 17.2857 11.2 17.2857C11.376 17.2857 11.568 17.3014 11.744 17.3014C12.288 16.1543 13.232 15.2114 14.368 14.4571C13.2 14.2529 12.096 14.1429 11.2 14.1429C7.456 14.1429 0 15.9814 0 19.6429V22H11.2V19.6429C11.2 19.3757 11.232 19.1086 11.28 18.8571ZM23.2 14.9286C20.256 14.9286 14.4 16.5157 14.4 19.6429V22H32V19.6429C32 16.5157 26.144 14.9286 23.2 14.9286ZM25.136 12.0686C26.352 11.3929 27.2 10.12 27.2 8.64286C27.2 6.47429 25.408 4.71429 23.2 4.71429C20.992 4.71429 19.2 6.47429 19.2 8.64286C19.2 10.12 20.048 11.3929 21.264 12.0686C21.84 12.3829 22.496 12.5714 23.2 12.5714C23.904 12.5714 24.56 12.3829 25.136 12.0686Z"
        fill={fill}
      />
    </svg>
  );

  const Subtract = () => (
    <svg
      width={size}
      //height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4 12.6H12.6H7V15.4H12.6H15.4H21V12.6H15.4ZM14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM14 25.2C7.826 25.2 2.8 20.174 2.8 14C2.8 7.826 7.826 2.8 14 2.8C20.174 2.8 25.2 7.826 25.2 14C25.2 20.174 20.174 25.2 14 25.2Z"
        fill={fill}
      />
    </svg>
  );

  const Add = () => (
    <svg
      width={size}
      //   height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4 7H12.6V12.6H7V15.4H12.6V21H15.4V15.4H21V12.6H15.4V7ZM14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM14 25.2C7.826 25.2 2.8 20.174 2.8 14C2.8 7.826 7.826 2.8 14 2.8C20.174 2.8 25.2 7.826 25.2 14C25.2 20.174 20.174 25.2 14 25.2Z"
        fill={fill}
      />
    </svg>
  );

  const Cash = () => (
    <svg
      width={size}
      id="Icons"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <style type="text/css"></style>
      <rect className="st0" height="12" width="22" x="3" y="8" stroke={fill} />
      <path
        className="st0"
        d="M3,16c2.2,0,4,1.8,4,4v4h22V12h-4c-2.2,0-4-1.8-4-4"
        stroke={fill}
      />
      <circle className="st0" cx="14" cy="14" r="3" stroke={fill} />
      <path className="st0" d="M7,8c0,2.2-1.8,4-4,4" stroke={fill} />
      <path className="st0" d="M25,16c-2.2,0-4,1.8-4,4" stroke={fill} />
      <rect height="680" width="536" x="-504" y="-144" fill="none"/>
    </svg>
  );

  const Table = () => (
    <svg
      width={size}
      //   height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_320_1227)">
        <path
          d="M14.7465 14.5235L14.7464 14.5236L14.7535 14.5304C14.805 14.5799 14.8151 14.6778 14.7465 14.7464C14.6817 14.8112 14.5883 14.8112 14.5236 14.7464L1.94357 2.16644C1.87884 2.1017 1.87884 2.00828 1.94357 1.94354C2.00831 1.8788 2.10173 1.8788 2.16647 1.94354L14.7465 14.5235Z"
          fill="white"
          stroke={fill}
        />
        <mask id="path-2-inside-1_320_1227" fill="white">
          <path d="M15.9146 16.84C15.6315 16.84 15.3602 16.7338 15.1478 16.5214L0.318529 1.67512C0.117974 1.4745 0 1.20306 0 0.908028C0 0.612992 0.106176 0.35336 0.318529 0.140933C0.719639 -0.260316 1.43928 -0.260316 1.84039 0.140933L16.6815 14.999C16.882 15.1996 17 15.471 17 15.7543C17 16.0375 16.8938 16.3089 16.6815 16.5214C16.4809 16.722 16.2096 16.84 15.9146 16.84V16.84ZM1.07356 0.43597C0.943789 0.43597 0.825815 0.483176 0.731436 0.577587C0.637058 0.671999 0.589868 0.790014 0.589868 0.908028C0.589868 1.02604 0.637058 1.15586 0.731436 1.25027L15.5843 16.0965C15.7613 16.2735 16.0798 16.2735 16.2568 16.0965C16.3511 16.0021 16.3983 15.8841 16.3983 15.7543C16.3983 15.6244 16.3511 15.5064 16.2568 15.4238L1.41568 0.577587C1.3213 0.483176 1.20333 0.43597 1.07356 0.43597Z" />
        </mask>
        <path
          d="M15.9146 16.84C15.6315 16.84 15.3602 16.7338 15.1478 16.5214L0.318529 1.67512C0.117974 1.4745 0 1.20306 0 0.908028C0 0.612992 0.106176 0.35336 0.318529 0.140933C0.719639 -0.260316 1.43928 -0.260316 1.84039 0.140933L16.6815 14.999C16.882 15.1996 17 15.471 17 15.7543C17 16.0375 16.8938 16.3089 16.6815 16.5214C16.4809 16.722 16.2096 16.84 15.9146 16.84V16.84ZM1.07356 0.43597C0.943789 0.43597 0.825815 0.483176 0.731436 0.577587C0.637058 0.671999 0.589868 0.790014 0.589868 0.908028C0.589868 1.02604 0.637058 1.15586 0.731436 1.25027L15.5843 16.0965C15.7613 16.2735 16.0798 16.2735 16.2568 16.0965C16.3511 16.0021 16.3983 15.8841 16.3983 15.7543C16.3983 15.6244 16.3511 15.5064 16.2568 15.4238L1.41568 0.577587C1.3213 0.483176 1.20333 0.43597 1.07356 0.43597Z"
          fill={fill}
        />
        <path
          d="M15.1478 16.5214L14.4403 17.2281L14.4406 17.2283L15.1478 16.5214ZM0.318529 1.67512L1.02604 0.96842L1.02576 0.968139L0.318529 1.67512ZM1.84039 0.140933L2.5479 -0.56577L2.54762 -0.566051L1.84039 0.140933ZM16.6815 14.999L15.974 15.7057L15.9742 15.706L16.6815 14.999ZM16.6815 16.5214L17.3887 17.2283L16.6815 16.5214ZM0.731436 1.25027L0.024207 1.95725L0.0244879 1.95754L0.731436 1.25027ZM15.5843 16.0965L16.2915 15.3895L16.2913 15.3892L15.5843 16.0965ZM16.2568 16.0965L16.964 16.8035L16.2568 16.0965ZM16.2568 15.4238L15.5495 16.1308L15.5731 16.1544L15.5981 16.1763L16.2568 15.4238ZM1.41568 0.577587L2.12291 -0.129397L2.12291 -0.129397L1.41568 0.577587ZM15.9146 15.84C15.8989 15.84 15.8893 15.8372 15.8834 15.8348C15.878 15.8326 15.8684 15.8278 15.855 15.8144L14.4406 17.2283C14.8449 17.6328 15.3725 17.84 15.9146 17.84V15.84ZM15.8553 15.8147L1.02604 0.96842L-0.388982 2.38183L14.4403 17.2281L15.8553 15.8147ZM1.02576 0.968139C1.01572 0.958095 1.00959 0.948202 1.00594 0.939506C1.00245 0.931218 1 0.92124 1 0.908028H-1C-1 1.47579 -0.771298 1.99938 -0.388701 2.38211L1.02576 0.968139ZM1 0.908028C1 0.894452 1.0012 0.886146 1.00198 0.882066C1.00274 0.878113 1.00344 0.876355 1.0037 0.875741C1.00395 0.87513 1.00478 0.873182 1.0073 0.869462C1.00989 0.865639 1.01537 0.858308 1.02576 0.847918L-0.388701 -0.566051C-0.788917 -0.165695 -1 0.348405 -1 0.908028H1ZM1.02576 0.847918C1.01972 0.853963 1.0187 0.852204 1.02875 0.84833C1.03956 0.844163 1.05732 0.839996 1.07946 0.839996C1.1016 0.839996 1.11936 0.844163 1.13017 0.84833C1.14022 0.852204 1.1392 0.853963 1.13316 0.847918L2.54762 -0.566051C1.75596 -1.35799 0.402962 -1.35799 -0.388701 -0.566051L1.02576 0.847918ZM1.13288 0.847637L15.974 15.7057L17.389 14.2923L2.5479 -0.56577L1.13288 0.847637ZM15.9742 15.706C15.997 15.7287 16 15.7496 16 15.7543H18C18 15.1925 17.767 14.6705 17.3887 14.292L15.9742 15.706ZM16 15.7543C16 15.7702 15.9972 15.7799 15.9948 15.7858C15.9925 15.7913 15.9876 15.801 15.9742 15.8144L17.3887 17.2283C17.793 16.8239 18 16.2962 18 15.7543H16ZM15.9742 15.8144C15.9642 15.8244 15.9543 15.8305 15.9457 15.8341C15.9376 15.8376 15.9277 15.84 15.9146 15.84V17.84C16.4825 17.84 17.0061 17.6111 17.3887 17.2283L15.9742 15.8144ZM1.07356 -0.56403C0.683363 -0.56403 0.309534 -0.414822 0.024207 -0.129397L1.43867 1.28457C1.39596 1.32729 1.33877 1.36782 1.2689 1.3965C1.19932 1.42505 1.13155 1.43597 1.07356 1.43597V-0.56403ZM0.024207 -0.129397C-0.251689 0.146595 -0.410132 0.516566 -0.410132 0.908028H1.58987C1.58987 1.06346 1.5258 1.1974 1.43867 1.28457L0.024207 -0.129397ZM-0.410132 0.908028C-0.410132 1.2733 -0.269922 1.66302 0.024207 1.95725L1.43867 0.543286C1.54404 0.648694 1.58987 0.778789 1.58987 0.908028H-0.410132ZM0.0244879 1.95754L14.8774 16.8038L16.2913 15.3892L1.43839 0.543005L0.0244879 1.95754ZM14.8771 16.8035C15.4446 17.3712 16.3965 17.3712 16.964 16.8035L15.5495 15.3895C15.6738 15.2652 15.8171 15.2293 15.9205 15.2293C16.024 15.2293 16.1673 15.2652 16.2915 15.3895L14.8771 16.8035ZM16.964 16.8035C17.2493 16.5181 17.3983 16.1443 17.3983 15.7543H15.3983C15.3983 15.6964 15.4092 15.6287 15.4377 15.5592C15.4664 15.4894 15.5068 15.4322 15.5495 15.3895L16.964 16.8035ZM17.3983 15.7543C17.3983 15.3776 17.2561 14.9696 16.9154 14.6714L15.5981 16.1763C15.4462 16.0433 15.3983 15.8713 15.3983 15.7543H17.3983ZM16.964 14.7168L2.12291 -0.129397L0.708454 1.28457L15.5495 16.1308L16.964 14.7168ZM2.12291 -0.129397C1.83759 -0.414822 1.46376 -0.56403 1.07356 -0.56403V1.43597C1.01557 1.43597 0.947801 1.42505 0.878225 1.3965C0.808346 1.36782 0.751159 1.32729 0.708454 1.28457L2.12291 -0.129397Z"
          fill={fill}
          mask="url(#path-2-inside-1_320_1227)"
        />
        <path
          d="M1.93657 14.5304L1.93664 14.5305L1.94357 14.5235L14.5236 1.94354C14.5883 1.8788 14.6817 1.8788 14.7465 1.94354C14.8112 2.00828 14.8112 2.1017 14.7465 2.16644L2.16647 14.7464C2.10173 14.8112 2.00831 14.8112 1.94357 14.7464C1.87492 14.6778 1.88509 14.5799 1.93657 14.5304Z"
          fill="white"
          stroke={fill}
        />
        <mask id="path-5-inside-2_320_1227" fill="white">
          <path d="M1.0846 16.84C0.801664 16.84 0.530513 16.7337 0.318308 16.5211C0.117892 16.3204 0 16.0487 0 15.7535C0 15.4583 0.106103 15.1985 0.318308 14.9977L15.1609 0.141143C15.5617 -0.260386 16.2809 -0.260386 16.6817 0.141143C16.8821 0.341907 17 0.613529 17 0.89696C17 1.18039 16.8939 1.45201 16.6817 1.66459L1.8509 16.5211C1.65049 16.7219 1.37933 16.84 1.0846 16.84V16.84ZM15.9154 0.424574C15.7857 0.424574 15.6678 0.471813 15.5735 0.56629L0.754508 15.4228C0.660194 15.5173 0.613037 15.6354 0.613037 15.7535C0.613037 15.8716 0.660194 16.0015 0.754508 16.096C0.931345 16.2731 1.24965 16.2731 1.42649 16.096L16.2573 1.23944C16.3516 1.14496 16.3988 1.02687 16.3988 0.89696C16.3988 0.767054 16.3516 0.648958 16.2573 0.56629C16.163 0.471813 16.0451 0.424574 15.9272 0.424574H15.9154Z" />
        </mask>
        <path
          d="M1.0846 16.84C0.801664 16.84 0.530513 16.7337 0.318308 16.5211C0.117892 16.3204 0 16.0487 0 15.7535C0 15.4583 0.106103 15.1985 0.318308 14.9977L15.1609 0.141143C15.5617 -0.260386 16.2809 -0.260386 16.6817 0.141143C16.8821 0.341907 17 0.613529 17 0.89696C17 1.18039 16.8939 1.45201 16.6817 1.66459L1.8509 16.5211C1.65049 16.7219 1.37933 16.84 1.0846 16.84V16.84ZM15.9154 0.424574C15.7857 0.424574 15.6678 0.471813 15.5735 0.56629L0.754508 15.4228C0.660194 15.5173 0.613037 15.6354 0.613037 15.7535C0.613037 15.8716 0.660194 16.0015 0.754508 16.096C0.931345 16.2731 1.24965 16.2731 1.42649 16.096L16.2573 1.23944C16.3516 1.14496 16.3988 1.02687 16.3988 0.89696C16.3988 0.767054 16.3516 0.648958 16.2573 0.56629C16.163 0.471813 16.0451 0.424574 15.9272 0.424574H15.9154Z"
          fill={fill}
        />
        <path
          d="M0.318308 16.5211L-0.389412 17.2276L0.318308 16.5211ZM0.318308 14.9977L1.00556 15.7241L1.01579 15.7144L1.02575 15.7045L0.318308 14.9977ZM15.1609 0.141143L15.8683 0.847917L15.8686 0.847636L15.1609 0.141143ZM16.6817 1.66459L15.974 0.958095L16.6817 1.66459ZM1.8509 16.5211L2.55862 17.2276L1.8509 16.5211ZM15.5735 0.56629L14.8658 -0.140203L14.8655 -0.139921L15.5735 0.56629ZM0.754508 15.4228L1.46223 16.1293L1.46251 16.129L0.754508 15.4228ZM0.754508 16.096L1.46223 15.3895L0.754508 16.096ZM1.42649 16.096L2.13421 16.8025L1.42649 16.096ZM16.2573 1.23944L15.5496 0.532947L16.2573 1.23944ZM16.2573 0.56629L15.5496 1.27278L15.5731 1.29635L15.5981 1.3183L16.2573 0.56629ZM1.0846 15.84C1.06914 15.84 1.05978 15.8373 1.05413 15.835C1.04892 15.8328 1.03941 15.8281 1.02603 15.8146L-0.389412 17.2276C0.0146454 17.6324 0.542247 17.84 1.0846 17.84V15.84ZM1.02603 15.8146C1.01599 15.8046 1.0098 15.7946 1.00607 15.7857C1.00251 15.7773 1 15.767 1 15.7535H-1C-1 16.321 -0.771728 16.8446 -0.389412 17.2276L1.02603 15.8146ZM1 15.7535C1 15.7397 1.00123 15.7314 1.00192 15.7278C1.0026 15.7243 1.00299 15.724 1.00226 15.7257C1.0015 15.7275 1.00055 15.7292 0.999987 15.73C0.999462 15.7307 1.00074 15.7287 1.00556 15.7241L-0.368945 14.2713C-0.791958 14.6715 -1 15.1992 -1 15.7535H1ZM1.02575 15.7045L15.8683 0.847917L14.4534 -0.565632L-0.389131 14.2909L1.02575 15.7045ZM15.8686 0.847636C15.8626 0.853693 15.8615 0.852014 15.8713 0.848214C15.8819 0.844119 15.8994 0.839996 15.9213 0.839996C15.9432 0.839996 15.9607 0.844119 15.9713 0.848214C15.9811 0.852014 15.98 0.853693 15.974 0.847636L17.3894 -0.56535C16.5979 -1.35822 15.2447 -1.35822 14.4532 -0.56535L15.8686 0.847636ZM15.974 0.847636C15.9967 0.870439 16 0.891607 16 0.89696H18C18 0.33545 17.7675 -0.186626 17.3894 -0.56535L15.974 0.847636ZM16 0.89696C16 0.913132 15.9972 0.923128 15.9946 0.929275C15.9923 0.934965 15.9874 0.944685 15.974 0.958095L17.3894 2.37108C17.7934 1.9664 18 1.4387 18 0.89696H16ZM15.974 0.958095L1.14318 15.8146L2.55862 17.2276L17.3894 2.37108L15.974 0.958095ZM1.14318 15.8146C1.13315 15.8247 1.12338 15.8307 1.11496 15.8343C1.10696 15.8376 1.09737 15.84 1.0846 15.84V17.84C1.65274 17.84 2.17627 17.6106 2.55862 17.2276L1.14318 15.8146ZM15.9154 -0.575426C15.5248 -0.575426 15.1509 -0.425855 14.8658 -0.140203L16.2812 1.27278C16.2386 1.31553 16.1813 1.35616 16.1113 1.38494C16.0416 1.4136 15.9736 1.42457 15.9154 1.42457V-0.575426ZM14.8655 -0.139921L0.0465067 14.7166L1.46251 16.129L16.2815 1.2725L14.8655 -0.139921ZM0.0467876 14.7163C-0.228901 14.9925 -0.386963 15.3624 -0.386963 15.7535H1.61304C1.61304 15.9084 1.54929 16.0421 1.46223 16.1293L0.0467876 14.7163ZM-0.386963 15.7535C-0.386963 16.1184 -0.247095 16.5081 0.0467876 16.8025L1.46223 15.3895C1.56748 15.4949 1.61304 15.6248 1.61304 15.7535H-0.386963ZM0.0467876 16.8025C0.614289 17.371 1.56671 17.371 2.13421 16.8025L0.718771 15.3895C0.843023 15.265 0.986516 15.2288 1.0905 15.2288C1.19448 15.2288 1.33798 15.265 1.46223 15.3895L0.0467876 16.8025ZM2.13421 16.8025L16.965 1.94593L15.5496 0.532947L0.718771 15.3895L2.13421 16.8025ZM16.965 1.94593C17.2501 1.66035 17.3988 1.28663 17.3988 0.89696H15.3988C15.3988 0.839308 15.4096 0.771843 15.438 0.702494C15.4665 0.632829 15.5069 0.575699 15.5496 0.532947L16.965 1.94593ZM17.3988 0.89696C17.3988 0.5207 17.2569 0.112689 16.9164 -0.18572L15.5981 1.3183C15.4463 1.18523 15.3988 1.01341 15.3988 0.89696H17.3988ZM16.965 -0.140203C16.6893 -0.416407 16.3192 -0.575426 15.9272 -0.575426V1.42457C15.7709 1.42457 15.6367 1.36003 15.5496 1.27278L16.965 -0.140203ZM15.9272 -0.575426H15.9154V1.42457H15.9272V-0.575426Z"
          fill={fill}
          mask="url(#path-5-inside-2_320_1227)"
        />
        <path
          d="M15.93 8.34C15.93 12.5318 12.5318 15.93 8.34 15.93C4.14816 15.93 0.75 12.5318 0.75 8.34C0.75 4.14816 4.14816 0.75 8.34 0.75C12.5318 0.75 15.93 4.14816 15.93 8.34Z"
          fill={background}
          stroke={fill}
        />
        <mask id="path-8-inside-3_320_1227" fill="white">
          <path d="M8.34 16.68C3.74 16.68 0 12.94 0 8.34C0 3.74 3.74 0 8.34 0C12.94 0 16.68 3.74 16.68 8.34C16.68 12.94 12.94 16.68 8.34 16.68ZM8.34 0.51C4.02 0.51 0.51 4.02 0.51 8.34C0.51 12.66 4.02 16.17 8.34 16.17C12.66 16.17 16.17 12.66 16.17 8.34C16.17 4.02 12.66 0.51 8.34 0.51Z" />
        </mask>
        <path
          d="M8.34 16.68C3.74 16.68 0 12.94 0 8.34C0 3.74 3.74 0 8.34 0C12.94 0 16.68 3.74 16.68 8.34C16.68 12.94 12.94 16.68 8.34 16.68ZM8.34 0.51C4.02 0.51 0.51 4.02 0.51 8.34C0.51 12.66 4.02 16.17 8.34 16.17C12.66 16.17 16.17 12.66 16.17 8.34C16.17 4.02 12.66 0.51 8.34 0.51Z"
          fill={fill}
        />
        <path
          d="M8.34 15.68C4.29228 15.68 1 12.3877 1 8.34H-1C-1 13.4923 3.18772 17.68 8.34 17.68V15.68ZM1 8.34C1 4.29228 4.29228 1 8.34 1V-1C3.18772 -1 -1 3.18772 -1 8.34H1ZM8.34 1C12.3877 1 15.68 4.29228 15.68 8.34H17.68C17.68 3.18772 13.4923 -1 8.34 -1V1ZM15.68 8.34C15.68 12.3877 12.3877 15.68 8.34 15.68V17.68C13.4923 17.68 17.68 13.4923 17.68 8.34H15.68ZM8.34 -0.49C3.46772 -0.49 -0.49 3.46772 -0.49 8.34H1.51C1.51 4.57228 4.57228 1.51 8.34 1.51V-0.49ZM-0.49 8.34C-0.49 13.2123 3.46772 17.17 8.34 17.17V15.17C4.57228 15.17 1.51 12.1077 1.51 8.34H-0.49ZM8.34 17.17C13.2123 17.17 17.17 13.2123 17.17 8.34H15.17C15.17 12.1077 12.1077 15.17 8.34 15.17V17.17ZM17.17 8.34C17.17 3.46772 13.2123 -0.49 8.34 -0.49V1.51C12.1077 1.51 15.17 4.57228 15.17 8.34H17.17Z"
          fill={fill}
          mask="url(#path-8-inside-3_320_1227)"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_1227">
          <rect width="16.68" height="16.68" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const Clock = () => (
    <svg
      width={size}
      //   height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99175 1.66666C5.39175 1.66666 1.66675 5.39999 1.66675 9.99999C1.66675 14.6 5.39175 18.3333 9.99175 18.3333C14.6001 18.3333 18.3334 14.6 18.3334 9.99999C18.3334 5.39999 14.6001 1.66666 9.99175 1.66666ZM10.0001 16.6667C6.31675 16.6667 3.33341 13.6833 3.33341 9.99999C3.33341 6.31666 6.31675 3.33332 10.0001 3.33332C13.6834 3.33332 16.6667 6.31666 16.6667 9.99999C16.6667 13.6833 13.6834 16.6667 10.0001 16.6667Z"
        fill={fill}
      />
      <path
        d="M10.4167 5.83334H9.16675V10.8333L13.5417 13.4583L14.1667 12.4333L10.4167 10.2083V5.83334Z"
        fill={fill}
      />
    </svg>
  );

  const componentsMap: any = {
    Home,
    Menu,
    Payment,
    Order,
    Config,
    Guess,
    Subtract,
    Add,
    Cash,
    Table,
    Clock,
  };

  const nameIcon: string = type[0].toUpperCase() + type.substring(1);

  const DynamicIcon = componentsMap[`${nameIcon}`];
  return (
    <Wrapper>
      <DynamicIcon />
    </Wrapper>
  );
};
