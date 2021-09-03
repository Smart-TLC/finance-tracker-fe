import React from 'react'
import './svg.css'
import {motion} from 'framer-motion';

const svgVariants = {
    hidden: {
        opacity: 0,
        y: -10,
        x: 150
    },
    visible: {
        opacity: 1, 
        y: -10,
        x: 0
    }
  }

function EducationSvg() {
    return (
        <motion.div className = 'svg-animation-container'
            variants={svgVariants}
            initial = "hidden"
            animate = "visible"
            transition={{type: 'spring', delay: 0.7, stiffness: 250 }}
        >

            <svg width="484" height="643" viewBox="0 0 484 643" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame 1">
            <rect width="484" height="643" fill="white"/>
            <path id="Path 968" d="M333.711 158.58H330.412V67.0025C330.412 52.9454 324.894 39.464 315.073 29.5241C305.251 19.5842 291.93 14 278.041 14H86.3278C79.4504 13.9999 72.6402 15.3707 66.2862 18.0342C59.9322 20.6978 54.1588 24.6018 49.2956 29.5235C44.4325 34.4451 40.5747 40.288 37.9427 46.7185C35.3107 53.1491 33.956 60.0413 33.9559 67.0017V569.405C33.9559 583.462 39.4736 596.944 49.295 606.884C59.1165 616.824 72.4373 622.408 86.327 622.408H278.038C291.928 622.408 305.249 616.824 315.07 606.884C324.892 596.944 330.409 583.462 330.409 569.405V223.767H333.708L333.711 158.58Z" fill="#F2C94C"/>
            <g id="Path 41-2">
            <mask id="path-2-inside-1" fill="white">
            <path d="M151.086 482.145C150.488 482.145 149.915 482.386 149.492 482.813C149.069 483.241 148.832 483.821 148.832 484.426C148.832 485.031 149.069 485.611 149.492 486.039C149.915 486.467 150.488 486.707 151.086 486.707H257.329C257.625 486.719 257.92 486.671 258.198 486.567C258.475 486.463 258.73 486.305 258.947 486.101C259.164 485.898 259.34 485.653 259.463 485.381C259.587 485.108 259.657 484.814 259.668 484.515C259.679 484.215 259.632 483.917 259.53 483.636C259.427 483.355 259.27 483.097 259.069 482.877C258.868 482.657 258.626 482.48 258.357 482.355C258.088 482.229 257.798 482.159 257.502 482.148C257.469 482.146 257.436 482.146 257.403 482.146H151.086V482.145Z"/>
            </mask>
            <path d="M151.086 482.145C150.488 482.145 149.915 482.386 149.492 482.813C149.069 483.241 148.832 483.821 148.832 484.426C148.832 485.031 149.069 485.611 149.492 486.039C149.915 486.467 150.488 486.707 151.086 486.707H257.329C257.625 486.719 257.92 486.671 258.198 486.567C258.475 486.463 258.73 486.305 258.947 486.101C259.164 485.898 259.34 485.653 259.463 485.381C259.587 485.108 259.657 484.814 259.668 484.515C259.679 484.215 259.632 483.917 259.53 483.636C259.427 483.355 259.27 483.097 259.069 482.877C258.868 482.657 258.626 482.48 258.357 482.355C258.088 482.229 257.798 482.159 257.502 482.148C257.469 482.146 257.436 482.146 257.403 482.146H151.086V482.145Z" fill="#F2F2F2" stroke="#F2F2F2" stroke-width="2" mask="url(#path-2-inside-1)"/>
            </g>
            <path id="Path 969" d="M321.084 64.1925V573.694C321.083 584.352 316.899 594.573 309.454 602.11C302.008 609.647 291.909 613.883 281.378 613.887H85.7323C75.1972 613.889 65.0929 609.655 57.6419 602.117C50.1908 594.58 46.0031 584.356 46 573.694V64.1925C46.0031 53.5308 50.1906 43.3069 57.6413 35.7696C65.0921 28.2322 75.1959 23.9986 85.7306 24H109.464C108.298 26.9003 107.855 30.0459 108.172 33.1603C108.489 36.2747 109.557 39.2626 111.283 41.8613C113.008 44.46 115.338 46.59 118.067 48.0641C120.797 49.5381 123.842 50.3111 126.936 50.3151H238.477C241.57 50.3111 244.616 49.5381 247.345 48.0641C250.074 46.59 252.404 44.46 254.129 41.8613C255.855 39.2626 256.923 36.2747 257.24 33.1603C257.557 30.0459 257.114 26.9003 255.949 24H281.371C291.902 24.0018 302.001 28.2359 309.448 35.7714C316.895 43.3069 321.081 53.527 321.084 64.1848V64.1925Z" fill="#4F4F4F" fill-opacity="0.95"/>
            <g id="EduCard3">
            <path id="Path 2894" d="M151.254 482C150.656 482 150.083 482.24 149.66 482.668C149.237 483.096 149 483.676 149 484.281C149 484.886 149.237 485.466 149.66 485.894C150.083 486.322 150.656 486.562 151.254 486.562H257.497C258.087 486.559 258.651 486.322 259.07 485.902C259.489 485.483 259.729 484.914 259.738 484.318C259.748 483.722 259.527 483.145 259.121 482.712C258.716 482.279 258.16 482.024 257.571 482.001H151.254V482Z" fill="#E6E6E6"/>
            <path id="Path 40-2" d="M151.086 468.46C150.488 468.46 149.915 468.7 149.492 469.128C149.069 469.555 148.832 470.136 148.832 470.74C148.832 471.345 149.069 471.926 149.492 472.353C149.915 472.781 150.488 473.021 151.086 473.021H257.329C257.625 473.033 257.92 472.985 258.198 472.881C258.475 472.777 258.73 472.619 258.947 472.415C259.164 472.212 259.34 471.967 259.463 471.695C259.587 471.423 259.657 471.128 259.668 470.829C259.679 470.53 259.632 470.231 259.53 469.95C259.427 469.669 259.27 469.411 259.069 469.191C258.868 468.972 258.626 468.794 258.357 468.669C258.088 468.544 257.798 468.473 257.502 468.462C257.469 468.461 257.436 468.46 257.403 468.46H151.086V468.46Z" fill="#E6E6E6"/>
            <g id="Group 61">
            <path id="Ellipse 5-3" d="M119.008 491.268C126.476 491.268 132.53 485.141 132.53 477.583C132.53 470.025 126.476 463.898 119.008 463.898C111.54 463.898 105.486 470.025 105.486 477.583C105.486 485.141 111.54 491.268 119.008 491.268Z" fill="#2F80ED"/>
            <path id="Path 40-5" d="M112.535 475.027C112.379 475.027 112.253 476.048 112.253 477.308C112.253 478.567 112.379 479.589 112.535 479.589H125.831C125.987 479.61 126.115 478.605 126.118 477.346C126.204 476.562 126.109 475.768 125.84 475.028H112.535V475.027Z" fill="#E6E6E6"/>
            </g>
            <path id="Path 39-2" d="M271.173 502.664H97.3189C96.4653 502.663 95.647 502.319 95.0435 501.709C94.4399 501.098 94.1004 500.27 94.0995 499.406V455.761C94.1007 454.897 94.4402 454.069 95.0437 453.458C95.6472 452.847 96.4654 452.504 97.3189 452.503H271.173C272.027 452.504 272.845 452.847 273.448 453.458C274.052 454.069 274.391 454.897 274.393 455.761V499.407C274.391 500.27 274.052 501.099 273.448 501.709C272.845 502.32 272.027 502.664 271.173 502.665V502.664ZM97.3189 453.806C96.8066 453.806 96.3155 454.012 95.9533 454.379C95.5911 454.745 95.3874 455.242 95.3869 455.761V499.407C95.3874 499.925 95.5911 500.422 95.9533 500.789C96.3155 501.155 96.8066 501.361 97.3189 501.362H271.173C271.685 501.361 272.177 501.155 272.539 500.789C272.901 500.422 273.105 499.925 273.105 499.407V455.761C273.105 455.242 272.901 454.745 272.539 454.379C272.177 454.012 271.685 453.806 271.173 453.806H97.3189Z" fill="#E6E6E6"/>
            </g>
            <g id="EduCard1">
            <g id="Group 59">
            <path id="Ellipse 5" d="M119.008 345.268C126.476 345.268 132.53 339.141 132.53 331.583C132.53 324.025 126.476 317.898 119.008 317.898C111.54 317.898 105.486 324.025 105.486 331.583C105.486 339.141 111.54 345.268 119.008 345.268Z" fill="#2F80ED"/>
            <path id="Path 40-3" d="M112.535 329.026C112.379 329.026 112.253 330.048 112.253 331.307C112.253 332.566 112.379 333.588 112.535 333.588H125.831C125.987 333.609 126.115 332.605 126.118 331.346C126.204 330.561 126.109 329.768 125.84 329.027H112.535V329.026Z" fill="#E6E6E6"/>
            </g>
            <path id="Path 41" d="M151.086 336.171C150.488 336.171 149.915 336.411 149.492 336.839C149.069 337.267 148.832 337.847 148.832 338.452C148.832 339.057 149.069 339.637 149.492 340.065C149.915 340.493 150.488 340.733 151.086 340.733H257.329C257.927 340.756 258.509 340.538 258.947 340.127C259.386 339.716 259.645 339.145 259.668 338.541C259.691 337.936 259.475 337.347 259.069 336.903C258.663 336.459 258.099 336.197 257.502 336.174C257.469 336.172 257.436 336.172 257.403 336.172H151.086V336.171Z" fill="#E6E6E6"/>
            <path id="Path 39" d="M271.173 356.931H97.3189C96.4653 356.93 95.647 356.587 95.0435 355.976C94.4399 355.365 94.1004 354.537 94.0995 353.673V310.028C94.1007 309.164 94.4402 308.336 95.0437 307.726C95.6472 307.115 96.4654 306.771 97.3189 306.77H271.173C272.027 306.771 272.845 307.115 273.448 307.726C274.052 308.336 274.391 309.164 274.393 310.028V353.674C274.391 354.538 274.052 355.366 273.448 355.977C272.845 356.587 272.027 356.931 271.173 356.932V356.931ZM97.3189 308.073C96.8066 308.073 96.3155 308.279 95.9533 308.646C95.5911 309.013 95.3874 309.51 95.3869 310.028V353.674C95.3874 354.192 95.5911 354.689 95.9533 355.056C96.3155 355.423 96.8066 355.629 97.3189 355.629H271.173C271.685 355.629 272.177 355.423 272.539 355.056C272.901 354.689 273.105 354.192 273.105 353.674V310.028C273.105 309.51 272.901 309.013 272.539 308.646C272.177 308.279 271.685 308.073 271.173 308.073H97.3189Z" fill="#E6E6E6"/>
            <path id="Path 40" d="M151.086 322.488C150.488 322.488 149.915 322.728 149.492 323.156C149.069 323.584 148.832 324.164 148.832 324.769C148.832 325.374 149.069 325.954 149.492 326.382C149.915 326.81 150.488 327.05 151.086 327.05H257.329C257.927 327.073 258.509 326.855 258.947 326.444C259.386 326.033 259.645 325.462 259.668 324.857C259.691 324.253 259.475 323.664 259.069 323.22C258.663 322.776 258.099 322.514 257.502 322.49C257.469 322.489 257.436 322.489 257.403 322.489H151.086V322.488Z" fill="#E6E6E6"/>
            </g>
            <g id="EduCard2">
            <path id="Path 44" d="M151.086 409.158C150.488 409.158 149.915 409.399 149.492 409.826C149.069 410.254 148.832 410.834 148.832 411.439C148.832 412.044 149.069 412.624 149.492 413.052C149.915 413.48 150.488 413.72 151.086 413.72H257.329C257.918 413.717 258.483 413.48 258.902 413.061C259.321 412.641 259.561 412.072 259.57 411.476C259.58 410.88 259.358 410.303 258.953 409.87C258.548 409.437 257.992 409.182 257.403 409.159H151.086V409.158Z" fill="#E6E6E6"/>
            <g id="Group 60">
            <path id="Ellipse 5-2" d="M119.008 418.283C126.476 418.283 132.53 412.156 132.53 404.598C132.53 397.04 126.476 390.913 119.008 390.913C111.54 390.913 105.486 397.04 105.486 404.598C105.486 412.156 111.54 418.283 119.008 418.283Z" fill="#2F80ED"/>
            <path id="Path 40-4" d="M112.535 402.042C112.379 402.042 112.253 403.063 112.253 404.322C112.253 405.582 112.379 406.604 112.535 406.604H125.831C125.987 406.624 126.115 405.62 126.118 404.361C126.204 403.577 126.109 402.783 125.84 402.043H112.535V402.042Z" fill="#E6E6E6"/>
            </g>
            <path id="Path 43" d="M151.086 395.472C150.488 395.472 149.915 395.712 149.492 396.14C149.069 396.567 148.832 397.148 148.832 397.753C148.832 398.358 149.069 398.938 149.492 399.365C149.915 399.793 150.488 400.034 151.086 400.034H257.329C257.918 400.03 258.483 399.793 258.902 399.374C259.321 398.954 259.561 398.386 259.57 397.789C259.58 397.193 259.358 396.617 258.953 396.184C258.548 395.751 257.992 395.495 257.403 395.472H151.086V395.472Z" fill="#E6E6E6"/>
            <path id="Path 42" d="M271.173 429.679H97.3189C96.4653 429.678 95.647 429.334 95.0435 428.723C94.4399 428.112 94.1004 427.284 94.0995 426.42V382.776C94.1007 381.912 94.4402 381.084 95.0437 380.473C95.6472 379.862 96.4654 379.518 97.3189 379.517H271.173C272.027 379.518 272.845 379.862 273.448 380.473C274.052 381.084 274.391 381.912 274.393 382.776V426.421C274.391 427.285 274.052 428.113 273.448 428.723C272.845 429.334 272.027 429.677 271.173 429.679ZM97.3189 380.82C96.8066 380.821 96.3155 381.027 95.9533 381.393C95.5911 381.76 95.3874 382.257 95.3869 382.775V426.421C95.3874 426.94 95.5911 427.437 95.9533 427.803C96.3155 428.17 96.8066 428.376 97.3189 428.377H271.173C271.685 428.376 272.177 428.17 272.539 427.803C272.901 427.437 273.105 426.94 273.105 426.421V382.775C273.105 382.257 272.901 381.76 272.539 381.393C272.177 381.027 271.685 380.821 271.173 380.82H97.3189Z" fill="#E6E6E6"/>
            </g>
            <path id="Vector" d="M225.815 233.722C225.113 233.724 224.424 233.529 223.825 233.159C223.226 232.789 222.74 232.258 222.421 231.625C219.709 226.257 215.964 221.493 211.407 217.61C206.85 213.728 201.573 210.806 195.885 209.015C195.885 209.015 191.179 207.756 188.773 207.386L195.885 209.015L213.591 127.23L214.018 127.245C263.186 140.766 291.317 180.646 298.767 192.547C299.051 193.002 299.238 193.512 299.315 194.045C299.392 194.577 299.358 195.12 299.215 195.638C299.071 196.156 298.822 196.638 298.484 197.053C298.145 197.468 297.724 197.806 297.248 198.046L227.523 233.313C226.993 233.582 226.408 233.722 225.815 233.722Z" fill="#2F80ED"/>
            <path id="Path 2881" d="M355.593 393.104C355.856 391.974 356.361 390.917 357.072 390.006C357.783 389.095 358.683 388.353 359.708 387.832C360.733 387.311 361.859 387.023 363.005 386.99C364.152 386.957 365.292 387.179 366.344 387.64L385.192 366.844L388.715 381.068L370.275 398.635C369.393 400.374 367.911 401.726 366.11 402.433C364.31 403.14 362.315 403.154 360.505 402.472C358.695 401.79 357.194 400.459 356.289 398.733C355.383 397.006 355.135 395.003 355.592 393.103L355.593 393.104Z" fill="#FEB8B8"/>
            <path id="Path 2882" d="M396.074 600.558H384.559L379.08 555.601H396.081L396.074 600.558Z" fill="#FEB8B8"/>
            <path id="Path 2883" d="M399 597H372.126C367.584 597 363.228 599.041 360.017 602.674C356.805 606.306 355.001 611.233 355 616.37V617H398.997L399 597Z" fill="#2F80ED"/>
            <path id="Path 2884" d="M462.21 589.012L451.443 593.148L430.557 553.085L446.448 546.981L462.21 589.012Z" fill="#FEB8B8"/>
            <path id="Path 2885" d="M463.231 584L440.149 593.79C436.248 595.445 433.096 598.764 431.384 603.016C429.673 607.269 429.543 612.107 431.024 616.466L431.208 617L469 600.972L463.231 584Z" fill="#2F80ED"/>
            <path id="Path 2886" d="M424.3 451.019L433.844 502.994C433.844 502.994 459.748 576.125 457.93 577.964C456.112 579.804 431.116 586.243 432.48 582.104C433.844 577.965 402.485 515.872 402.485 515.872L424.3 451.019Z" fill="#2F2E41"/>
            <path id="Path 2887" d="M385.597 356.571C385.597 356.571 366.331 382.059 368.856 383.451C371.381 384.843 381.16 392.214 381.16 392.214L391.111 364.577L385.597 356.571Z" fill="#2F80ED"/>
            <path id="Path 2888" d="M380.216 382.297C380.216 382.297 377.035 406.215 378.399 411.274C379.762 416.333 378.853 559.836 377.944 562.135C377.036 564.434 374.307 572.254 375.672 575.933C377.038 579.612 395.668 588.811 398.395 585.592C401.122 582.372 421.12 465.087 421.12 465.087C421.12 465.087 449.297 394.256 442.935 387.357C436.572 380.459 380.216 382.297 380.216 382.297Z" fill="#2F2E41"/>
            <path id="Ellipse 542" d="M419 235C433.912 235 446 222.912 446 208C446 193.088 433.912 181 419 181C404.088 181 392 193.088 392 208C392 222.912 404.088 235 419 235Z" fill="#FEB8B8"/>
            <path id="Path 2890" d="M397.834 256.983C398.395 253.334 400.189 249.994 402.909 247.532L406.969 234.97H430.83L437.479 245.529C444.669 248.663 449.998 253.633 450.2 259.492C451.299 263.383 446.563 386.897 445.201 391.496C444.801 392.834 439.364 393.55 431.721 393.869C424.713 394.158 415.856 394.117 407.353 393.919C393.274 393.588 380.149 392.824 377.94 392.415C372.945 391.496 397.339 259.885 397.834 256.983Z" fill="#F2C94C"/>
            <path id="Path 2891" d="M418.929 420.772C419.896 420.147 420.716 419.315 421.33 418.335C421.945 417.355 422.34 416.25 422.487 415.099C422.634 413.948 422.531 412.778 422.183 411.671C421.835 410.565 421.252 409.55 420.474 408.696L433.643 383.823L419.214 385.157L408.921 408.571C407.59 409.988 406.819 411.85 406.754 413.804C406.689 415.758 407.334 417.669 408.569 419.173C409.803 420.677 411.539 421.671 413.449 421.965C415.359 422.26 417.309 421.835 418.93 420.771L418.929 420.772Z" fill="#FEB8B8"/>
            <path id="Path 2893" d="M424.828 243.519C424.828 243.519 404.014 251.64 411.706 272.16C419.398 292.68 427.995 317.044 427.995 317.044C427.995 317.044 417.135 372.186 417.135 374.326C417.135 376.467 410.349 388.005 413.063 390.143C415.777 392.281 433.877 396.555 434.329 394.418C435.716 389.493 437.377 384.642 439.306 379.884C440.212 378.174 461.478 324.741 458.76 320.039C456.763 316.579 455.009 284.874 454.223 268.374C454.041 263.666 452.565 259.083 449.939 255.077C447.313 251.072 443.629 247.781 439.248 245.529C435.034 243.411 430.123 242.268 424.828 243.519Z" fill="#2F80ED"/>
            <path id="Path 2800" d="M428.689 220.5C426.621 219.558 424.224 219.362 421.988 218.777C413.989 216.68 408.63 208.877 410.342 201.816C410.656 200.918 410.799 199.97 410.762 199.02C410.463 196.929 407.982 195.579 405.605 195.1C403.227 194.62 400.696 194.691 398.424 193.919C396.779 193.344 395.322 192.341 394.205 191.017C393.088 189.692 392.354 188.095 392.078 186.393C391.726 183.086 392.579 179.764 394.484 177.022L395.344 179.156C396.618 178.246 397.594 176.986 398.151 175.534C399.084 175.644 399.974 175.981 400.743 176.515C401.512 177.048 402.135 177.762 402.557 178.591C403.935 179.293 404.134 176.412 405.66 175.986C406.321 175.914 406.989 176.057 407.56 176.395C410.629 177.63 414.194 176.574 417.489 175.889C423.209 174.709 429.113 174.704 434.835 175.872C438.623 176.652 442.375 178.011 445.087 180.424C447.166 182.441 448.799 184.863 449.881 187.535C452.79 193.852 454.71 200.687 453.751 207.432C452.878 213.093 450.181 218.324 446.06 222.35C443.864 224.534 436.7 232.15 432.772 230.852C427.83 229.217 434.505 223.153 428.689 220.5Z" fill="#2F2E41"/>
            <path id="Vector_2" d="M184.5 260C193.613 260 201 252.389 201 243C201 233.611 193.613 226 184.5 226C175.387 226 168 233.611 168 243C168 252.389 175.387 260 184.5 260Z" fill="#F2C94C"/>
            <path id="Vector_3" d="M137.935 233.622C137.316 233.621 136.706 233.467 136.159 233.173L66.8386 196.162C66.3788 195.916 65.9735 195.578 65.6478 195.168C65.3221 194.758 65.0829 194.285 64.9449 193.777C64.8069 193.27 64.773 192.739 64.8454 192.218C64.9178 191.697 65.0949 191.197 65.3658 190.748C74.6255 175.727 86.3514 162.417 100.038 151.391C123.977 132.189 151.207 122.555 180.968 122.717C192.13 122.767 203.237 124.289 214.01 127.244L214.437 127.361L189.123 207.437L188.767 207.383C186.487 207.035 184.188 206.829 181.883 206.765C156.126 206.03 144.964 223.78 141.36 231.445C141.143 231.91 140.834 232.325 140.453 232.665C140.072 233.005 139.627 233.263 139.144 233.422C138.754 233.554 138.346 233.621 137.935 233.622Z" fill="#2F80ED"/>
            <path id="Vector_4" d="M213.908 127.658L196.01 208.606C193.661 207.884 191.264 207.335 188.837 206.962L213.899 127.658H213.908Z" fill="#2F80ED"/>
            <path id="EduPointer" d="M214 128L196.153 209C193.81 208.278 191.42 207.728 189 207.355L213.992 128H214Z" fill="#F2C94C"/>
            </g>
            </svg>


        </motion.div>
    )
}

export default EducationSvg
