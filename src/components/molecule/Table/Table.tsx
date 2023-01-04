import { FC } from "react";
import { Wrapper } from "./style";

interface TableProps {
  text: string;
  background?: string;
  fill?: string;
  color?: string;
  size?: string;
}

export const Table: FC<TableProps> = ({
  text,
  background = "white",
  fill = "#070707",
  color = "#070707",
  size = 120,
}) => {
  const OneTable = () => (
    <svg
      width={size}
      // height="160"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M78.3344 32.9613H78.7273C80.0697 33.1533 81.0916 34.3139 81.0916 35.6907V124.166C81.0916 125.696 79.8428 126.923 78.3344 126.923C76.8037 126.923 75.5771 125.674 75.5771 124.166V35.7186C75.5771 34.1879 76.826 32.9613 78.3344 32.9613Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M81.8155 124.194C81.8155 125.967 80.491 127.429 78.777 127.647H78.3344C76.4112 127.647 74.8533 126.089 74.8533 124.166V35.7185C74.8533 33.7953 76.4112 32.2374 78.3344 32.2374C80.2576 32.2374 81.8155 33.7953 81.8155 35.7185V124.194ZM78.8344 32.6975V32.6294H78.3344C76.6384 32.6294 75.2731 33.9947 75.2731 35.6907V124.166C75.2731 125.862 76.6384 127.227 78.3344 127.227C80.0303 127.227 81.3956 125.862 81.3956 124.166V35.7185C81.3956 34.1929 80.2908 32.9349 78.8344 32.6975Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M125.329 79.9561V80.3499C125.137 81.7002 123.972 82.7412 122.6 82.7412H34.0969C32.5689 82.7412 31.3396 81.4951 31.3396 79.9561C31.3396 78.4254 32.5885 77.1989 34.0969 77.1989H122.572C124.103 77.1989 125.329 78.4477 125.329 79.9561Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M122.572 83.4372H34.0969C32.1737 83.4372 30.6158 81.8793 30.6158 79.9561C30.6158 78.0329 32.1737 76.475 34.0969 76.475H122.572C124.495 76.475 126.053 78.0329 126.053 79.9561C126.053 81.8793 124.495 83.4372 122.572 83.4372ZM34.0969 76.8948C32.4009 76.8948 31.0356 78.2601 31.0356 79.9561C31.0356 81.652 32.4009 83.0173 34.0969 83.0173H122.572C124.268 83.0173 125.633 81.652 125.633 79.9561C125.633 78.2601 124.268 76.8948 122.572 76.8948H34.0969Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M119.177 79.9282C119.177 102.425 100.831 120.77 78.3344 120.77C55.8375 120.77 37.4922 102.425 37.4922 79.9282C37.4922 57.4314 55.8375 39.0861 78.3344 39.0861C100.831 39.0861 119.177 57.4314 119.177 79.9282Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M78.3344 121.494C55.4197 121.494 36.7684 102.842 36.7684 79.956C36.7684 57.0692 55.4201 38.39 78.3344 38.39C101.249 38.39 119.9 57.0416 119.9 79.956C119.9 102.87 101.249 121.494 78.3344 121.494ZM78.3344 38.8098C55.6472 38.8098 37.1882 57.2688 37.1882 79.956C37.1882 102.644 55.6476 121.074 78.3344 121.074C101.021 121.074 119.481 102.616 119.481 79.956C119.481 57.2969 101.022 38.8098 78.3344 38.8098Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M106.862 33.9729L106.715 33.8265H106.696C105.556 32.5369 105.601 30.5395 106.834 29.3069L128.752 7.38844L154.938 33.5471L133.02 55.4653C131.74 56.7455 129.634 56.7455 128.354 55.4653L106.862 33.9729Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M128.753 6.38664L155.913 33.547L133.493 55.9664L133.493 55.9664L133.488 55.9723C132.755 56.7293 131.748 57.1285 130.645 57.1285H130.2C129.312 57.0235 128.479 56.6254 127.822 55.9912L106.333 34.5019L106.333 34.5019L106.327 34.4962C105.569 33.7625 105.171 32.7543 105.171 31.6817C105.171 30.6191 105.59 29.6026 106.336 28.8306L128.252 6.88747V7.50452L106.628 29.1288C105.946 29.8109 105.591 30.7193 105.591 31.6539C105.591 32.6093 105.941 33.5227 106.632 34.1831L128.12 55.6713C129.485 57.0358 131.834 57.0358 133.198 55.6713L154.969 33.9005L155.323 33.547L154.969 33.1934L129.106 7.33024L128.458 6.68195L128.753 6.38664Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M156.892 33.5699L156.89 33.5705L154.477 34.3166L128.011 7.84974L128.757 5.43735L128.757 5.43735L128.758 5.43411C128.958 4.77213 129.232 4.46196 129.483 4.32123C129.734 4.18073 130.056 4.1562 130.463 4.26564C131.304 4.49154 132.271 5.22793 132.992 5.9494L156.378 29.3349C157.081 30.0384 157.748 31.0229 157.942 31.876C158.037 32.2939 158.008 32.6315 157.871 32.8894C157.739 33.1395 157.462 33.3958 156.892 33.5699Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M154.277 35.1187L127.23 8.07117L127.367 7.61837L127.898 8.14872L154.178 34.4295L154.39 34.641L154.676 34.5547L156.987 33.8587L156.987 33.8588L156.996 33.856C157.451 33.7095 157.756 33.5077 157.955 33.2869C158.156 33.0646 158.22 32.8558 158.245 32.7539C158.39 32.2102 158.202 31.5558 157.914 30.9732C157.612 30.3624 157.147 29.7201 156.584 29.1569C156.584 29.1568 156.584 29.1568 156.584 29.1567L133.199 5.74359L133.198 5.74338C132.66 5.20473 132.092 4.75302 131.556 4.43253C131.036 4.12112 130.489 3.89871 130.005 3.89871L130.003 3.89871C129.88 3.8987 129.574 3.89867 129.253 4.12656C128.94 4.3484 128.683 4.7333 128.497 5.33742L128.497 5.33741L128.496 5.34026L127.907 7.29517H127.465L128.089 5.24174C128.089 5.24146 128.089 5.24117 128.089 5.24088C128.339 4.42869 128.709 4.0106 129.043 3.78864C129.383 3.56244 129.738 3.50671 130.005 3.50671C130.655 3.50671 131.363 3.81439 132.018 4.24281C132.662 4.66487 133.197 5.16618 133.486 5.46815L133.486 5.46824L133.493 5.47609L156.879 28.8616C157.405 29.3874 157.939 30.0807 158.293 30.8106C158.65 31.5475 158.795 32.2621 158.641 32.8669L158.641 32.8669L158.639 32.8744C158.537 33.3029 158.212 33.9544 157.099 34.2622L157.099 34.2621L157.087 34.2657L154.277 35.1187Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M30.848 103.751L52.3403 125.243C53.6206 126.523 53.6206 128.629 52.3403 129.909L30.422 151.827L4.26367 125.669L26.182 103.751C27.4622 102.47 29.5677 102.47 30.848 103.751Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M52.8414 130.382L30.4083 152.816L3.26126 125.641L25.6809 103.222C27.1838 101.719 29.8461 101.719 31.3491 103.222L52.8414 124.714C54.4001 126.273 54.4001 128.824 52.8414 130.382ZM30.0685 151.858L30.422 152.212L30.7756 151.858L52.5463 130.087C53.9387 128.695 53.9387 126.402 52.5463 125.009L31.054 103.517C29.6894 102.152 27.3405 102.152 25.976 103.517L4.20525 125.288L4.5588 125.641L4.20525 125.995L30.0685 151.858Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M25.3563 152.385V152.413L2.82437 129.881C2.12084 129.178 1.45377 128.193 1.26018 127.34C1.16533 126.922 1.19446 126.585 1.33103 126.327C1.46346 126.077 1.73993 125.82 2.31055 125.646L2.31056 125.646L2.31231 125.646L4.7247 124.9L31.166 151.341L30.4445 153.754C30.4444 153.754 30.4443 153.755 30.4442 153.755C30.2444 154.416 29.9699 154.726 29.7187 154.867C29.4679 155.008 29.1458 155.032 28.7387 154.923C27.8984 154.697 26.9313 153.96 26.2098 153.239L25.3563 152.385Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M25.7165 153.776L25.7166 153.776L25.7087 153.768L2.32325 130.382C1.7973 129.856 1.26274 129.163 0.908959 128.436C0.55127 127.701 0.408067 126.995 0.560585 126.407L0.560681 126.407L0.562989 126.397C0.664967 125.969 0.991797 125.313 2.11243 124.979L2.11244 124.979L2.11494 124.978L4.94617 124.119L32.0002 151.173L31.1412 154.002C31.1412 154.002 31.1411 154.002 31.1411 154.003C30.891 154.815 30.5215 155.233 30.1872 155.455C29.8465 155.681 29.4921 155.737 29.2249 155.737H29.1971C28.5472 155.737 27.8389 155.43 27.1846 155.001C26.5401 154.579 26.0053 154.078 25.7165 153.776ZM5.02371 124.787L4.81227 124.575L4.52596 124.661L2.21525 125.357L2.21525 125.357L2.21125 125.359C1.74235 125.504 1.43214 125.706 1.23206 125.934C1.03117 126.163 0.977498 126.379 0.957139 126.461C0.956955 126.461 0.956773 126.462 0.956594 126.463C0.812463 127.006 1.00066 127.661 1.28821 128.243C1.58982 128.854 2.05508 129.496 2.61838 130.059L26.0038 153.445C26.5425 153.983 27.1103 154.435 27.6457 154.756C28.1659 155.067 28.7131 155.29 29.1971 155.29H29.1993C29.3225 155.29 29.6277 155.29 29.9491 155.062C30.262 154.84 30.5191 154.455 30.705 153.851L30.7059 153.848L31.4019 151.537L31.4881 151.251L31.2767 151.04L5.02371 124.787Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M103.744 128.361L125.236 106.869C126.516 105.589 128.622 105.589 129.902 106.869L151.82 128.787L125.662 154.945L103.744 133.027C102.464 131.747 102.464 129.641 103.744 128.361Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M125.309 155.004L125.662 155.357L126.016 155.004L151.879 129.141L152.232 128.787L151.879 128.434L130.108 106.663C129.426 105.981 128.518 105.625 127.583 105.625H127.555C126.587 105.625 125.68 106.013 125.03 106.663L103.538 128.155C102.145 129.547 102.145 131.841 103.538 133.233L125.309 155.004ZM130.375 106.368L152.795 128.787L125.634 155.948L103.215 133.528C101.656 131.97 101.656 129.419 103.215 127.86L124.707 106.368C126.21 104.865 128.872 104.865 130.375 106.368Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M124.918 154.487L151.359 128.045L153.772 128.792L153.775 128.792C154.437 128.992 154.747 129.267 154.888 129.518C155.028 129.769 155.053 130.091 154.943 130.498C154.762 131.174 154.251 131.931 153.682 132.577L153.26 132.999L129.874 156.385C129.171 157.088 128.186 157.755 127.333 157.949C126.915 158.044 126.578 158.015 126.32 157.878C126.07 157.746 125.814 157.47 125.64 156.9C125.639 156.899 125.639 156.899 125.639 156.899L124.918 154.487Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M153.969 128.096L153.971 128.097C155.183 128.46 155.539 129.126 155.664 129.559C155.834 130.226 155.595 130.996 155.149 131.752C154.71 132.497 154.124 133.138 153.761 133.5L130.375 156.886C129.93 157.331 129.347 157.796 128.72 158.146C128.088 158.5 127.451 158.716 126.887 158.716H126.859C126.583 158.716 126.217 158.664 125.871 158.452C125.536 158.247 125.175 157.865 124.943 157.12C124.943 157.12 124.943 157.119 124.942 157.119L124.084 154.291L151.138 127.237L153.969 128.096ZM125.371 153.594L124.78 154.185L124.752 154.213L125.09 154.552L124.654 154.683L125.35 156.993C125.35 156.993 125.35 156.993 125.35 156.993C125.497 157.482 125.721 157.827 126.021 158.042C126.323 158.259 126.636 158.296 126.859 158.296C127.357 158.296 127.924 158.092 128.457 157.8C129.001 157.501 129.561 157.082 130.052 156.591L153.438 133.205C154.048 132.595 154.539 131.959 154.86 131.372C155.164 130.813 155.371 130.194 155.24 129.668C155.088 129.063 154.49 128.71 153.848 128.506L153.848 128.505L153.841 128.503L151.53 127.807L151.244 127.721L151.033 127.932L125.371 153.594Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M33.966 52.3472L33.8196 52.4937V52.5128C32.53 53.6535 30.5326 53.6076 29.3 52.3751L7.38173 30.4568L33.5677 4.27081L55.4582 26.1887L55.4584 26.1889C56.7386 27.4691 56.7386 29.5746 55.4584 30.8549L33.966 52.3472Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M6.3795 30.4568L33.5679 3.26839L55.9873 25.6878L55.9873 25.6879L55.9932 25.6936C56.7513 26.4272 57.1494 27.4354 57.1494 28.508C57.1494 29.5706 56.73 30.5871 55.9844 31.359L34.495 52.8484L34.4949 52.8483L34.4892 52.8542C33.7556 53.6123 32.7474 54.0104 31.6748 54.0104H31.4677L31.4449 54.0332C30.4561 53.9836 29.5188 53.5715 28.7959 52.8732L6.3795 30.4568ZM7.32331 30.1032L6.96976 30.4568L7.32331 30.8103L29.0941 52.5811C30.4586 53.9456 32.8075 53.9456 34.172 52.5811L55.6644 31.0887C56.3465 30.4066 56.7017 29.4983 56.7017 28.5637C56.7017 27.6387 56.3527 26.6969 55.6606 26.0349L33.9221 4.21287L33.5686 3.85796L33.2144 4.21219L7.32331 30.1032Z"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M33.563 2.31749L33.5635 2.31924L34.3096 4.73164L7.84049 31.2008L5.42714 30.4792C5.4269 30.4792 5.42666 30.4791 5.42642 30.479C4.76493 30.2792 4.45493 30.0047 4.31426 29.7535C4.17376 29.5027 4.14923 29.1806 4.25866 28.7735C4.48457 27.9331 5.22095 26.9661 5.94243 26.2446L6.08887 26.0982V26.0703L29.3279 2.8313C30.0314 2.12777 31.016 1.46071 31.869 1.26712C32.2869 1.17226 32.6245 1.2014 32.8824 1.33797C33.1325 1.4704 33.3888 1.74687 33.563 2.31749Z"
        fill={background}
        stroke={fill}
        stroke-miterlimit="10"
      />
      <path
        d="M5.73644 26.0108L5.73665 26.0106L29.1497 2.62531C29.1498 2.62524 29.1499 2.62517 29.15 2.6251C29.6412 2.13391 30.2008 1.71515 30.7453 1.41646C31.278 1.12423 31.8454 0.919832 32.343 0.919832C32.5663 0.919832 32.8791 0.957342 33.1807 1.17356C33.4807 1.38872 33.7053 1.73422 33.8518 2.22218L5.73644 26.0108ZM5.73644 26.0108C5.1265 26.6207 4.63502 27.2568 4.31473 27.844C4.00987 28.4029 3.80293 29.0216 3.93453 29.548C4.08589 30.1534 4.68456 30.5065 5.32591 30.7105L5.32589 30.7106L5.33331 30.7128L7.64402 31.4088L7.93016 31.495L8.14159 31.2838L34.4224 5.03083L34.6341 4.81938L34.5478 4.53289L33.8519 2.22271L5.73644 26.0108ZM35.0903 4.95293L8.03655 31.9793L5.20516 31.1198L5.20359 31.1193C3.99496 30.7567 3.63723 30.0935 3.51123 29.6612C3.35303 28.99 3.59491 28.2177 4.03683 27.4625C4.47276 26.7175 5.05228 26.0769 5.41326 25.7159L5.41347 25.7156L28.8266 5"
        fill={fill}
        stroke={fill}
        stroke-miterlimit="10"
      />
    </svg>
  );

  return (
    <Wrapper color={color}>
      <p>{text}</p>
      <OneTable />
    </Wrapper>
  );
};