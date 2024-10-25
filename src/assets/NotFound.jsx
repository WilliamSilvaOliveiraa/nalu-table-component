import React from "react";

function NotFound({ variant }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
      <g fill="#ebebeb">
        <path d="M376.94 219.39l-9.49 17.27a14.5 14.5 0 01-20.17 5.85 14.87 14.87 0 01-5.86-20.16l15.19-27.63c.14-.26.41-.11.56-.38-.13-.41-.13-.41 0-.68a15.28 15.28 0 0120.16-5.87c16.74 9.2 37.59 3.37 46.65-13.1 9.19-16.73 2.8-37.19-13.94-46.4a33.51 33.51 0 00-33.53.6 14.94 14.94 0 01-20.69-5.15 14.76 14.76 0 015.27-20.27 63.56 63.56 0 0163.26-1.21c30.82 16.95 42.32 55.78 25.38 86.59a63.64 63.64 0 01-72.79 30.54zm-32 58.17l-2.63 4.78a14.51 14.51 0 01-20.18 5.86 14.87 14.87 0 01-5.82-20.2l2.63-4.78a15.07 15.07 0 0120.16-5.86 14.69 14.69 0 015.9 20.2z"></path>
        <path d="M316.64 93.71l2-13.15a9.79 9.79 0 0111.42-8.41 10 10 0 018.41 11.41l-3.19 21c0 .2-.24.17-.27.37.18.23.18.23.15.44a10.34 10.34 0 01-11.42 8.42 22.93 22.93 0 10-6.87 45.33A22.66 22.66 0 00338 151a10.09 10.09 0 0114.31-1.56 10 10 0 011.38 14.08 43 43 0 11-37-69.79zm6.72-44.31l.55-3.64a9.79 9.79 0 0111.42-8.42 10 10 0 018.41 11.42l-.55 3.64a10.18 10.18 0 01-11.41 8.41 9.91 9.91 0 01-8.42-11.41zM87.29 123l-5.66-12a9.79 9.79 0 014.82-13.34 10 10 0 0113.33 4.81l9.06 19.27c.08.18-.11.27 0 .46.27.09.27.09.36.28a10.31 10.31 0 01-4.81 13.34 22.93 22.93 0 1019.49 41.5 22.62 22.62 0 0013-18.54 10.08 10.08 0 0111-9.25 10 10 0 019 10.93A43 43 0 1187.29 123zM68.23 82.43l-1.56-3.33a9.8 9.8 0 014.81-13.35 10 10 0 0113.34 4.82l1.57 3.33a10.18 10.18 0 01-4.81 13.34 9.92 9.92 0 01-13.35-4.81z"></path>
      </g>
      <g>
        <path
          fill="#f7a9a0"
          d="M305 361.45s-24.09 42.6-24.1 42.63c-3.87 8.59-7.11 16.19-8.42 20.28a.14.14 0 000 .06 6.52 6.52 0 00-.56 2.94v.08c1.78 2.88 69.53 35.81 72.28 36.16s4-7.45 2.36-10.83-21.92-27.59-21.92-27.59l23.65-42.76z"
        ></path>
        <path
          fill="#ebebeb"
          d="M343.11 463.36c-2.75-.36-69.42-33-71.19-35.92a.11.11 0 010-.07 6.55 6.55 0 01.55-2.94v-.07c1.31-4.09 4.55-11.69 8.41-20.28 0 0 4.06-7.45 5.68-10l43.09 22.27-5 8.86s19.22 24 20.84 27.34.37 11.17-2.38 10.81z"
        ></path>
        <path
          fill="#263238"
          d="M344.34 462.44c-2.76-.42-70.27-35.2-72-38.16-.68-1.11 3.82-11.24 9.6-23.33l.18-.37 43.8 21.95-.4.73s19.89 24.86 21.45 28.32.14 11.29-2.63 10.86z"
        ></path>
        <path
          fill="#fff"
          d="M344.93 459.42c-11.24-6.14-57.13-29.85-68.7-35.06-.1-.05-.13 0 0 .07 11 6.33 57.09 29.66 68.64 35.18.21.12.3-.06.06-.19zM329.13 425.27c-4.05-3.14-9.88-5.27-14.95-3.85-.19.06-.11.34.06.37a70.59 70.59 0 0114.58 4 .32.32 0 00.31-.52zM331.36 428.89c-4.05-3.15-9.88-5.28-14.95-3.85-.19 0-.11.33.06.36a70.59 70.59 0 0114.58 4 .32.32 0 00.31-.51zM333.58 432.5c-4-3.14-9.87-5.28-14.94-3.85-.2.06-.11.33.05.36a70.9 70.9 0 0114.58 4.05.32.32 0 00.31-.56zM289.38 413.88c-3.63-5-11.36.67-7.72 5.65s11.34-.67 7.72-5.65z"
        ></path>
        <path
          d="M328.5 427l4.86 30.31c6.11 3 10.33 5 11 5.14 2.76.43 4.18-7.43 2.64-10.87-1.2-2.58-12.89-17.52-18.5-24.58z"
          opacity="0.1"
        ></path>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M346.62 460.55c1 1.08-1.38 5-2.42 4.88s-74.47-38.36-75.58-39.29 1.66-5.17 3.24-4.66 74.76 39.07 74.76 39.07z"
        ></path>
        <path
          fill="#263238"
          d="M286.46 390.07L335 416s61.28-87.34 62.51-110.28c1.69-31.69-25.37-132.3-25.37-132.3l-43.14-.3s17.55 103.46 16.12 121.11c-.76 9.24-58.66 95.84-58.66 95.84z"
        ></path>
        <path
          fill="#37474f"
          d="M339.25 406c-2.5-1.8-25.52-15.13-43-23.65a.1.1 0 00-.09.18c5.31 3.51 39.66 22.33 43 23.66.07 0 .2-.19.09-.19zM351.1 272.13c-2-15.14-4.21-30.26-6.72-45.33s-5.19-30.25-8.36-45.26c-.38-1.84-.79-3.67-1.19-5.5a.22.22 0 00-.44.09c2.66 14.89 5.39 29.78 7.84 44.71s4.77 29.89 6.77 44.88q.76 5.56 1.48 11.14a97.64 97.64 0 011.1 11.56 29.69 29.69 0 01-1.85 10.84 62 62 0 01-5 9.74c-7.73 13.21-42.73 70.94-43.65 72.62-.06.11.1.22.17.11 8.39-13 34.42-54.61 42.34-68 3.57-6.05 7.67-12.18 8.83-19.25 1.21-7.38-.35-15.06-1.32-22.35z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M338.67 390.07l-.49 49.27c.26 9.42.66 17.67 1.26 21.92a.17.17 0 000 .07 6.58 6.58 0 00.78 2.89v.06c2.86 1.82 78.19 1.93 80.81 1.05s.33-8.44-2.59-10.78-31.75-15.27-31.75-15.27v-49.21z"
        ></path>
        <path
          fill="#ebebeb"
          d="M338.28 429.23l-.1 10.11c.26 9.42.66 17.67 1.26 21.92a.17.17 0 000 .07 12.81 12.81 0 00.78 2.89v.06c2.86 1.82 78.19 1.93 80.81 1.05s.33-8.44-2.59-10.78-31.75-15.27-31.75-15.27V429z"
        ></path>
        <path
          fill="#263238"
          d="M421.13 465.24c-2.67.85-78.59-.49-81.44-2.38-1.1-.7-1.55-11.77-1.71-25.17v-.42l49 .32v.83s28.84 13.51 31.76 15.92 5.06 10.06 2.39 10.9z"
        ></path>
        <path
          fill="#fff"
          d="M420.32 462.28c-12.79-.54-64.44-1.51-77.12-1.07-.11 0-.11.07 0 .08 12.67.81 64.33 1.36 77.13 1.2.26 0 .26-.2-.01-.21zM391.05 438.64c-5-1-11.2-.37-15.11 3.16-.15.13.05.35.21.3a70.76 70.76 0 0114.85-2.83.32.32 0 00.05-.63zM394.64 440.89c-5-1-11.19-.36-15.1 3.16-.15.14 0 .35.21.3a70.65 70.65 0 0114.86-2.82.32.32 0 00.03-.64zM398.24 443.15c-5-1-11.19-.37-15.1 3.16-.16.13 0 .34.2.3a70.88 70.88 0 0114.87-2.83.32.32 0 00.03-.63z"
        ></path>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M422.34 462.54c1.35.55 1 5.1 0 5.45s-83.77-1.47-85.17-1.81-.79-5.38.85-5.61 84.32 1.97 84.32 1.97z"
        ></path>
        <path
          fill="#fff"
          d="M350.36 446c-5.45-2.85-9.89 5.62-4.43 8.48s9.9-5.63 4.43-8.48z"
        ></path>
        <path
          fill="#263238"
          d="M371.61 173.31v.05c-.29.89-15.8 43.39-17.26 44.07-1.65.76 34.27 61.1 36.39 89.13 1.36 17.92-1.3 119.38-1.3 119.38H336.9s2.53-91.21 3.73-120.11c.46-11.21-36.06-67-36.51-101.75-.14-11 7.73-31 7.73-31z"
        ></path>
        <path
          fill="#37474f"
          d="M340.93 305.05c0-.47-.37-.62-.4-.14-1.19 15.64-1.46 31.19-2.21 46.86s-.32 19.39-1 35c-.39 8.84 0 17.7-.22 26.55a.11.11 0 00.21 0c1.62-15.56 3.61-99.42 3.62-108.27zM390.72 307.17a76.61 76.61 0 00-1.06-11.51 56.74 56.74 0 00-3.24-10.81c-2.9-7.32-6.33-14.45-9.61-21.61s-6.71-14.46-10.21-21.62q-3-6-5.94-12.05c-2-4.06-4.2-8-6.31-12.06a.14.14 0 00-.25.13c3.36 7.22 6.69 14.47 10 21.7s6.67 14.48 10 21.73 6.51 14.28 9.58 21.49a70.45 70.45 0 013.74 10.62 62.2 62.2 0 011.58 11.44c.51 9 .76 18 1.64 26.91 0 .12.19.11.2 0 .25-8.11.16-16.26-.12-24.36zM385.61 415.37c-3.05-.37-26.32-1-45.78 0-.13 0-.12.19 0 .2 6.35.51 42.2.45 45.76 0 .12.01.16-.18.02-.2z"
        ></path>
        <path
          fill="#37474f"
          d="M361.59 215.07a99.35 99.35 0 00-16.42 5.69.18.18 0 00.11.34c5.52-1.73 11.12-3.35 16.53-5.37a.35.35 0 00-.22-.66zM366.89 179.07c0-.18-.32-.26-.33-.06a176.61 176.61 0 01-2.7 17.55c-.52 2.69-4.25 17.5-8.85 15.92-.77-.27-1.1-1.08-1.1-2.29a19.28 19.28 0 011.1-4.54c.85-3.09 1.59-6.21 2.19-9.36a87.17 87.17 0 001.63-17.8.16.16 0 00-.31 0 163.66 163.66 0 01-3.95 24.4c-1 3.84-3.56 9.53.46 10.55s7.81-8.54 8.59-11.19a90.69 90.69 0 003.27-23.18z"
        ></path>
        <path
          fill="#37474f"
          d="M355.09 212.9a25.41 25.41 0 00-1.38 3 7 7 0 00-.7 2.52c0 .17.22.2.32.1a9 9 0 001.35-2.38c.46-.92.93-1.84 1.37-2.78a.53.53 0 00-.96-.46zM346.31 320.48c.26-7.47 1.09-15.3-1.35-22.5a75.44 75.44 0 00-4.79-10.22q-2.75-5.26-5.36-10.59c-7-14.17-13.63-28.56-19.54-43.24-2.84-7.06-5.38-14.31-6.4-21.89a67.26 67.26 0 011.47-23.82c.44-1.95.91-3.88 1.44-5.8 0-.14-.17-.22-.21-.08a78 78 0 00-4.1 22.78 64.47 64.47 0 003.95 21.77c2.52 7.33 5.67 14.46 8.78 21.55q4.8 11 10 21.78c3.44 7.16 7.1 14.2 10.73 21.27a38.55 38.55 0 014 10.73 54.94 54.94 0 01.43 11.75c-.62 16.51-2 71.48-2.25 87.95q0 3.13-.07 6.28a.14.14 0 00.28 0c1.05-16.42 2.39-71.26 2.99-87.72z"
        ></path>
        <path
          fill="#37474f"
          d="M334.53 184c0-.12-.19-.1-.2 0-.62 4.54-1 9.26-3.17 13.38-2 3.79-5.52 6.22-9.35 7.93a69.74 69.74 0 01-6.82 2.52c-.17.05-.13.31.05.27 4.35-.9 8.76-1.91 12.54-4.35 4-2.61 6.12-6.79 6.78-11.47a40.31 40.31 0 00.17-8.28z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M352.92 115.25c7.86 6.55 32.35 21.33 43.84 20.49 7.74-.56 28.27-16.87 32.29-22.61 1.65-2.34-15-18.86-17.65-17.38-2.92 1.6-16.12 17.55-18.36 18s-23.13-4.8-34.87-6.34c-7.03-.91-8.85 4.83-5.25 7.84z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M424.43 117.89c4.26-3.1 16-17 17.68-20.31s5.9-13 3.54-14.55-3.83 1.2-3.83 1.2 1.3-4.79-1.4-5.74c-2.15-.75-4.41 3-4.41 3s1.15-5.32-1.65-5.92c-2.55-.54-3.95 4.13-3.95 4.13s.5-4.55-2.05-4.6c-3.08-.07-4 7.81-6.1 11.27-.49.79-17.17 15.31-17.17 15.31z"
        ></path>
        <path
          fill="#263238"
          d="M430.24 79.53c-1.26 5.83-1.95 8.21-5.54 12.68-.08.09 0 .21.12.13 3.92-4.06 4.94-6.82 5.71-12.8.03-.28-.23-.28-.29-.01zM436 81.51c-1.22 6-2.69 8.48-6.11 13.45-.05.07.07.15.12.09 3.77-4.59 5.76-7.43 6.19-13.54-.02-.28-.2-.27-.2 0zM441.65 84.48c-1.59 5.68-3 8.64-6.91 13a.11.11 0 10.15.15c4.45-4.08 6.21-7.76 6.93-13.11.05-.34-.07-.4-.17-.04z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M405.09 101.69s3.39-6 4.87-9 4.47-11.81 7.24-12.35c3.12-.61 3 7.92.44 13.18 0 0 7 6.57 4.8 11.74-.49 1.12-5 5.46-6.43 5.54z"
        ></path>
        <path
          fill="#263238"
          d="M417.57 94.18c2.83 2.46 5.46 6.64 4.88 10.34a.09.09 0 00.17 0c1.15-3.88-1.84-8.75-4.51-10.8-.51-.35-1.28-.18-.54.46z"
        ></path>
        <path
          d="M435.37 76.14l-12.32 28.08-4 9.15-6.17 14.06c-6.17 4.41-12.51 8.06-16.1 8.32-11.49.83-36-14-43.84-20.5-3.6-3-1.78-8.75 5.25-7.83 11.74 1.54 32.62 6.8 34.87 6.34 1.43-.29 7.29-6.86 12.12-12l-.07-.06s3.39-6 4.87-9 4.47-11.81 7.24-12.35c2.37-.47 2.88 4.37 1.85 9 1.8-1.62 3.08-2.81 3.21-3 2.14-3.46 3-11.34 6.1-11.27 2.55 0 2 4.6 2 4.6s1.41-4.67 4-4.13a1.86 1.86 0 01.99.59z"
          opacity="0.1"
        ></path>
        <path
          fill="#455a64"
          d="M384.68 136.44l8-23.3s-23.35-5.68-35-6.47c-9.77-.67-12.45 6.11-2.1 13.17 9.81 6.68 29.1 16.6 29.1 16.6z"
        ></path>
        <path
          fill="#37474f"
          d="M356.56 106.62l-3.88 11c-.32-.3-.63-.59-.9-.88l3.56-10c.39-.11.79-.12 1.22-.12zm5.5.49l-4.88 13.8 1 .63 5.05-14.27zm6.54 1l-5.77 16.29 1 .6 5.9-16.69zm6.46 1.19l-6.51 18.42 1 .57 6.64-18.77zm6.42 1.31l-7.18 20.3 1 .55 7.29-20.6zm6.39 1.42l-7.78 22 1 .54 7.91-22.29z"
        ></path>
        <path
          fill="#263238"
          d="M386.31 113.8a38.13 38.13 0 00-1.73 4.14c-.56 1.44-1.07 2.89-1.59 4.34s-2.35 7.29-2.81 8.75c0 .07.1.1.12 0 .57-1.43 2.83-7.13 3.33-8.55s1-2.84 1.46-4.28a36.77 36.77 0 001.29-4.4s-.05-.03-.07 0z"
        ></path>
        <path
          d="M387 129.58l-2.34 6.86s-19.29-9.93-29.09-16.61c-9.11-6.2-8.14-12.18-1.15-13.09z"
          opacity="0.1"
        ></path>
        <path
          fill="#455a64"
          d="M377.87 189l-72.5-5.73c.28-1.37 21.38-62.55 38.8-75.61 6-4.49 16.38 0 17.63 1.24 12.2 11.62 17.11 79.32 16.07 80.1z"
        ></path>
        <path
          fill="#37474f"
          d="M364.77 113l-24.39-1.89c.34-.37.68-.73 1-1.07l22.67 1.76c.26.39.49.79.72 1.2zm2.43 5.56l-30.89-2.39c-.26.35-.52.71-.77 1.08l32.08 2.48q-.21-.59-.42-1.16zm2.13 6.67l-37.11-2.87c-.23.36-.45.73-.67 1.1l38.1 2.94c-.11-.4-.22-.77-.32-1.16zm1.66 6.64l-42.37-3.28-.6 1.1 43.23 3.31c-.08-.35-.17-.74-.25-1.12zm1.39 6.62l-47-3.64c-.19.37-.38.74-.56 1.11l47.82 3.7c-.11-.39-.19-.78-.26-1.16zm1.18 6.6l-51.28-4c-.18.36-.35.73-.52 1.1l52 4c-.07-.31-.13-.7-.2-1.09zm1 6.59l-55.2-4.27-.49 1.11 55.86 4.32c-.03-.38-.08-.76-.14-1.15zm.9 6.59l-58.84-4.55c-.16.37-.32.74-.47 1.11l59.45 4.6c-.01-.38-.06-.76-.11-1.15zm.79 6.57L314 160q-.24.56-.45 1.11L376.4 166zm.68 6.57l-65.45-5.06c-.14.37-.29.74-.43 1.1l66 5.11c-.05-.37-.05-.75-.05-1.14zm.56 6.55l-68.42-5.29c-.14.38-.28.76-.42 1.12l68.92 5.33c.01-.37-.02-.75-.05-1.12zm.41 6.54l-71.11-5.5-.39 1.12 71.6 5.54c0-.35-.06-.74-.07-1.15z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M359.52 118.78c-3.94.72-10.31-5.56-12.71-10.52-.16-.34.52-3.79 1.16-8 .37-2.57.72-5.45.86-8.09 0-.55 16.39 4.87 16.39 4.87a42.38 42.38 0 00-2.12 10.08 6.46 6.46 0 00.06 1.09v.18c.25 2.05.16 9.68-3.64 10.39z"
        ></path>
        <path
          fill="#263238"
          d="M349.84 92.26c.55 4.51 2.78 15.46 11.63 16.11a10.64 10.64 0 001.7 0 1 1 0 000-.18 6.4 6.4 0 01-.06-1.09 42 42 0 012.11-10.1s-11.81-3.9-15.38-4.74z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M344.8 74.47c-1.3 6 3.21 22.73 7.7 26.16 6.52 5 16.47 4.68 20.52-3 3.93-7.43-2.34-29.09-7.29-32.14-7.29-4.49-19.01.09-20.93 8.98z"
        ></path>
        <path
          fill="#263238"
          d="M347.39 92c3.38-.74 5-4.78 4.33-11.35s0-9.17 2.92-10.61 6.92.88 8.57.54.75-3 2.11-3.24c.67-.13 2.9 1.53 5.26 5.86 0 0-2.09-12.4-15.37-9.35C342.86 66.74 343.48 77 344 80a85.8 85.8 0 003.39 12z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M351.34 88.14s-4.4-5.08-6.74-3.46 1.36 9.26 4.39 10a3 3 0 003.81-2z"
        ></path>
        <path
          fill="#263238"
          d="M345.71 86.85v.08c2.13.61 3.4 2.4 4.36 4.29a1.65 1.65 0 00-2.5-.2c-.05 0 0 .12.07.11a1.82 1.82 0 012.07.42 8.89 8.89 0 011.13 1.53c.12.17.44 0 .35-.16-.19-2.66-2.65-6.1-5.48-6.07zM369.18 81.72s.1 0 .11.08c.26 1.13.75 2.39 1.87 2.5v.06c-1.28.16-1.92-1.52-1.98-2.64z"
        ></path>
        <path
          fill="#263238"
          d="M369.87 80.28c1.78-.62 2.88 3 1.23 3.55s-2.72-3.04-1.23-3.55zM360.3 82.8a13.14 13.14 0 001.54 0 2.44 2.44 0 001.57-.34.79.79 0 00.18-1 2 2 0 00-1.83-.81 3 3 0 00-2 .67.85.85 0 00.54 1.48zM370.23 77.46c-.53 0-1-.11-1.54-.17a2.5 2.5 0 01-1.53-.47.8.8 0 01-.09-1 2 2 0 011.93-.62 2.92 2.92 0 011.91.84.85.85 0 01-.68 1.42zM364.46 94.64a1.8 1.8 0 001.12.41 3.21 3.21 0 001.14-.6h.06a1.57 1.57 0 01-1.27 1 1.25 1.25 0 01-1.15-.76c-.03-.03.05-.08.1-.05zM360.07 84.23a3.24 3.24 0 011.87-.54 2.8 2.8 0 011 .26 2.64 2.64 0 01.89.71l.44.55-.66.05a6.73 6.73 0 00-1.38.27 2.76 2.76 0 00-1.22.75A2.12 2.12 0 01362 85a3.84 3.84 0 011.53-.5l-.22.61a2.45 2.45 0 00-1.44-.81 6.88 6.88 0 00-1.8-.07z"
        ></path>
        <path
          fill="#263238"
          d="M362.53 86.63a5.83 5.83 0 001.27-.84c.08-.09.41-.47.37-.55a3.42 3.42 0 00-.42-.7 2.23 2.23 0 01.56.65 1 1 0 01-.31.81 2.82 2.82 0 01-1.47.63zM365.25 92.22a10 10 0 014.36-1.47c.13 0 .18-.34.16-.47l-.77-2.37c.35.07 2.15.35 2-.1a59.2 59.2 0 00-4.66-11.07.11.11 0 00-.2.09c1.07 3.55 2.75 6.89 3.88 10.45a7.12 7.12 0 00-1.94 0c-.12.07.9 2.46 1 2.86a5.71 5.71 0 00-4 1.65c-.38.39-.44.89.17.43z"
        ></path>
        <path
          fill="#263238"
          d="M367.33 90.47s.31 2.27-.75 3.09-2.55-.42-1.46-1.92a4.59 4.59 0 012.21-1.17z"
        ></path>
        <path
          fill="#ff99ba"
          d="M367.34 91.82a2.5 2.5 0 01-.76 1.74 1.09 1.09 0 01-1.65-.12.07.07 0 010-.05c.92-1.5 1.8-1.71 2.41-1.57z"
        ></path>
        <path
          fill="#37474f"
          d="M406.7 90.01L369.27 87.31 369.45 78.78 406.96 77.66 406.7 90.01z"
        ></path>
        <path
          fill="#455a64"
          d="M427.62 93.92L390.21 90.14 390.49 76.83 428.03 74.64 427.62 93.92z"
        ></path>
        <path
          fill="#37474f"
          d="M445.37 98.78L417.02 93.8 417.43 74.31 445.97 70.53 445.37 98.78z"
        ></path>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M447.6 84.69c-.15 7.13-1.13 12.88-2.2 12.86s-1.81-5.81-1.66-12.94 1.13-12.88 2.2-12.85 1.81 5.81 1.66 12.93z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M343.32 122.29c11.08 13.75 41.48 37.33 48.81 35 13.54-4.28 21.62-41.37 23.89-48.52 1-3-25.63-7.34-26.74-4.1-1 2.82-3.78 22.43-6.29 22.94-1 .22-15.22-7-31.57-12.13-12.53-3.96-11.37 2.74-8.1 6.81z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M388 110.7s.91-3 .9-10.7c0-6 4.14-20.11 19.67-26.67 6-2.51 10.32.57 4.6 4.28-4 2.61-7.05 4.08-8.12 5.3 0 0 7.31.71 9.43 4.4a79 79 0 014.85 10 16.85 16.85 0 01-1.8 1.08 9 9 0 01-1.24 9.46l-1.79 6.32z"
        ></path>
        <path
          fill="#f7a9a0"
          d="M390.5 94.86c2-2.43 6.34-7.49 11.33-10.4 5.54-3.23 17.08-8 19.42-3.85 1.72 3-2.53 5.21-2.53 5.21s5.19-.95 6.14 2.11c.87 2.8-2.51 4.3-2.51 4.3s3.24 0 3.56 2.81c.39 3.43-6.47 2.94-9.09 6.76-.58.85-26.32-6.94-26.32-6.94z"
        ></path>
        <path
          fill="#263238"
          d="M404.27 90.88a25.47 25.47 0 0114.34-5.13c.13 0 .2.1.08.13a63 63 0 00-14.39 5.05l-.03-.05zM407.69 96.38c2.12-1.5 8.74-4.47 14.62-4.27.13 0 .2.11.08.13a67.43 67.43 0 00-14.67 4.19l-.03-.05z"
        ></path>
        <path
          fill="#455a64"
          d="M370.34 148.27l12.07-21.47s-21.92-9.82-33.2-12.72c-9.48-2.44-13.36 3.74-4.46 12.57 8.43 8.35 25.59 21.62 25.59 21.62z"
        ></path>
        <path
          fill="#37474f"
          d="M348.3 113.87l-5.71 10.38a12.5 12.5 0 01-.75-1l5.27-9.57c.38.04.78.1 1.19.19zM354.69 115.73l-7.36 13.38-.86-.8 7.12-12.94zM360.89 117.93l-8.59 15.62-.88-.77 8.39-15.25zM367 120.3l-9.64 17.53-.9-.74 9.47-17.21zM373.05 122.77L362.47 142c-.3-.24-.6-.48-.9-.74l10.42-19zM379.06 125.33l-11.45 20.8-.9-.71L378 124.87z"
        ></path>
        <path
          fill="#263238"
          d="M376.07 126.31a39.63 39.63 0 00-2.46 3.75c-.82 1.31-1.58 2.64-2.35 4s-3.64 6.75-4.36 8.11c0 .06.08.1.12.05.82-1.31 4.07-6.5 4.82-7.81s1.51-2.61 2.22-3.94a36.61 36.61 0 002.07-4.1s-.04-.09-.06-.06zM347.89 129.62c5.64 4.2 11.58 9.26 17 13.84 1.84 1.59 3.68 3.18 5.57 4.69h-.21c.44-.64.88-1.29 1.34-1.92-.37.75-.76 1.48-1.15 2.22l-.15-.09c-8.11-5.4-15.39-12-22.36-18.78z"
        ></path>
        <path
          fill="#263238"
          d="M348.46 131.17a8.72 8.72 0 013.83 2.25 5.34 5.34 0 01-3.83-2.25z"
        ></path>
      </g>
      <g>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M375.42 353.29l-9.28 16.88a14.18 14.18 0 01-19.72 5.72 14.52 14.52 0 01-5.72-19.7l14.84-27c.14-.26.4-.11.55-.38-.12-.39-.12-.39 0-.66a15 15 0 0119.71-5.74c16.37 9 36.75 3.3 45.6-12.8 9-16.36 2.74-36.36-13.63-45.36a32.75 32.75 0 00-32.77.58 14.61 14.61 0 01-20.23-5 14.44 14.44 0 015.17-19.83 62.1 62.1 0 0161.84-1.18c30.13 16.56 41.37 54.52 24.82 84.64a62.23 62.23 0 01-71.18 29.83zm-31.26 56.86l-2.56 4.67a14.19 14.19 0 01-19.73 5.74 14.55 14.55 0 01-5.72-19.72l2.57-4.67a14.73 14.73 0 0119.71-5.73 14.34 14.34 0 015.73 19.71z"
        ></path>
        <path
          fill="#fff"
          d="M375.42 353.29l-9.28 16.88a14.18 14.18 0 01-19.72 5.72 14.52 14.52 0 01-5.72-19.7l14.84-27c.14-.26.4-.11.55-.38-.12-.39-.12-.39 0-.66a15 15 0 0119.71-5.74c16.37 9 36.75 3.3 45.6-12.8 9-16.36 2.74-36.36-13.63-45.36a32.75 32.75 0 00-32.77.58 14.61 14.61 0 01-20.23-5 14.44 14.44 0 015.17-19.83 62.1 62.1 0 0161.84-1.18c30.13 16.56 41.37 54.52 24.82 84.64a62.23 62.23 0 01-71.18 29.83zm-31.26 56.86l-2.56 4.67a14.19 14.19 0 01-19.73 5.74 14.55 14.55 0 01-5.72-19.72l2.57-4.67a14.73 14.73 0 0119.71-5.73 14.34 14.34 0 015.73 19.71z"
          opacity="0.6"
        ></path>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M73.65 275.28l-5.74-17.22a13.35 13.35 0 018.65-17.29 13.7 13.7 0 0117.3 8.64L103 277c.08.25-.19.34-.1.61.36.17.36.17.45.44a14.08 14.08 0 01-8.64 17.3C78.06 300.88 69 318.62 74.44 335c5.55 16.68 23.39 25.16 40.07 19.6a30.86 30.86 0 0020.57-23 13.77 13.77 0 0116.41-10.77 13.59 13.59 0 0110.41 16.24 58.5 58.5 0 01-38.74 43.51c-30.72 10.24-64.17-6.26-74.4-37a58.59 58.59 0 0124.89-68.3zm-19.33-58l-1.59-4.76a13.37 13.37 0 018.65-17.31 13.7 13.7 0 0117.3 8.66l1.59 4.76a13.88 13.88 0 01-8.65 17.29 13.51 13.51 0 01-17.3-8.63z"
        ></path>
        <path
          fill="#fff"
          d="M73.65 275.28l-5.74-17.22a13.35 13.35 0 018.65-17.29 13.7 13.7 0 0117.3 8.64L103 277c.08.25-.19.34-.1.61.36.17.36.17.45.44a14.08 14.08 0 01-8.64 17.3C78.06 300.88 69 318.62 74.44 335c5.55 16.68 23.39 25.16 40.07 19.6a30.86 30.86 0 0020.57-23 13.77 13.77 0 0116.41-10.77 13.59 13.59 0 0110.41 16.24 58.5 58.5 0 01-38.74 43.51c-30.72 10.24-64.17-6.26-74.4-37a58.59 58.59 0 0124.89-68.3zm-19.33-58l-1.59-4.76a13.37 13.37 0 018.65-17.31 13.7 13.7 0 0117.3 8.66l1.59 4.76a13.88 13.88 0 01-8.65 17.29 13.51 13.51 0 01-17.3-8.63z"
          opacity="0.6"
        ></path>
      </g>
      <g>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M271.44 285.64v37.23c0 16-12 28-28.06 28a28.12 28.12 0 01-28.07-28v-59.56c0-.56.61-.56.61-1.14-.61-.56-.61-.56-.61-1.14 0-14.9 13.2-28.07 28.07-28.07 36.08 0 65.27-28.62 65.27-64.12 0-36.07-29.19-64.13-65.27-64.13a63.38 63.38 0 00-55 31.49 28.23 28.23 0 01-38.93 10.3 27.9 27.9 0 01-9.74-38.34A120.1 120.1 0 01243.38 48.6c66.43 0 120.84 53.82 120.84 120.24 0 56.69-39.54 104.22-92.78 116.8zm0 125.39v10.3c0 16-12 28.07-28.06 28.07a28.13 28.13 0 01-28.07-28.07V411c0-15.45 13.2-28 28.07-28a27.73 27.73 0 0128.06 28z"
        ></path>
        <path
          fill="#fff"
          d="M254 60.92c48.06-6.05 91.39 42.94 99.21 87.09a92.69 92.69 0 011.38 15.16c-.06 1.69-.1 3.37-.21 5C342.72 120.8 304.49 69.42 254 60.92z"
          opacity="0.6"
        ></path>
      </g>
      <g>
        <path
          fill="#263238"
          d="M187.31 166.58a2.93 2.93 0 01-1.33 2.55 17.77 17.77 0 01-2.15 1.26c.21-2.86.09-5.83 0-8.66-.07-3.33-.34-6.59-.68-9.88h-.07c.13 3.34.15 6.69.2 10 0 2.92-.13 5.87-.07 8.8-.76.35-1.54.66-2.32.94q.08-1.53.12-3.06c.1-3.07 0-6.11-.09-9.17 0-.08-.09-.08-.09 0 0 3-.22 6-.34 9-.05 1.15-.11 2.3-.17 3.45-.54.18-1.08.34-1.61.49-.35.11-.7.2-1.06.29v-6c0-3.19-.19-6.37-.24-9.56a.07.07 0 10-.14 0c0 3.17-.12 6.36-.16 9.54 0 2.05-.12 4.14-.13 6.21a37.58 37.58 0 01-14.37.32 58.13 58.13 0 01-8.17-2c-.65-.21-2.3-.78-3.93-1.38v-2.86c.06-2.12 0-4.27.11-6.38 0-.07-.07-.07-.07 0-.17 2.13-.45 4.24-.57 6.37 0 .86-.1 1.74-.14 2.64l-1.64-.63c.33-4 .24-8.09.35-12.08 0-.1-.11-.1-.12 0-.27 3.92-.76 7.89-.85 11.84a5.7 5.7 0 01-1.07-.52c-.79-.76.29-16.6.46-20.29.33-6.9 2.11-20.87 3.81-27.51 1.46-5.69 4.47-13.82 18.63-13.57 10.39.18 15.23 11 16.08 17.34.51 3.26 1.85 40.7 1.82 42.51z"
        ></path>
        <path
          fill="#d3766a"
          d="M157 162.28c-3.87 23.49-5.14 47.74-2.54 52.41 4 7.25 33.46 24.79 43.58 28.46 3.31 1.2 13.23-20.65 11.25-23.86S175 199.67 173.44 198c-.82-.92-3.8-20.82-6.62-34.41-2.63-12.67-8.64-8.44-9.82-1.31z"
        ></path>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M186.65 239l12.91-27.46S177 198.59 174.4 196.78c-1.11-.77-4.92-25.39-7.09-36.11-1.44-7-7.59-11.08-11.36 2.29-2.2 7.84-7.18 46.3-2.67 53.21 3.59 5.49 33.37 22.83 33.37 22.83z"
        ></path>
        <path
          fill="#263238"
          d="M180.44 233.55c.62-2.11 4.55-10.27 5.56-12.29s5.29-10 6.33-12.07c.06-.11.24-.06.18.05-1 2.07-4.67 10.39-5.65 12.42s-5 10.13-6.31 11.94a.06.06 0 01-.11-.05z"
        ></path>
        <path
          fill="#020100"
          d="M156.65 160.78c-.11.32-.23.66-.34 1s-.24.77-.35 1.16c-.38 1.35-.85 3.6-1.33 6.44-.09.52-.18 1-.26 1.61-.06.33-.11.68-.16 1-.12.74-.23 1.5-.34 2.28l-.06.42c-.12.85-.25 1.74-.36 2.64-.09.66-.18 1.32-.26 2s-.17 1.34-.24 2c0 .34-.08.68-.12 1-.43 3.82-.8 7.84-1.05 11.73-.07 1.05-.13 2.1-.17 3.14 0 .69-.06 1.38-.08 2s-.05 1.34-.06 2c-.13 6.86.34 12.52 1.81 14.79 2.42 3.72 16.86 12.86 25.93 18.37l-14.93-79.6a4.44 4.44 0 00-.38-.27 3 3 0 00-2.67-.34 4.07 4.07 0 00-1.17.68 7 7 0 00-.77.77 8.35 8.35 0 00-.77 1 18.86 18.86 0 00-1.87 4.18z"
          opacity="0.1"
        ></path>
        <path
          fill="#d3766a"
          d="M251 467.67c-2.57.84-76 .19-78.83-1.6-1.06-.68-1.59-11.38-1.86-24.34-.06-2.79-5.61-47.88-5.61-47.88l49.12.29 3.9 47.86s28 12.83 30.86 15.13 5.04 9.71 2.42 10.54z"
        ></path>
        <path
          fill="#263238"
          d="M251 467.67c-2.57.84-76 .19-78.83-1.6-.8-.52-1.3-6.78-1.63-15.44 9.51 2.18 62.93 6.57 69.07 5.83 5.93-.71-7.82-7.78-10.3-9 8.06 3.81 17.63 8.42 19.24 9.72 2.86 2.25 5.07 9.66 2.45 10.49z"
        ></path>
        <path
          fill="#37474f"
          d="M113.58 195.12s-12.85 18.65-5.78 38.88c12.06 34.61 42.7 73.55 43.64 78 2.22 10.5 14 118.11 14 118.11l54.89-.33s-9-91.28-18.35-121.42c-5.09-16.46-34.15-61.58-46.69-83.6-1.13-2 1.52-10.47 1.52-10.47z"
        ></path>
        <path
          fill="#263238"
          d="M214.87 420.17c-8.52-.17-34.32-.88-45.68 0-.09 0-.09.15 0 .16 3.9.61 37.16.2 45.68 0a.12.12 0 100-.16zM104.43 220.58c3.66 5.91 7.54 11.7 11.29 17.55s7.48 11.73 11.17 17.63q11.05 17.7 21.58 35.69a108.71 108.71 0 018.68 17.41 106 106 0 014.78 18.68c1.08 6.39 1.77 12.83 2.41 19.27l2 20.56 4.17 42.08c.17 1.72.34 3.44.49 5.16 0 .26-.43.3-.46.05-1.57-13.94-2.85-27.92-4.26-41.88l-2.12-20.84c-.65-6.46-1.27-12.93-2.19-19.36a129 129 0 00-3.95-18.74 90 90 0 00-8-18.25c-6.73-11.95-13.87-23.7-21-35.42s-14.46-23.6-22-35.22c-.93-1.43-1.87-2.86-2.84-4.27-.01-.11.18-.21.25-.1z"
        ></path>
        <path
          fill="#d3766a"
          d="M117.25 468c-2.71-.2-72.22-29.36-74.13-32.07a.93.93 0 01-.1-.52c0-2.4 33.28-62.74 33.28-62.74l45.44 18.71L96 431.73s21.16 22.42 22.93 25.61 1.01 10.88-1.68 10.66z"
        ></path>
        <path
          fill="#d3766a"
          d="M118.91 457.34c1.76 3.19 1 10.88-1.66 10.69S45 438.66 43.11 436a1 1 0 01-.09-.52c0-.79 3.57-7.75 8.36-16.77 9.85-18.6 24.92-46 24.92-46l45.44 18.71L96 431.73s5.84 6.19 11.63 12.52c5.25 5.75 10.44 11.57 11.28 13.09z"
        ></path>
        <path
          fill="#263238"
          d="M117.25 468c-2.7-.2-72.22-29.37-74.14-32.07a1 1 0 01-.09-.52c0-.79 3.57-7.75 8.36-16.77 12 12.62 59.35 35.63 60.9 35s-4.25-8.81-4.65-9.39c5.25 5.73 10.44 11.55 11.28 13.07 1.76 3.21 1.09 10.9-1.66 10.68z"
        ></path>
        <path
          fill="#37474f"
          d="M102.68 425.42l-47.13-22.34s60.79-91.33 61.35-98.26c.49-6.14-26.69-59.94-27.6-75.54-1-16.83 7.28-29.74 16.28-37.71l51.26 22.75s-4.48 9.15-13.31 14c0 0 26.28 62.13 24.51 81.11s-65.36 115.99-65.36 115.99z"
        ></path>
        <path
          fill="#263238"
          d="M105.3 414.61c-6.54-3.34-4.61-2.49-11.19-5.75-3.21-1.59-24.37-12.05-27.66-13-.07 0-.13.11-.07.15 2.76 2 24.11 12.06 27.36 13.59 6.64 3.11 4.77 2.14 11.46 5.18.12.09.22-.11.1-.17zM151.17 228.82a99.7 99.7 0 00-16.68 2.63.17.17 0 00.06.34c5.57-.71 11.21-1.31 16.73-2.32a.33.33 0 00-.11-.65z"
        ></path>
        <path
          fill="#263238"
          d="M145.33 225.7a22.74 22.74 0 00-1.78 2.58 6.34 6.34 0 00-1.05 2.23c0 .16.18.23.29.15a8.43 8.43 0 001.66-2c.57-.79 1.17-1.57 1.73-2.37.37-.54-.45-1.09-.85-.59z"
        ></path>
        <path
          fill="#263238"
          d="M156.38 210.85c0-.09-.15-.17-.19-.08a75 75 0 01-3.61 8.16c-.62 1.24-4.51 7.9-7 6.44-.42-.24-.51-.69-.37-1.27a8.15 8.15 0 011.17-2.06c.85-1.38 1.65-2.79 2.36-4.23a36.83 36.83 0 003-8.44c0-.09-.14-.14-.18-.05a69.28 69.28 0 01-5.14 11.31c-1 1.72-3.18 4.11-1 5.21s5.52-3 6.29-4.18a38.35 38.35 0 004.67-10.81zM144.33 230.34c1.82 4 3.42 8 5.13 11.95s3.22 7.83 4.72 11.78c3 8 5.77 16.11 8.14 24.32q1.76 6.09 3.22 12.27a89 89 0 012.28 12.53 33.08 33.08 0 01-1.21 12.52c-1.25 4.15-8.27 18-10.19 21.88-1.18 2.37-1.57 2-1 .85 1.62-3.39 11.26-23.92 11.07-32.6a65 65 0 00-1.8-12.4c-.91-4.17-1.95-8.3-3.09-12.41-2.24-8.1-4.93-16-7.69-24-1.55-4.44-3.22-8.84-4.79-13.28s-3.23-8.49-5-13.37a.11.11 0 01.21-.04zM105.68 216.74c.92-.33 2.19.25 3.12.42a29.11 29.11 0 003.61.41 28.81 28.81 0 003.6-.08 7.9 7.9 0 003.45-.87 17.35 17.35 0 004.44-4.6 26.7 26.7 0 003.5-6c0-.13.23 0 .19.09-.4 1.22-.7 2.45-1.21 3.65a23.13 23.13 0 01-1.72 3.22c-1.21 1.92-2.58 4-4.62 5.11s-4.87 1.07-7.23.91a27.58 27.58 0 01-4.06-.59c-1-.22-2.6-.39-3.2-1.25a.3.3 0 01.13-.42z"
        ></path>
        <path
          fill="#263238"
          d="M69.64 394.59q12.84-18.91 25.22-38.14t24.42-38.79c1.92-3.12 4.13-6.22 5.38-9.68 1.37-3.76.67-7.42-.48-11.13a188.75 188.75 0 00-7.6-19.93c-2.87-6.54-6-13-9-19.42s-6.24-12.82-8.5-19.53c-2.17-6.41-2.94-13.05-1.14-19.65s5.56-12.4 9.49-17.86l3.13-4.31c.08-.11.24 0 .16.14-4.32 5.69-8.54 11.71-11.12 18.42a32.16 32.16 0 00-2.24 10.37 33.74 33.74 0 001.53 10.65c2 6.71 5.17 13.08 8.14 19.4s6.14 12.88 9.06 19.39a205.26 205.26 0 017.92 20c1 3 2.1 6.21 2 9.46-.12 3.55-1.86 6.72-3.65 9.7-7.81 12.94-15.9 25.71-24.09 38.41s-16.6 25.4-25.11 38l-3.23 4.75c-.14.16-.42-.05-.29-.25z"
        ></path>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M156.84 214.32l4.32-21.8s7.64-2.7 7.55-12.61c-.05-4.56-2.2-22.39-7.35-29.43-4.82-6.61-12.57-5-17.23-2.7-9.13 4.49-22.1 17.11-38.55 43.79z"
        ></path>
        <path
          fill="#263238"
          d="M148.68 185.06a33.78 33.78 0 016.07 3.11c.95.65 1.87 1.35 2.78 2.09.45.37.92.72 1.38 1.06a5.51 5.51 0 001.55.86v.11a9.76 9.76 0 01-1.58-.44 8.57 8.57 0 01-1.42-.79c-1-.64-1.92-1.35-2.89-2-1.95-1.32-3.9-2.64-5.95-3.75-.12-.05-.03-.31.06-.25zM142.67 186.47a33.76 33.76 0 015.46 1 22.5 22.5 0 012.62.9c.42.16.83.34 1.23.52s.87.49 1.32.68v.11c-.43-.16-.9-.22-1.34-.34l-1.32-.39c-.89-.25-1.78-.49-2.67-.76-1.77-.53-3.54-1-5.33-1.48-.12-.05-.07-.25.03-.24z"
        ></path>
        <path
          fill="#d3766a"
          d="M137.64 153.55c-13.48 14.17-32.91 39.63-31.52 45.68 3.5 15.14 16.49 33.48 23 40.12 3.82 3.87 25.25-15.28 22-18.89-5.09-5.7-17.57-24-19-26.35-.78-1.28 8.88-20.76 13.33-33.74 4.9-14.11-1.24-13.72-7.81-6.82z"
        ></path>
        <path
          fill="#d3766a"
          d="M159 236.79c-.55-1.79.39-2.09 3.12-.18s11.94 11.75 15.1 8.25-10-17.21-14.81-20-13.53-5.7-13.53-5.7c2 3.15 6.19 11.34 10.12 17.63z"
        ></path>
        <path
          fill="#c7c7c7"
          d="M175.28 196.39H184.48V264.53H175.28z"
          transform="rotate(-133.28 179.874 230.463)"
        ></path>
        <path
          fill="#263238"
          d="M132.76 265.27L142.3 275.4 142.3 275.4 169.6 249.69 169.6 249.69 160.06 239.56 160.06 239.56 132.76 265.27z"
        ></path>
        <path
          fill="#d3766a"
          d="M181.81 231.84c.61-3.6 4.5-.82 4.5-.82s-4.64-5.35-2.57-8.82 6.58.18 6.91.43c-.24-.29-4.38-5.31-2-8.59s6.53.93 6.79 1.21c-.15-.34-2-4.88.42-6.95 4.15-3.55 10.5 9 14.68 10.43l6.86-4.55a10.91 10.91 0 00-1.4 6.06c.09 3 .17 5.09-.65 6.82a4 4 0 01-4.14 2.39s2 3.31.17 6c-1 1.35-4 1-4 1s1.49 2.72-.28 5c-1.42 1.8-4.21 1.21-4.21 1.21s.22 3.28-1.82 4.64c-4 2.7-20.56-7.75-19.26-15.46z"
        ></path>
        <path
          fill="#ad6359"
          d="M212.33 217.93l5-3.64.67-.29c7.4-2.77 16.12 2.39 11.61 5.83-3.43 2.61-10.32.11-13.44 3.3z"
        ></path>
        <path
          fill="#263238"
          d="M202.54 242.58c.05 0 0 .12 0 .1a33.94 33.94 0 01-16.41-11.79c-.13-.18.11-.46.28-.3a69.07 69.07 0 0016.13 11.99zM207.54 236.52c.07 0 0 .15-.06.13-6.47-2.22-13.38-7.2-17.11-14-.13-.23 0-.57.16-.31 2.82 4.34 11.39 11.27 17.01 14.18zM195.39 214.69c3.82 6.37 9.3 10.87 15.6 14.68.08 0 0 .16-.08.14-3.59-1-7.34-3.88-10.08-6.34a19.59 19.59 0 01-5.66-8.35c-.05-.13.14-.27.22-.13z"
        ></path>
        <path
          fill="#fff"
          d="M194.86 160.35a50.28 50.28 0 118.42 37.5 50.3 50.3 0 01-8.42-37.5z"
          opacity="0.4"
        ></path>
        <path
          fill="#37474f"
          d="M186.51 158.9a58.71 58.71 0 1147.77 67.91 58.78 58.78 0 01-47.77-67.91zm6.63 1.15a52 52 0 1060.13-42.29 52 52 0 00-60.13 42.29z"
        ></path>
        <path
          fill="#37474f"
          d="M258.34 220.86a54.06 54.06 0 0016.91-8 53.39 53.39 0 10-16.91 8zm-22.61-2.4a50.29 50.29 0 1137.51-8.46 50.29 50.29 0 01-37.51 8.46zm22.61 2.4a54.06 54.06 0 0016.91-8 53.39 53.39 0 10-16.91 8zm-22.61-2.4a50.29 50.29 0 1137.51-8.46 50.29 50.29 0 01-37.51 8.46zm24.36 8.9a60.46 60.46 0 10-26.09 1.17 60.5 60.5 0 0026.09-1.17zm-25.51-2.27a57 57 0 1124.59-1.09 56.62 56.62 0 01-24.59 1.09zm40.67-12.19a53.39 53.39 0 10-16.91 8 54.06 54.06 0 0016.91-8zm-39.52 5.56a50.29 50.29 0 1137.51-8.46 50.29 50.29 0 01-37.51 8.46z"
        ></path>
        <path
          fill="#ebebeb"
          d="M222.3 133.78a38.56 38.56 0 0114.87-5.78 41.26 41.26 0 018.17-.62 44 44 0 018.22 1 40.3 40.3 0 0115 7.11 44.36 44.36 0 0110.95 12.13 79.7 79.7 0 00-12.44-9.93 48.35 48.35 0 00-6.89-3.56 40.47 40.47 0 00-7.3-2.39 49.59 49.59 0 00-15.28-1.12 64.82 64.82 0 00-15.3 3.16zM253.73 207.7a38.64 38.64 0 01-15.9 1.51 40.48 40.48 0 01-8-1.63 43.31 43.31 0 01-7.63-3.25 40.18 40.18 0 01-12.46-10.92 44.42 44.42 0 01-7.23-14.66 79.7 79.7 0 009.26 12.94 48 48 0 005.66 5.31 41.13 41.13 0 006.37 4.3 49.39 49.39 0 0014.39 5.24 65 65 0 0015.54 1.16z"
          opacity="0.3"
        ></path>
        <path
          fill="#d3766a"
          d="M127.19 236.56c6.05 8.75 13 20 23.93 25.07a6 6 0 003.87.49c4.84 2.36 7.4.78 7.4.78 5.18.81 7.58-1.17 7.58-1.17s5.71 2.7 7.92-.48c2.48-3.57-6-6.66-9.67-11.22-8.34-10.46-17.27-27.65-19.37-30.9z"
        ></path>
        <path
          fill="#263238"
          d="M151.78 245.21a86.49 86.49 0 007.82 8.79 85.59 85.59 0 0010.34 7.63.11.11 0 01-.11.19 45.49 45.49 0 01-18.19-16.45c-.1-.21.02-.31.14-.16zM144.74 249.33c2.61 2.81 7.23 7.72 17.71 13.45v.07a40.76 40.76 0 01-17.82-13.4c-.17-.19-.06-.31.11-.12zM141 251.61c4.62 4.61 8.12 6.93 14 10.48v.06c-7.08-3.33-9.27-5.34-14.12-10.4-.23-.18-.06-.32.12-.14z"
        ></path>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M122.33 238.94l28-21.86-16.34-22.85c4.46-10.37 12-30.87 14-38.51 2.35-8.95-2-10.54-9-4.28-16.15 14.32-34 40.66-34.7 46-1.03 7.68 18.04 41.5 18.04 41.5z"
        ></path>
        <path
          fill="#263238"
          d="M121.36 229.52c1.47-1.66 8.6-7.45 10.4-8.87s9.17-6.88 11-8.34c.1-.08.24 0 .14.13-1.8 1.47-8.77 7.51-10.55 8.95s-9 7.13-10.93 8.22c-.05.04-.11-.03-.06-.09zM144.14 169.32c-2.61 8-6.28 16.19-9.36 24-.14.35-.27.67-.37 1a.22.22 0 000-.14c3.53 5.66 8.14 11.63 12 17.18l3.95 5.63-.77.56.71-.64v.07l-4.27-5.4c-4.13-5.5-8.85-11.27-12.46-17.09a.73.73 0 01-.06-.5c.29-.94.65-1.79 1-2.7 2.9-7.06 6.6-15.08 9.65-22.05z"
        ></path>
        <path
          fill="#263238"
          d="M144.39 171a8.94 8.94 0 01-2.2 3.22c.75-1.05 1.37-2.23 2.2-3.22z"
        ></path>
        <path
          fill="#d3766a"
          d="M145.82 147s7.36 17.93 14.49 18.76c5.33.63 4.55-10.26 4.55-10.26s-4.95-14.35-19.04-8.5z"
        ></path>
        <path
          fill="#d3766a"
          d="M153.05 148.21c-.15 1.15 2.2 10.12 7.44 11.35 2.72.63 4.63-7.91 4.63-7.91l.38-.58 5.38-8.16L163 132.2l-1.18-1.46s-1.32 2.33-2.94 5.25l-.24.41c-.09.17-.18.32-.27.47-.24.44-.5.88-.74 1.33s-.36.67-.54 1l-.56 1.07a64.22 64.22 0 00-3.48 7.94z"
        ></path>
        <path
          fill="#263238"
          d="M158.84 136a19.62 19.62 0 006.66 15.08l5.38-8.16L163 132.2l-1.18-1.46s-1.36 2.33-2.98 5.26z"
        ></path>
        <path
          fill="#d3766a"
          d="M187.25 127.59c2.58 17-7.29 20.43-10.94 21-3.33.51-14.7 1.79-19-14.81s2.69-23.2 10.26-24.78 17.1 1.63 19.68 18.59z"
        ></path>
        <path
          fill="#263238"
          d="M157.42 133.63c3.27.51 4.31-7 4.31-7s14-2 15.54-13.32a19.22 19.22 0 009.42 10.8s-.15-12.48-10-15.18c0 0-12.14-4.8-19.31 4.74s-2.15 19.62.04 19.96z"
        ></path>
        <path
          fill="#263238"
          d="M177.34 112.49a12.29 12.29 0 01-.77 5.18 12.94 12.94 0 01-2.76 4.52 12 12 0 01-1 .91l-.5.45c-.17.13-.36.26-.54.38-.37.25-.73.51-1.11.74s-.78.41-1.18.6c-.2.09-.39.2-.6.28l-.62.23-1.24.43c-.85.21-1.71.38-2.56.54.81-.33 1.64-.57 2.43-.9l1.17-.53.59-.27c.19-.1.37-.21.55-.32l1.1-.65c.35-.23.68-.5 1-.75l.51-.37.47-.43a12.46 12.46 0 00.9-.88 14.89 14.89 0 002.78-4.21 15.3 15.3 0 00.85-2.41 14.42 14.42 0 00.53-2.54z"
        ></path>
        <path
          fill="#d3766a"
          d="M160.9 133s-4.08-5.1-6.42-3.61 1 9 3.89 9.93a2.9 2.9 0 003.78-1.81z"
        ></path>
        <path
          fill="#263238"
          d="M155.48 131.57v.08c2.05.68 3.22 2.46 4.08 4.34a1.6 1.6 0 00-2.42-.29s0 .12.06.11a1.77 1.77 0 012 .49 8.42 8.42 0 011 1.53c.11.17.42 0 .34-.15-.1-2.59-2.31-6.03-5.06-6.11zM184.94 128.21c-.4 0-.78-.1-1.18-.16a2 2 0 01-1.17-.39.63.63 0 01-.05-.75 1.53 1.53 0 011.47-.46 2.19 2.19 0 011.45.69.65.65 0 01-.52 1.07zM173.69 126.83c.39-.1.74-.25 1.12-.38a2 2 0 001.08-.61.62.62 0 00-.09-.74 1.52 1.52 0 00-1.53-.18 2.28 2.28 0 00-1.3 1 .66.66 0 00.72.91zM176.11 130.27s-.08.07-.08.12c.15 1.16.13 2.52-.89 3v.07c1.29-.31 1.3-2.11.97-3.19z"
        ></path>
        <path
          fill="#263238"
          d="M175 129.16c-1.89 0-1.68 3.81.07 3.78s1.47-3.82-.07-3.78z"
        ></path>
        <path
          fill="#263238"
          d="M174.23 129.4c-.32.23-.62.63-1 .69s-.83-.31-1.15-.67c0 0-.06 0-.06.05 0 .72.35 1.45 1.13 1.51s1.19-.61 1.33-1.35c0-.13-.13-.33-.25-.23zM182.65 129.88s.1.05.1.1c0 1.17.19 2.51 1.26 2.87v.07c-1.31-.15-1.55-1.92-1.36-3.04z"
        ></path>
        <path
          fill="#263238"
          d="M183.66 128.62c1.88-.2 2.14 3.58.4 3.76s-1.97-3.59-.4-3.76z"
        ></path>
        <path
          fill="#263238"
          d="M184.42 128.77c.34.19.69.55 1.09.56s.78-.41 1.06-.81h.06c.07.72-.16 1.49-.93 1.65s-1.25-.46-1.48-1.18c-.05-.09.06-.3.2-.22zM175.37 140.2c.27.29.53.68 1 .73a3.12 3.12 0 001.27-.24l.05.06a1.58 1.58 0 01-1.52.57 1.24 1.24 0 01-.87-1.07c-.06-.07.03-.09.07-.05zM181.16 135s.28 1.77.29 2.6a17.67 17.67 0 00-4.83.79c-.36.13-.36-.18 0-.44a7.14 7.14 0 014.05-1.06c.05-.23-.47-2.72-.34-2.73a7.17 7.17 0 011.91.4c-.47-3.71-1.52-7.31-1.92-11a.12.12 0 01.22-.06 61.64 61.64 0 012.57 11.76c.12.47-1.61-.14-1.95-.26z"
        ></path>
        <path
          fill="#263238"
          d="M179.42 137.74s-.77 2-2 2.23c-1.45.23-1.94-1.52-.34-2.27a4.31 4.31 0 012.34.04z"
        ></path>
        <path
          fill="#ff99ba"
          d="M178.82 138.86a2.44 2.44 0 01-1.43 1.11 1.06 1.06 0 01-1.33-.86c1.48-.87 2.31-.65 2.76-.25z"
        ></path>
      </g>
      <g>
        <path
          fill="#fff"
          d="M86.47 85.61a27.59 27.59 0 0044.05 22.16l13.53 3.46-5.63-12.6a27.61 27.61 0 10-51.95-13z"
        ></path>
        <path
          fill="#263238"
          d="M86.47 85.61c.43 23 25.7 35.17 44.14 21.82l13.55 3.37-.51.61L138 98.83l-.1-.22c8.52-15.34-.13-35.25-17.16-39.49-17.09-4.65-34.37 8.88-34.27 26.49zm0 0c.07-23.5 27.48-36.36 45.62-21.4 10 8.11 13.1 23.36 6.75 34.65v-.42l5.59 12.61.37.83-.88-.23-13.5-3.53c-17.3 13.1-43.83.78-44-22.51z"
        ></path>
        <path
          fill={variant === "sapphire" ? "#AC7CD3" : "#B34647"}
          d="M115.88 89.28v3a2.25 2.25 0 01-2.3 2.3 2.31 2.31 0 01-2.3-2.3v-4.83-.1-.09a2.37 2.37 0 012.3-2.3 5.26 5.26 0 100-10.51 5.21 5.21 0 00-4.51 2.55 2.31 2.31 0 01-3.19.84 2.29 2.29 0 01-.8-3.14 9.87 9.87 0 1110.8 14.55zm0 10.28v.84a2.25 2.25 0 01-2.3 2.3 2.3 2.3 0 01-2.3-2.3v-.84a2.33 2.33 0 012.3-2.3 2.28 2.28 0 012.3 2.3z"
        ></path>
      </g>
      <path
        fill="#263238"
        d="M45.75 468.26c130.86-.62 277.64-.62 408.5 0-130.86.61-277.64.61-408.5 0z"
      ></path>
    </svg>
  );
}

export default NotFound;
