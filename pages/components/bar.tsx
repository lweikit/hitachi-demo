import { Bar } from '@vx/shape';
import { Group } from '@vx/group';
import { GradientTealBlue } from '@vx/gradient';
import { AxisBottom } from '@vx/axis';
import letterFrequency, { LetterFrequency } from '@vx/mock-data/lib/mocks/letterFrequency';
import cityTemperature, { CityTemperature } from '@vx/mock-data/lib/mocks/cityTemperature';
import { scaleBand, scaleLinear, scaleOrdinal } from '@vx/scale';
import { timeParse, timeFormat } from 'd3-time-format';

interface CountryProduction {
  country: string;
  manufacturing2017: string;
  manufacturing2008: string;
}

const countryProduction: CountryProduction[] = [
  {
    country: "ASEAN",
    manufacturing2008: '38',
    manufacturing2017: '15'
  },
  {
    country: "China",
    manufacturing2008: '84',
    manufacturing2017: '16'
  },
  {
    country: "Germany",
    manufacturing2008: '8',
    manufacturing2017: '92'
  },
  {
    country: "United States",
    manufacturing2008: '4',
    manufacturing2017: '137'
  },
]

export const black = '#000';
const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };
const data = letterFrequency.slice(15);

// accessors
const getLetter = (d: LetterFrequency) => d.letter;
const getLetterFrequency = (d: LetterFrequency) => Number(d.frequency) * 100;

export type BarsProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  events?: boolean;
};

export default function ProductivityBar({ width, height, margin = defaultMargin, events = true }: BarsProps) {
  // bounds
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // scales, memoize for performance
  const xScale = scaleBand<string>({
      rangeRound: [0, xMax],
      domain: data.map(getLetter),
      padding: 0.4,
    });
    
  const yScale = scaleLinear<number>({
      rangeRound: [yMax, 0],
      domain: [0, Math.max(...data.map(getLetterFrequency))],
    });

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <GradientTealBlue id="teal" />
      <rect width={width} height={height} fill="url(#teal)" rx={14} />
      <Group top={margin.top} left={margin.left}>
        {data.map(d => {
          const letter = getLetter(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - yScale(getLetterFrequency(d));
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${letter}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill="rgba(23, 233, 217, .5)"
              onMouseOver={() => {
                if (events) alert(`clicked: ${JSON.stringify(Object.values(d))}`);
              }}
            />
          );
        })}
      </Group>
      <AxisBottom
        top={yMax + margin.top}
        scale={xScale}
        stroke={black}
        tickStroke={black}
        hideAxisLine
        tickLabelProps={() => ({
          fill: black,
          fontSize: 11,
          textAnchor: 'middle',
        })}
      />
    </svg>
  );
}


// export type BarGroupProps = {
//   width: number;
//   height: number;
//   margin?: { top: number; right: number; bottom: number; left: number };
//   events?: boolean;
// };

// type CityName = 'New York' | 'San Francisco' | 'Austin';

// const blue = '#aeeef8';
// export const black = '#e5fd3d';
// const purple = '#9caff6';
// export const background = '#612efb';

// const data = cityTemperature.slice(0, 8);
// const keys = Object.keys(data[0]).filter(d => d !== 'date') as CityName[];
// const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };

// const parseDate = timeParse('%Y-%m-%d');
// const format = timeFormat('%b %d');
// const formatDate = (date: string) => format(parseDate(date) as Date);

// // accessors
// const getDate = (d: CityTemperature) => d.date;

// // scales
// const dateScale = scaleBand<string>({
//   domain: data.map(getDate),
//   padding: 0.2,
// });
// const cityScale = scaleBand<string>({
//   domain: keys,
//   padding: 0.1,
// });
// const tempScale = scaleLinear<number>({
//   domain: [0, Math.max(...data.map(d => Math.max(...keys.map(key => Number(d[key])))))],
// });
// const colorScale = scaleOrdinal<string, string>({
//   domain: keys,
//   range: [blue, black, purple],
// });

// export default function Example({
//   width,
//   height,
//   events = false,
//   margin = defaultMargin,
// }: BarGroupProps) {
//   // bounds
//   const xMax = width - margin.left - margin.right;
//   const yMax = height - margin.top - margin.bottom;

//   // update scale output dimensions
//   dateScale.rangeRound([0, xMax]);
//   cityScale.rangeRound([0, dateScale.bandwidth()]);
//   tempScale.range([yMax, 0]);

//   return width < 10 ? null : (
//     <svg width={width} height={height}>
//       <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
//       <Group top={margin.top} left={margin.left}>
//         <BarGroup<CityTemperature, string>
//           data={data}
//           keys={keys}
//           height={yMax}
//           x0={getDate}
//           x0Scale={dateScale}
//           x1Scale={cityScale}
//           yScale={tempScale}
//           color={colorScale}
//         >
//           {barGroups =>
//             barGroups.map(barGroup => (
//               <Group key={`bar-group-${barGroup.index}-${barGroup.x0}`} left={barGroup.x0}>
//                 {barGroup.bars.map(bar => (
//                   <rect
//                     key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
//                     x={bar.x}
//                     y={bar.y}
//                     width={bar.width}
//                     height={bar.height}
//                     fill={bar.color}
//                     rx={4}
//                     onClick={() => {
//                       if (!events) return;
//                       const { key, value } = bar;
//                       alert(JSON.stringify({ key, value }));
//                     }}
//                   />
//                 ))}
//               </Group>
//             ))
//           }
//         </BarGroup>
//       </Group>
//       <AxisBottom
//         top={yMax + margin.top}
//         tickFormat={formatDate}
//         scale={dateScale}
//         stroke={black}
//         tickStroke={black}
//         hideAxisLine
//         tickLabelProps={() => ({
//           fill: black,
//           fontSize: 11,
//           textAnchor: 'middle',
//         })}
//       />
//     </svg>
//   );
// }