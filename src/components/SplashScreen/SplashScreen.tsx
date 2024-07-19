"use client";
import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";

const femalePaths = [
  "M450.307 561.135L375 506",
  "M329 632.262L442.896 627",
  "M376 768.553L449.699 695",
  "M483.025 827.915L522.673 731.637",
];

const malePaths = [
  "M1405.97 571.51L1482.99 624.217",
  "M1524.95 496.554L1411.28 505.443",
  "M1473.63 361.83L1402.31 437.694",
  "M1364.76 305.908L1328.2 403.401",
];

const SplashScreen = (props: SVGProps<SVGSVGElement>) => {
  return (
    <motion.div
      initial={{ background: "black" }}
      animate={{ background: "transparent" }}
      transition={{
        duration: 1,
        delay: 4,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 120,
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width={"100%"} viewBox="0 0 1747 1208" fill="none" {...props}>
        <g id="Group 1171276956">
          <motion.g
            initial={{ x: 0 }}
            animate={{
              x: [0, 9600],
            }}
            transition={{
              times: [0, 4],
              duration: 1.8,
              delay: 3.7,
              type: "keyframes",
              ease: "easeInOut",
            }}
            id="malesection"
          >
            <path
              id="Vector 170"
              d="M908.5 304.5L700 0H1747V1206.5H1058.39L1058.5 1067.5L1102.5 935L908.5 846.5L776 489.5L908.5 304.5Z"
              fill="black"
            />
            <motion.g
              animate={{
                x: [600, -6290],
                y: [0, 130, -100, -30],
              }}
              transition={{
                times: [0, 4],
                duration: 2.6,
                type: "keyframes",
                ease: "easeInOut",
              }}
              id="female_2"
            >
              <motion.g
                animate={{
                  rotate: [0, -10, 10, -3],
                }}
                transition={{
                  times: [0, 4],
                  duration: 2.6,
                  type: "keyframes",
                  ease: "easeInOut",
                }}
                id="malePlug"
              >
                <path
                  id="Vector_27"
                  d="M1233.04 610.012L1183.16 451.719"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_28"
                  d="M1212.12 442.574L1261.98 600.867"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_29"
                  d="M1304.92 526.722L1290.03 479.457"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeMiterlimit={10}
                />
                <path
                  id="Vector_30"
                  d="M1117.56 636.588L1073.36 496.282"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_15"
                  d="M1316 490.367C1512.55 399.624 1585.25 344.972 1637.84 417.639C1708.03 514.488 1604.62 632.511 1650.11 761.166C1667.16 809.347 1703.29 828 1747 828"
                  stroke="url(#paint2_linear_53_611)"
                  strokeWidth={5}
                  strokeMiterlimit={10}
                />
                <path
                  id="Vector_16"
                  d="M1037.16 622.366L1037.09 622.125C1036.65 620.732 1036.78 619.221 1037.45 617.926C1038.13 616.63 1039.28 615.655 1040.68 615.216L1104.49 595.059L1107.87 605.804L1044.06 625.961C1042.67 626.4 1041.16 626.268 1039.87 625.594C1038.57 624.92 1037.6 623.759 1037.16 622.366Z"
                  fill="#A6A6A6"
                />
                <path
                  id="Vector_17"
                  d="M1083.08 527.07L1086.44 537.742L1022.63 557.9C1021.94 558.117 1021.22 558.197 1020.5 558.134C1019.78 558.071 1019.08 557.867 1018.44 557.533C1017.8 557.199 1017.23 556.742 1016.76 556.188C1016.3 555.634 1015.95 554.994 1015.73 554.304L1015.65 554.064C1015.44 553.374 1015.36 552.648 1015.42 551.928C1015.48 551.207 1015.69 550.506 1016.02 549.865C1016.35 549.223 1016.81 548.653 1017.36 548.188C1017.92 547.724 1018.56 547.372 1019.25 547.155L1083.05 526.998L1083.08 527.07Z"
                  fill="#A6A6A6"
                />
                <path
                  id="Vector_18"
                  d="M1256.91 584.749L1217.19 458.678L1244.57 450.028C1248.73 448.706 1253.11 448.219 1257.47 448.594C1261.82 448.969 1266.05 450.2 1269.93 452.216C1273.8 454.232 1277.25 456.993 1280.06 460.342C1282.86 463.69 1284.99 467.561 1286.3 471.731L1306.04 534.37C1307.35 538.54 1307.82 542.927 1307.44 547.281C1307.06 551.636 1305.82 555.872 1303.8 559.747C1301.78 563.622 1299.02 567.061 1295.67 569.867C1292.32 572.673 1288.46 574.791 1284.29 576.1L1256.91 584.749Z"
                  fill="#F9F6F5"
                />
                <path
                  id="Vector_19"
                  d="M1288.68 479.405L1303.57 526.673L1364.8 507.33L1349.91 460.062L1288.68 479.405Z"
                  fill="#F9F6F5"
                />
                <path
                  id="Vector_20"
                  d="M1183.16 451.713L1233.03 609.996L1261.98 600.852L1212.1 442.57L1183.16 451.713Z"
                  fill="#F9F6F5"
                />
                <path
                  id="Vector_21"
                  d="M1264.8 480.972L1281.38 533.593"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_22"
                  d="M1250.05 485.646L1266.62 538.267"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_23"
                  d="M1073.36 496.292L1117.56 636.578L1230.19 600.999L1185.99 460.713L1073.36 496.292Z"
                  fill="url(#paint3_linear_53_611)"
                />
                <path
                  id="Vector_24"
                  d="M1092.71 557.68L1098.23 575.218L1154.56 557.425L1149.03 539.886L1092.71 557.68Z"
                  fill="white"
                />
                <path
                  id="Vector_25"
                  d="M1164.42 486.657L1176.58 482.792"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_26"
                  d="M1100.56 506.816L1153.11 490.218"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.g>

              <g id="maleLines">
                {malePaths?.map((el, index) => (
                  <motion.path
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, fill: "white" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: 2.8 + index / femalePaths.length,
                    }}
                    key={el}
                    id="Vector_11"
                    d={el}
                    stroke="#F9F6F5"
                    strokeWidth={14}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
              </g>
            </motion.g>
          </motion.g>
          <motion.g
            animate={{
              x: [0, -9600],
            }}
            transition={{
              times: [0, 4],
              duration: 1.8,
              delay: 3.7,
              type: "keyframes",
              ease: "easeInOut",
            }}
            id="femalesection"
          >
            <path
              id="Vector 171"
              d="M1102.5 932L1063 1065.5L1060.39 1207.5H195.392L0 1207.5L0 1L708 1L913.5 298L778.5 490L913.5 845L1102.5 932Z"
              fill="black"
            />
            <motion.g
              animate={{
                x: [-600, 4600],
                y: [0, 130, -100, 0],
              }}
              transition={{
                times: [0, 4],
                duration: 2.6,
                type: "keyframes",
                ease: "easeInOut",
              }}
              id="female"
            >
              <motion.g
                animate={{
                  rotate: [0, -10, 10, -3],
                }}
                transition={{
                  times: [0, 4],
                  duration: 2.6,
                  type: "keyframes",
                  ease: "easeInOut",
                }}
                id="femalePlug"
              >
                <path
                  id="Vector"
                  d="M511 640.299C278.815 733.895 192.944 790.256 130.738 715.293C47.8376 615.373 169.979 493.673 116.249 360.991C96.1098 311.293 51.0976 293 0 293"
                  stroke="url(#paint0_linear_53_611)"
                  strokeWidth={5}
                  strokeMiterlimit={10}
                />
                <path
                  id="Vector_2"
                  d="M703.543 497.141L748.58 640.034L642.766 673.45C640.374 674.205 637.781 673.979 635.556 672.82C633.331 671.661 631.657 669.665 630.903 667.271L591.556 542.432C590.801 540.038 591.028 537.442 592.186 535.215C593.343 532.988 595.337 531.312 597.729 530.557L703.543 497.141Z"
                  fill="url(#paint1_linear_53_611)"
                />
                <path
                  id="Vector_3"
                  d="M631.557 669.052L591.087 540.65L530.918 559.652L571.387 688.054L631.557 669.052Z"
                  fill="#F9F6F5"
                />
                <path
                  id="Vector_4"
                  d="M558.723 647.943L543.549 599.799L481.167 619.499L496.341 667.644L558.723 647.943Z"
                  fill="#F9F6F5"
                />
                <path
                  id="Vector_5"
                  d="M721.145 629.265L652.68 650.898C651.503 651.269 650.264 651.405 649.035 651.296C647.805 651.187 646.609 650.837 645.515 650.265C644.421 649.693 643.451 648.91 642.659 647.962C641.868 647.013 641.272 645.918 640.904 644.739L635.356 627.069"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_6"
                  d="M583.031 646.353L566.135 592.765"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_7"
                  d="M598.085 641.608L581.19 587.994"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_8"
                  d="M630.842 666.875L591.73 542.786"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_9"
                  d="M571.355 688.078L530.882 559.673"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_10"
                  d="M496.309 667.658L481.154 619.496"
                  stroke="#222222"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.g>
              <g id="femaleLines">
                {femalePaths?.map((el, index) => (
                  <motion.path
                    variants={{}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, fill: "white" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      delay: 2.8 + index / femalePaths.length,
                    }}
                    key={el}
                    id="Vector_11"
                    d={el}
                    stroke="#F9F6F5"
                    strokeWidth={14}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
              </g>
            </motion.g>
          </motion.g>
        </g>
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            fill: "none",
          }}
          transition={{
            duration: 1,
            delay: 2.7,
            ease: "easeInOut",
          }}
          stroke="url(#a)"
          strokeWidth={12}
          d="m710 4 212 302.5-136.5 200 136.5 345 181.5 106-33.5 112V1212"
        />
        <defs>
          <linearGradient
            id="paint0_linear_53_611"
            x1={97.1768}
            y1={288.354}
            x2={199.34}
            y2={869.016}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF981F" />
            <stop offset={1} stopColor="#B728CE" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_53_611"
            x1={713.275}
            y1={523.946}
            x2={573.801}
            y2={593.425}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF981F" />
            <stop offset={1} stopColor="#B728CE" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_53_611"
            x1={1397.96}
            y1={379.486}
            x2={1511.19}
            y2={938.147}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF981F" />
            <stop offset={1} stopColor="#B728CE" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_53_611"
            x1={1108.01}
            y1={610.261}
            x2={1244.83}
            y2={542.141}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF981F" />
            <stop offset={1} stopColor="#B728CE" />
          </linearGradient>
          <linearGradient
            id="a"
            x1={-45.5}
            x2={483.5}
            y1={-125.5}
            y2={1361}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B728CE" />
            <stop offset={1} stopColor="#FF701F" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};
export default SplashScreen;
