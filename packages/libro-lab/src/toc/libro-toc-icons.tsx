export interface IProps {
  className?: string;
  width?: string;
  height?: string;
}
export function TocIcon(props: IProps) {
  const { className = '' } = props;
  return (
    <svg
      width="12px"
      height="14px"
      viewBox="0 0 12 14"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>source</title>
      <g id="代码片段" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="1.4编辑状态备份"
          transform="translate(-14.000000, -215.000000)"
          fill="currentColor"
        >
          <g id="编组-2" transform="translate(0.000000, 56.000000)">
            <g id="source" transform="translate(14.359615, 159.750439)">
              <path
                d="M11.3634429,8.03576964 L9.90082151,8.03576964 L9.90082151,5.91521932 C9.90082151,5.85383497 9.85019231,5.80361141 9.78831217,5.80361141 L6.30052278,5.80361141 L6.30052278,4.46431647 L7.81939881,4.46431647 C7.94315907,4.46431647 8.04441748,4.36386935 8.04441748,4.24110065 L8.04441748,0.223215823 C8.04441748,0.100447121 7.94315907,0 7.81939881,0 L3.76906273,0 C3.64530246,0 3.54404406,0.100447121 3.54404406,0.223215823 L3.54404406,4.24110065 C3.54404406,4.36386935 3.64530246,4.46431647 3.76906273,4.46431647 L5.28793876,4.46431647 L5.28793876,5.80361141 L1.80014937,5.80361141 C1.73826923,5.80361141 1.68764003,5.85383497 1.68764003,5.91521932 L1.68764003,8.03576964 L0.225018671,8.03576964 C0.101258402,8.03576964 0,8.13621676 0,8.25898547 L0,12.2768703 C0,12.399639 0.101258402,12.5000861 0.225018671,12.5000861 L4.27535474,12.5000861 C4.39911501,12.5000861 4.50037341,12.399639 4.50037341,12.2768703 L4.50037341,8.25898547 C4.50037341,8.13621676 4.39911501,8.03576964 4.27535474,8.03576964 L2.70022405,8.03576964 L2.70022405,6.80808261 L8.88823749,6.80808261 L8.88823749,8.03576964 L7.3131068,8.03576964 C7.18934653,8.03576964 7.08808813,8.13621676 7.08808813,8.25898547 L7.08808813,12.2768703 C7.08808813,12.399639 7.18934653,12.5000861 7.3131068,12.5000861 L11.3634429,12.5000861 C11.4872031,12.5000861 11.5884615,12.399639 11.5884615,12.2768703 L11.5884615,8.25898547 C11.5884615,8.13621676 11.4872031,8.03576964 11.3634429,8.03576964 Z"
                id="Path"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}