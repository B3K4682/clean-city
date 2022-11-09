interface ContactIconProps {
  position?: "left" | "right";
}

const ContactIcon: React.FC<ContactIconProps> = ({ position = "left" }) => {
  return (
    <>
      {position === "left" ? (
        <svg
          width={576}
          height={693}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M169.275 487.856c9.247-7.813 14.863-20.153 13.39-32.167-1.473-12.014-10.595-23.059-22.429-25.61-11.834-2.551-25.323 4.511-28.918 16.069-1.978-22.283-4.257-45.5-16.106-64.477-10.729-17.183-29.312-29.477-49.452-31.677-20.14-2.2-41.344 6.108-53.904 22.002-12.56 15.893-15.636 38.999-6.839 57.246 6.48 13.442 18.42 23.446 30.93 31.585a199.638 199.638 0 0 0 136.522 29.862"
            fill="#F2F2F2"
          />
          <path
            d="M31.772 356.563a326.54 326.54 0 0 1 45.514 45.189 327.466 327.466 0 0 1 51.264 85.654c.923 2.262-2.75 3.246-3.663 1.01a324.091 324.091 0 0 0-29.621-56.037 325.376 325.376 0 0 0-66.18-73.131c-1.896-1.544.805-4.217 2.686-2.685Z"
            fill="#FCFCFD"
          />
          <path
            d="M175.662 487.856c-9.247-7.813-14.863-20.153-13.39-32.167 1.473-12.014 10.596-23.059 22.429-25.61 11.834-2.551 25.323 4.511 28.918 16.069 1.978-22.283 4.257-45.5 16.106-64.477 10.729-17.183 29.312-29.477 49.452-31.677 20.139-2.2 41.344 6.108 53.904 22.002 12.56 15.893 15.636 38.999 6.839 57.246-6.481 13.442-18.42 23.446-30.929 31.585a199.638 199.638 0 0 1-136.522 29.862"
            fill="#F2F2F2"
          />
          <path
            d="M313.165 356.563a326.586 326.586 0 0 0-45.514 45.189 327.464 327.464 0 0 0-51.264 85.654c-.923 2.262 2.75 3.246 3.663 1.01a325.677 325.677 0 0 1 95.801-129.168c1.897-1.544-.805-4.217-2.686-2.685Z"
            fill="#FCFCFD"
          />
          <path
            d="M203.101 221.775c17.106 0 30.973-13.865 30.973-30.969 0-17.103-13.867-30.968-30.973-30.968-17.106 0-30.973 13.865-30.973 30.968 0 17.104 13.867 30.969 30.973 30.969Z"
            fill="#F2F2F2"
          />
          <path
            d="M107.602 84.052h213.397v11.674H134.844a83.36 83.36 0 0 0-58.935 24.408 83.334 83.334 0 0 0-24.411 58.926v132.624h-23.35a3.891 3.891 0 0 1-3.892-3.891V167.386a83.32 83.32 0 0 1 24.411-58.926 83.352 83.352 0 0 1 58.935-24.407Z"
            fill="#F2F2F2"
          />
          <g filter="url(#a)" shapeRendering="crispEdges">
            <path
              d="M149 675.777V312h52v373h-52V675.777Z"
              fill="#09090B"
              fillOpacity={0.8}
            />
          </g>
          <path
            d="M13.265 307.688V163.5a86.667 86.667 0 0 1 25.39-61.191 86.694 86.694 0 0 1 61.2-25.387H320v235.761H18.261a5.002 5.002 0 0 1-4.996-4.995ZM318.001 78.92H99.856a84.694 84.694 0 0 0-59.788 24.801A84.668 84.668 0 0 0 15.264 163.5v144.188a3.001 3.001 0 0 0 2.997 2.997H318V78.92Z"
            fill="#09090B"
            fillOpacity={0.8}
          />
          <path
            d="M203.101 206.79a18.003 18.003 0 0 1-17.985-17.981V59.939a3 3 0 0 0-2.997-2.997H112.18a5 5 0 0 1-4.996-4.995V4.995A5 5 0 0 1 112.18 0h103.909a5 5 0 0 1 4.996 4.995v183.814a18.001 18.001 0 0 1-17.984 17.981Z"
            fill="#62CF73"
          />
          <path
            d="M327.993 74.924a56.835 56.835 0 0 1 40.22 16.559 56.813 56.813 0 0 1 16.73 40.145v164.143h111.903a16.954 16.954 0 0 1 11.996 4.939 16.943 16.943 0 0 1 4.989 11.973H271.042V131.628a56.817 56.817 0 0 1 16.73-40.145 56.835 56.835 0 0 1 40.221-16.559Z"
            fill="#09090B"
            fillOpacity={0.8}
          />
          <path
            d="m314.326 168.397 11.793 48.706L556.8 161.268l-11.792-48.706a3.644 3.644 0 0 0-2.356-2.593 3.598 3.598 0 0 0-1.333-.2L407.975 40.737a3.677 3.677 0 0 0-4.652 1.118l-64.264 89.603-24.227 33.788a.51.51 0 0 0-.089.418 3.64 3.64 0 0 0-.417 2.733Z"
            fill="#FCFCFD"
          />
          <path
            d="M314.743 165.664a.491.491 0 0 0 .203.316.562.562 0 0 0 .433.085.535.535 0 0 0 .299-.207l.083-.115 1.261-1.764 22.909-31.932 64.246-89.582a2.616 2.616 0 0 1 3.319-.796l132.31 68.498 1.188.616c.048.02.097.037.147.051.089-.016.18-.025.271-.026a.514.514 0 0 0 .23-.823.522.522 0 0 0-.159-.129l-.164-.087-133.344-69.032a3.677 3.677 0 0 0-4.652 1.118l-64.264 89.603-24.227 33.788a.51.51 0 0 0-.089.418Z"
            fill="#09090B"
            fillOpacity={0.8}
          />
          <path
            d="m384.024 170.631 5.135.569 38.109 4.221 25.264 2.797 1.493.166 31.524-24.62 1.208-.943 7.446-5.814 26.491-20.686.159-1.453 9.422-85.028a4.45 4.45 0 0 0-3.926-4.906L400.602 21.006a4.453 4.453 0 0 0-4.907 3.925l-6.645 59.977-3.685 33.252-3.298 29.749-1.528 13.815-.446 4.001a4.451 4.451 0 0 0 3.931 4.906Z"
            fill="#E6E6E6"
          />
          <path
            d="m418.579 96.1 54.47 6.032 19.316 2.139a6.544 6.544 0 0 0 4.803-1.394 6.525 6.525 0 0 0 2.411-4.38 6.543 6.543 0 0 0-1.394-4.803 6.527 6.527 0 0 0-4.381-2.41l-24.026-2.66-49.756-5.517a6.539 6.539 0 0 0-5.824 10.58 6.54 6.54 0 0 0 4.381 2.413ZM415.478 120.192c.14.025.281.05.424.064l63.23 7.004 10.557 1.171a6.537 6.537 0 0 0 5.821-10.581 6.531 6.531 0 0 0-4.383-2.41l-15.265-1.689-50.087-5.549-8.429-.934a6.537 6.537 0 0 0-7.191 5.558 6.535 6.535 0 0 0 5.323 7.366ZM408.322 141.554a6.535 6.535 0 0 0 4.876 3.122l25.916 2.87 46.157 5.113.01-.003 1.476.165 7.446-5.814c.046-.442.046-.887.001-1.329a6.544 6.544 0 0 0-5.782-5.818l-6.411-.712-25.435-2.815-18.301-2.029-23.64-2.62a6.54 6.54 0 0 0-6.224 2.974 6.529 6.529 0 0 0-.089 6.896ZM444.723 66.652l13.553 1.5 5.986.665 9.042 1.001a6.536 6.536 0 1 0 1.437-12.992l-28.574-3.162a6.535 6.535 0 1 0-1.444 12.988Z"
            fill="#FCFCFD"
          />
          <path
            d="m333.904 102.828 16.523 68.244 27.577 5.243 25.51 4.856 27.37 5.207 8.745 1.664a3.678 3.678 0 0 0 2.937-.711l7.016-5.479 4.443-3.468 31.524-24.62-20.044-82.79a4.402 4.402 0 0 0-1.243-2.157 4.446 4.446 0 0 0-4.122-1.116L337.177 97.464a4.443 4.443 0 0 0-3.273 5.364Z"
            fill="#62CF73"
          />
          <path
            d="M371.791 157.118a6.544 6.544 0 0 0 7.889 4.814l72.152-17.464a6.546 6.546 0 0 0 4.814-7.888 2.107 2.107 0 0 0-.07-.247 6.536 6.536 0 0 0-7.819-4.566l-72.152 17.464a6.543 6.543 0 0 0-4.814 7.887ZM378.004 176.315l25.51 4.856 54.038-13.08a6.532 6.532 0 0 0 1.866-11.928 6.54 6.54 0 0 0-4.941-.773l-72.152 17.464a6.49 6.49 0 0 0-3.744 2.509 6.593 6.593 0 0 0-.577.952ZM430.884 186.378l8.745 1.664a3.659 3.659 0 0 0 2.937-.711l7.016-5.479-18.698 4.526ZM386.33 120.524a6.54 6.54 0 0 0 7.889 4.813l27.946-6.764a6.541 6.541 0 0 0 4.814-7.888 6.54 6.54 0 0 0-7.889-4.813l-27.946 6.765a6.533 6.533 0 0 0-4.814 7.887Z"
            fill="#FCFCFD"
          />
          <path
            d="m403.512 181.171 27.374 5.208 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.597Zm81.767-28.511.266 1.101 1.215-.944-1.481-.157Zm-81.767 28.511 27.374 5.208 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.597Zm0 0 27.374 5.208 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.597Zm-89.186-12.774 30.89 127.58a3.662 3.662 0 0 0 4.418 2.696l223.567-54.113a3.665 3.665 0 0 0 2.696-4.418l-30.889-127.58a3.644 3.644 0 0 0-2.356-2.593 3.598 3.598 0 0 0-1.333-.2 3.446 3.446 0 0 0-1.513.398 3.128 3.128 0 0 0-.606.376l-18.349 14.325-26.647 20.813-8.927 6.972.002.007-.008.002-32.737 25.552-5.412 4.235-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-27.398-5.21-60.01-11.418a3.584 3.584 0 0 0-1.546.033 3.668 3.668 0 0 0-2.279 1.685 3.64 3.64 0 0 0-.417 2.733Zm89.186 12.774 27.374 5.208 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.597Zm0 0 27.374 5.208 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.597Zm0 0 27.374 5.208 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.597Z"
            fill="#FCFCFD"
          />
          <path
            d="m403.512 181.17 27.374 5.209 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.596Zm81.767-28.51.266 1.101 1.215-.944-1.481-.157Zm-81.767 28.51 27.374 5.209 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.596Zm0 0 27.374 5.209 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.596Zm-87.751-15.427.136.102c.022-.038.062-.071.092-.11a2.644 2.644 0 0 1 2.383-.767l59.634 11.343 25.506 4.859 27.374 5.209 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.507l-6.474-1.231-27.374-5.208-27.398-5.21-60.01-11.418a3.584 3.584 0 0 0-1.546.033l-1.261 1.764Zm-1.435 2.654 30.89 127.58a3.662 3.662 0 0 0 4.418 2.696l223.567-54.113a3.665 3.665 0 0 0 2.696-4.418l-30.889-127.58a3.644 3.644 0 0 0-2.356-2.593 3.598 3.598 0 0 0-1.333-.2 3.446 3.446 0 0 0-1.513.398 3.128 3.128 0 0 0-.606.376l-18.349 14.325-26.647 20.813-8.927 6.972.002.007-.008.002-32.737 25.552-5.412 4.235-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-27.398-5.21-60.01-11.418a3.584 3.584 0 0 0-1.546.033 3.668 3.668 0 0 0-2.279 1.685 3.64 3.64 0 0 0-.417 2.733Zm1.019-.247a2.593 2.593 0 0 1 .461-2.188.334.334 0 0 1 .091-.117c.022-.038.062-.071.092-.11a2.644 2.644 0 0 1 2.383-.767l59.634 11.343 25.506 4.859 27.374 5.209 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48 4.44-3.469 31.519-24.623 1.215-.944 7.44-5.811 26.495-20.689 19.155-14.956c.291-.227.627-.39.986-.477.1-.024.202-.041.305-.05.089-.016.18-.025.271-.026a2.615 2.615 0 0 1 2.584 1.998l30.89 127.581a2.622 2.622 0 0 1-.309 1.981 2.632 2.632 0 0 1-1.621 1.181l-223.567 54.113a2.616 2.616 0 0 1-3.155-1.931L315.345 168.15Zm88.167 13.021 27.374 5.208 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.597Zm0 0 27.374 5.208 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.597Zm0 0 27.374 5.208 8.743 1.665a3.7 3.7 0 0 0 2.936-.711l7.021-5.48-2.464.596-5.201 4.057a2.627 2.627 0 0 1-2.097.508l-6.474-1.232-27.374-5.208-2.464.597Z"
            fill="#09090B"
            fillOpacity={0.8}
          />
          <path
            d="M514.932 219.495a8.122 8.122 0 0 1 5.976-9.792l28.217-6.829a8.113 8.113 0 0 1 9.765 5.981 8.11 8.11 0 0 1-5.948 9.785l-28.217 6.829a8.12 8.12 0 0 1-9.793-5.974Z"
            fill="#62CF73"
          />
          <path
            d="M203.101 195.801a6.993 6.993 0 1 0 0-13.985 6.993 6.993 0 1 0 0 13.985Z"
            fill="#FCFCFD"
          />
          <defs>
            <filter
              id="a"
              x={145}
              y={312}
              width={60}
              height={381}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy={4} />
              <feGaussianBlur stdDeviation={2} />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_31_714"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_31_714"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          width={761}
          height={494}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#a)">
            <path
              d="M.446 231.87a77.995 77.995 0 0 0 72 77.77c.66.05 1.33.1 2 .13v-74.03a4.956 4.956 0 0 1 1.84-3.86c.066-.068.14-.128.22-.18a5 5 0 0 1 5-.51l.83-1.82a7.012 7.012 0 0 0-2.89-.63l56.96-49.07c-.44-.5-.9-.99-1.36-1.48a78.008 78.008 0 0 0-134.6 53.68Z"
              fill="#F2F2F2"
            />
            <path
              d="M741.222 285.056a10.07 10.07 0 0 0-.11-4.37 10.089 10.089 0 0 0-9.62-7.653l-44.962-53.524-11.225 14.352 45.822 49.813a10.143 10.143 0 0 0 16.329 7.525 10.141 10.141 0 0 0 3.766-6.143ZM527.713 219.179c.315.455.593.934.832 1.433l49.094 7.018 7.455-9.465 15.755 9.384-14.809 23.089-59.876-17.65a10.499 10.499 0 0 1-16.29-2.815 10.492 10.492 0 0 1 6.649-15.136 10.5 10.5 0 0 1 11.19 4.142ZM611.574 398.009l-8.688 8.65-37.5-29.392 12.822-12.767 33.366 33.509Z"
              fill="#FFB8B8"
            />
            <path
              d="m594.164 431.409 27.304-27.187-10.504-10.549-16.755 16.683a14.883 14.883 0 0 0-4.383 10.517 14.9 14.9 0 0 0 4.338 10.536Z"
              fill="#2F2E41"
            />
            <path
              d="M657.754 480.98h-12.26l-5.832-47.288h18.094l-.002 47.288Z"
              fill="#FFB8B8"
            />
            <path
              d="m621.851 492.363 38.53.001.001-14.886-23.644-.002a14.889 14.889 0 0 0-14.887 14.887ZM660.419 444.457l13.965-102.987a128.967 128.967 0 0 0-2.001-46.716c-2.866-12.312-6.737-20.84-11.507-25.347a4.726 4.726 0 0 0-2.743-1.253l-46.107-4.802a4.716 4.716 0 0 0-4.51 2.253l-1.515 2.526a4.702 4.702 0 0 0-.443.974l-9.748 30.22a3.614 3.614 0 0 1-1.808 2.126c-15.348 7.836-65.204 34.288-62.35 45.7 2.68 10.723 27.779 28.11 35.407 33.183a4.666 4.666 0 0 0 5.24-.04l12.664-8.664a4.694 4.694 0 0 0 .133-7.651l-8.732-6.435a3.644 3.644 0 0 1-1.445-3.48 3.655 3.655 0 0 1 2.402-2.903l46.898-16.456a3.654 3.654 0 0 1 4.343 1.573 3.66 3.66 0 0 1 .504 1.574l8.647 105.688a4.7 4.7 0 0 0 4.443 4.303l13.379.67a4.661 4.661 0 0 0 4.884-4.056Z"
              fill="#2F2E41"
            />
            <path
              d="M639.274 178.085c-13.565 0-24.561-10.997-24.561-24.561 0-13.565 10.996-24.561 24.561-24.561s24.561 10.996 24.561 24.561c0 13.564-10.996 24.561-24.561 24.561Z"
              fill="#FFB8B8"
            />
            <path
              d="m662.246 265.2 18.079-65.965-.309-.209c-.389-.261-39.357-25.993-84.981-5.257l-.827.475 10.713 68.467a6.787 6.787 0 0 0 6.444 5.776l44.083 1.696a6.744 6.744 0 0 0 4.378-1.38 6.755 6.755 0 0 0 2.42-3.603Z"
              fill="#CCC"
            />
            <path
              d="m681.014 242.179 15.057-17.315a4.69 4.69 0 0 0 .106-6.032l-15.74-19.445-12.084 3.296-6.406 22.421 11.681 16.687a4.656 4.656 0 0 0 3.599 1.995 4.671 4.671 0 0 0 3.787-1.607ZM597.749 238.572a4.66 4.66 0 0 0 3.599-1.995l11.68-16.687-5.618-23.602-11.126-3.035-2.076.991-15.41 19.373a4.687 4.687 0 0 0 .107 6.033l15.057 17.315a4.655 4.655 0 0 0 3.787 1.607Z"
              fill="#CCC"
            />
            <path
              d="M74.447 230.84a.98.98 0 0 0 .24.68.995.995 0 0 0 1.41.11l3.35-2.89 56.959-49.07 159.76-137.65a5.02 5.02 0 0 1 6.54.01l215.14 186.91 1.94 1.68a.994.994 0 0 0 .761.24c.249-.026.481-.144.65-.33a.998.998 0 0 0-.09-1.41l-.27-.24L304.016 40.52a7.045 7.045 0 0 0-9.159-.02l-159.81 137.69-60.25 51.92a1.012 1.012 0 0 0-.35.73Z"
              fill="#09090B"
              fillOpacity={0.8}
            />
            <path
              d="m195.916 260.37 2.631-7.24 9.06-25 19.52-53.83 21.82-60.17L288.297 5.6a8.513 8.513 0 0 1 10.89-5.09L526.696 83a8.51 8.51 0 0 1 5.09 10.89l-55.79 153.86-.949 2.63-58.56 26.54-16.46 7.46-2.67 1.21-69.691 31.59-2.699-.98-45.71-16.57-68.951-25-9.29-3.37a8.518 8.518 0 0 1-5.1-10.89Z"
              fill="#E6E6E6"
            />
            <path
              d="M291.316 132.21a12.521 12.521 0 0 1 16.02-7.49l90.02 32.65 43.47 15.76a12.492 12.492 0 0 1 7.07 6.453 12.488 12.488 0 0 1 .432 9.561 12.51 12.51 0 0 1-6.46 7.064 12.498 12.498 0 0 1-9.562.422l-34.95-12.67-98.55-35.73a12.524 12.524 0 0 1-7.49-16.02ZM275.466 175.93a12.521 12.521 0 0 1 16.02-7.49l15.25 5.53 90.62 32.86 27.62 10.01a12.504 12.504 0 0 1-8.52 23.51l-19.1-6.93-114.4-41.48c-.26-.09-.51-.2-.76-.31a12.495 12.495 0 0 1-6.73-15.7ZM259.446 220.11a12.51 12.51 0 0 1 16.01-7.49l42.77 15.51 33.11 12.01 46.02 16.68 11.6 4.21a12.524 12.524 0 0 1 8.13 13.42c-.114.842-.316 1.67-.6 2.47l-16.46 7.46-2.67-.97h-.02l-83.51-30.28-46.89-17a12.509 12.509 0 0 1-7.49-16.02ZM353.177 89.23a12.518 12.518 0 0 1 16.019-7.49l51.701 18.74a12.504 12.504 0 0 1-8.52 23.51l-16.361-5.93-10.829-3.93-24.521-8.89a12.51 12.51 0 0 1-7.489-16.01Z"
              fill="#FCFCFD"
            />
            <path
              d="M146.856 114.13h242a8.505 8.505 0 0 1 7.16 3.93 8.41 8.41 0 0 1 1.34 4.57v162.96l-69.69 31.59-9.82 4.45-15.51 7.03a7.007 7.007 0 0 1-5.78 0l-15.51-7.03-48.54-22-45.24-20.51-48.91-22.16V122.63a8.508 8.508 0 0 1 8.5-8.5Z"
              fill="#62CF73"
            />
            <path
              d="M196.857 228.13h142a12.5 12.5 0 0 1 12.48 12.01c.016.163.023.327.02.49a12.52 12.52 0 0 1-12.5 12.5h-142a12.5 12.5 0 1 1 0-25ZM188.766 277.61a12.414 12.414 0 0 1 8.09-2.98h142a12.5 12.5 0 1 1 0 25h-106.35l-45.24-20.51c.457-.545.958-1.05 1.5-1.51ZM317.847 321.63l-15.51 7.03a7.01 7.01 0 0 1-5.78 0l-15.51-7.03h36.8ZM228.616 174.84a12.502 12.502 0 0 1 11.74-8.21h55a12.508 12.508 0 0 1 11.38 7.34 12.351 12.351 0 0 1 1.12 5.16 12.515 12.515 0 0 1-12.5 12.5h-55a12.5 12.5 0 0 1-11.74-16.79Z"
              fill="#FCFCFD"
            />
            <path
              d="m237.357 299.63 48.539 22 11.49 5.21a5.014 5.014 0 0 0 4.12 0l11.49-5.21h4.85l-15.51 7.03a7.007 7.007 0 0 1-5.78 0l-15.51-7.03-48.54-22h4.851Zm0 0 48.539 22 11.49 5.21a5.014 5.014 0 0 0 4.12 0l11.49-5.21h4.85l-15.51 7.03a7.007 7.007 0 0 1-5.78 0l-15.51-7.03-48.54-22h4.851Zm0 0 48.539 22 11.49 5.21a5.014 5.014 0 0 0 4.12 0l11.49-5.21h4.85l-15.51 7.03a7.007 7.007 0 0 1-5.78 0l-15.51-7.03-48.54-22h4.851Zm-162.91-68.79a7.656 7.656 0 0 1 1.21-.98 6.963 6.963 0 0 1 6.68-.49l106.429 48.24 48.591 22.02 48.54 22 11.489 5.21a5.014 5.014 0 0 0 4.12 0l11.49-5.21 11.97-5.43 72.37-32.79.02-.01 19.73-8.95 58.91-26.7 40.56-18.38a6.129 6.129 0 0 1 1.29-.43 6.723 6.723 0 0 1 2.99-.06 7.016 7.016 0 0 1 5.61 6.86v251.13a7.009 7.009 0 0 1-7 7h-440a7.009 7.009 0 0 1-7-7V235.74a6.973 6.973 0 0 1 2-4.9Zm0 256.03a5 5 0 0 0 5 5h439.999a4.997 4.997 0 0 0 3.535-1.465 4.997 4.997 0 0 0 1.465-3.535V235.74a4.994 4.994 0 0 0-2.29-4.2 5.18 5.18 0 0 0-1.61-.68 4.585 4.585 0 0 0-.51-.08 4.006 4.006 0 0 0-.59-.04 4.982 4.982 0 0 0-2.06.45l-42.339 19.19-58.561 26.54-16.46 7.46-2.669 1.21-69.691 31.59-9.82 4.45-15.51 7.03a7.007 7.007 0 0 1-5.78 0l-15.51-7.03-48.54-22-45.24-20.51-105.76-47.93a5 5 0 0 0-4.77.35c-.08.048-.157.101-.23.16-.08.052-.153.112-.22.18a4.965 4.965 0 0 0-1.84 3.86v251.13Zm162.91-187.24 48.539 22 11.49 5.21a5.014 5.014 0 0 0 4.12 0l11.49-5.21h4.85l-15.51 7.03a7.007 7.007 0 0 1-5.78 0l-15.51-7.03-48.54-22h4.851Zm0 0 48.539 22 11.49 5.21a5.014 5.014 0 0 0 4.12 0l11.49-5.21h4.85l-15.51 7.03a7.007 7.007 0 0 1-5.78 0l-15.51-7.03-48.54-22h4.851Zm162.669-15.25-2.669 1.21v-2.18l2.669.97Zm-162.669 15.25 48.539 22 11.49 5.21a5.014 5.014 0 0 0 4.12 0l11.49-5.21h4.85l-15.51 7.03a7.007 7.007 0 0 1-5.78 0l-15.51-7.03-48.54-22h4.851ZM585.474 493.87h113a1 1 0 1 0 0-2h-113a1 1 0 0 0 0 2Z"
              fill="#09090B"
              fillOpacity={0.8}
            />
            <path
              d="M648.612 171.486a10.703 10.703 0 0 0-.99-19.528c-7.411-2.86-15.72 2.977-23.489 1.317-7.743-1.654-12.223-10.911-10.374-18.61 1.848-7.7 8.575-13.499 15.993-16.268a34.483 34.483 0 0 1 29.741 2.726 31.746 31.746 0 0 1 14.945 25.634 29.441 29.441 0 0 1-14.244 25.79c-1.974 1.138-4.273 2.052-6.494 1.54a18.101 18.101 0 0 1-5.088-2.601Z"
              fill="#2F2E41"
            />
            <path
              d="M656.572 120.524c6.535-8.668 15.357-15.789 25.623-19.32 10.266-3.53 21.997-3.247 31.639 1.742 9.641 4.99 16.832 14.899 17.582 25.729 1.249 18.025-14.152 33.346-15.733 51.345a34.521 34.521 0 0 0 13.001 30.12A34.525 34.525 0 0 0 761 215.793a36.354 36.354 0 0 1-28.017 7.951 33.79 33.79 0 0 1-24.047-16.181c-3.467-6.022-4.89-13.018-5.443-19.945a88.627 88.627 0 0 1 3.468-32.493c1.727-5.741 4.07-11.649 2.975-17.544a15.969 15.969 0 0 0-12.436-12.453c-4.953-.929-10.017.583-14.747 2.323s-9.498 3.753-14.536 3.868c-5.039.116-10.526-2.191-12.473-6.839l.828-3.956Z"
              fill="#2F2E41"
            />
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="#fff"
                transform="matrix(-1 0 0 1 761 0)"
                d="M0 0h760.554v493.87H0z"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

export default ContactIcon;
