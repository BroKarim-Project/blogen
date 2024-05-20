import * as React from 'react';
const SvgStock1 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 62 33" {...props}>
    <path
      stroke="#16A34A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m59.927 1.493.709 3.012-2.225.326-5-1.27.735 2.562-1.989.07-.835 3.015-3.037-.89-4.449.652-1.49 2.889-4.084-1.85-5.47-.756 1.468 5.126-1.78.26.735 2.564-3.481-.825-6.254 1.361 1.782 3.523-5-1.27-3.585.97.054 2.885-4.687-2.874.709 3.012-4.004.587-.365 2.501-3.142-2.877-3.402 1.611 2.778 5.38"
    />
  </svg>
);

const SvgStock2 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 100 31" {...props}>
    <path
      stroke="#16A34A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m98.016 4.642-.505 3.053-2.178-.555-4.126-3.097-.309 2.648-1.862-.702-1.932 2.462-2.46-1.99-4.357-1.11L77.8 7.442l-3.058-3.279-4.758-2.803-.617 5.296-1.743-.444-.308 2.648L64.42 6.76l-6.297-1.15.29 3.936-4.126-3.096-3.683-.484-1.06 2.683-3.22-4.456-.505 3.053-3.921-1-1.3 2.169-1.793-3.866-3.76.178.494 6.034-3.17-1.035 1.435 3.092-4.554-.706.374 5.776-1.693 2.977-2.734-.924-5.2-5.415-.105 4.745-3.058-3.279-2.48 4.595-1.314-2.835-2.973-1.44 1.793 3.866-.891 6.363-2.622-3.168-2.067-2.8-.111 2.245-4.007-2.84-.624 2.795.971 7.065"
    />
  </svg>
);

const SvgStock3 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 95 38" {...props}>
    <path
      stroke="#16A34A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M93.343 34.15 90.4 31.825l-2.943 4.65-3.68-6.394-11.036-7.557-2.944 7.557-5.15-9.3-6.622-4.07-4.415 4.07-2.207-11.046-3.68 5.232-6.622-5.232-4.415 2.907v-8.72l-7.358-2.906-4.414 11.626-5.151-4.65v6.975l-8.094-5.232L7.254 20.78l-5.886 4.07"
    />
  </svg>
);

const SvgStock4 = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 95 38" {...props}>
    <path
      stroke="#DC2626"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M93.343 34.15 90.4 31.825l-2.943 4.65-3.68-6.394-11.036-7.557-2.944 7.557-5.15-9.3-6.622-4.07-4.415 4.07-2.207-11.046-3.68 5.232-6.622-5.232-4.415 2.907v-8.72l-7.358-2.906-4.414 11.626-5.151-4.65v6.975l-8.094-5.232L7.254 20.78l-5.886 4.07"
    />
  </svg>
);

const Comment = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 32 32" {...props}>
    {"{' '}"}
    <title>{'comment-5'}</title>
    {"{' '}"}
    <g fill="#000" fillRule="evenodd" transform="translate(-360 -255)">
      {"{' '}{' '}"}
      <path d="M390 277c0 1.463-1.527 3-3 3h-8l-3 4-3-4h-8c-1.473 0-3-1.537-3-3v-17c0-1.463 1.527-3 3-3h22c1.473 0 3 1.537 3 3v17Zm-3.333-22h-21.334c-2.945 0-5.333 2.371-5.333 5.297v16.89c0 2.924 2.055 4.813 5 4.813h6.639l4.361 5.001 4.361-5.001H387c2.945 0 5-1.889 5-4.813v-16.89c0-2.926-2.388-5.297-5.333-5.297Z">
        {"{' '}"}
      </path>
      {"{' '}{' '}"}
    </g>
    {"{' '}"}
  </svg>
);

const Clock = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" {...props}>
    <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
      {"{' '}"}
      <path d="M12 7v5l1.5 2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      {"{' '}"}
    </g>
  </svg>
);

export { SvgStock1, SvgStock2, SvgStock3, SvgStock4, Comment, Clock };
