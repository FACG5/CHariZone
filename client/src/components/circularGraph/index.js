import CircularProgressbar from 'react-circular-progressbar';
import React from 'react';
import './index.css';

const CircularLevel0 = () => (
  <div style={{ width: '100px' }}>
    <CircularProgressbar
      viewBox="0 0 164 180"
      percentage={0}
      backgroundPadding={20}
      text="Unhealty"
      styles={{
        root: { width: '80px' },
        path: {
          stroke: `rgba(49, 90, 181, ${11.3})`,
        },
        text: {
          fill: '#3B8ECA',
          fontSize: '22px',
          dominantBaseline: 'middle',
          textAnchor: 'middle',
          fontWeight: '300',
        },
        trail: { stroke: '#ccc' },
      }}
    />
  </div>
);

const CircularLevel50 = () => (
  <div style={{ width: '100px' }}>
    <CircularProgressbar
      viewBox="0 0 164 180"
      percentage={50}
      backgroundPadding={20}
      text="Neutral"
      styles={{
        root: { width: '80px' },
        path: {
          stroke: `rgba(49, 90, 181, ${11.3})`,
        },
        text: {
          fill: '#3B8ECA',
          fontSize: '22px',
          dominantBaseline: 'middle',
          textAnchor: 'middle',
          fontWeight: '300',
        },
        trail: { stroke: '#ccc' },
      }}
    />
  </div>
);
const CircularLevel100 = () => (
  <div style={{ width: '100px' }}>
    <CircularProgressbar
      viewBox="0 0 164 180"
      percentage={100}
      backgroundPadding={20}
      text="Healthy"
      styles={{
        root: { width: '80px' },
        path: {
          stroke: `rgba(49, 90, 181, ${11.3})`,
        },
        text: {
          fill: '#3B8ECA',
          fontSize: '22px',
          dominantBaseline: 'middle',
          textAnchor: 'middle',
          fontWeight: '300',
        },
        trail: { stroke: '#ccc' },
      }}
    />
  </div>
);
export { CircularLevel0, CircularLevel50, CircularLevel100 };
