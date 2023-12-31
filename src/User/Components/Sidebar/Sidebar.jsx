import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sideBtn} onClick={props.onPin}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          style={{transform: "rotateZ(45deg)"}}
        >
          <path
            d="M17.0998 19.3757V32.5503H18.8988V19.3757C23.2374 18.9524 26.5707 15.2487 26.5707 10.8572C26.5707 6.14818 22.7083 2.28574 17.9993 2.28574C13.2903 2.28574 9.42786 6.14818 9.42786 10.8572C9.42786 15.2487 12.8141 18.8995 17.0998 19.3757Z"
            fill={props.isPinned ? "yellow" : "white"}
          />
        </svg>
      </div>
      <div className={classes.sideBtn} onClick={props.onCopy}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <g clipPath="url(#clip0_26_821)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.285 5.42857V3.14286H23.7136V5.42857H12.285ZM11.7136 0.857143C10.7668 0.857143 9.99928 1.62465 9.99928 2.57143V3.14286H8.85643C6.96287 3.14286 5.42786 4.67787 5.42786 6.57143V29.4286C5.42786 31.3221 6.96287 32.8571 8.85643 32.8571H16.8564V30.5714H8.85643C8.22525 30.5714 7.71357 30.0597 7.71357 29.4286V6.57143C7.71357 5.94025 8.22525 5.42857 8.85643 5.42857H9.99928V6C9.99928 6.94677 10.7668 7.71429 11.7136 7.71429H24.285C25.2317 7.71429 25.9993 6.94677 25.9993 6V5.42857H27.1421C27.7732 5.42857 28.285 5.94025 28.285 6.57143V16.8571H30.5707V6.57143C30.5707 4.67787 29.0356 3.14286 27.1421 3.14286H25.9993V2.57143C25.9993 1.62465 25.2317 0.857143 24.285 0.857143H11.7136ZM21.4279 20.2857C21.4279 20.9169 20.9162 21.4286 20.285 21.4286C19.6538 21.4286 19.1421 20.9169 19.1421 20.2857C19.1421 19.6545 19.6538 19.1429 20.285 19.1429C20.9162 19.1429 21.4279 19.6545 21.4279 20.2857ZM24.8564 21.4286C25.4875 21.4286 25.9993 20.9169 25.9993 20.2857C25.9993 19.6545 25.4875 19.1429 24.8564 19.1429C24.2253 19.1429 23.7136 19.6545 23.7136 20.2857C23.7136 20.9169 24.2253 21.4286 24.8564 21.4286ZM30.5707 20.2857C30.5707 20.9169 30.0589 21.4286 29.4279 21.4286C28.7968 21.4286 28.285 20.9169 28.285 20.2857C28.285 19.6545 28.7968 19.1429 29.4279 19.1429C30.0589 19.1429 30.5707 19.6545 30.5707 20.2857ZM33.9993 21.4286C34.6304 21.4286 35.1421 20.9169 35.1421 20.2857C35.1421 19.6545 34.6304 19.1429 33.9993 19.1429C33.3682 19.1429 32.8564 19.6545 32.8564 20.2857C32.8564 20.9169 33.3682 21.4286 33.9993 21.4286ZM35.1421 24.8571C35.1421 25.4882 34.6304 26 33.9993 26C33.3682 26 32.8564 25.4882 32.8564 24.8571C32.8564 24.2261 33.3682 23.7143 33.9993 23.7143C34.6304 23.7143 35.1421 24.2261 35.1421 24.8571ZM33.9993 30.5714C34.6304 30.5714 35.1421 30.0597 35.1421 29.4286C35.1421 28.7975 34.6304 28.2857 33.9993 28.2857C33.3682 28.2857 32.8564 28.7975 32.8564 29.4286C32.8564 30.0597 33.3682 30.5714 33.9993 30.5714ZM33.9993 35.1429C34.6304 35.1429 35.1421 34.6311 35.1421 34C35.1421 33.3689 34.6304 32.8571 33.9993 32.8571C33.3682 32.8571 32.8564 33.3689 32.8564 34C32.8564 34.6311 33.3682 35.1429 33.9993 35.1429ZM20.285 26C20.9162 26 21.4279 25.4882 21.4279 24.8571C21.4279 24.2261 20.9162 23.7143 20.285 23.7143C19.6538 23.7143 19.1421 24.2261 19.1421 24.8571C19.1421 25.4882 19.6538 26 20.285 26ZM21.4279 29.4286C21.4279 30.0597 20.9162 30.5714 20.285 30.5714C19.6538 30.5714 19.1421 30.0597 19.1421 29.4286C19.1421 28.7975 19.6538 28.2857 20.285 28.2857C20.9162 28.2857 21.4279 28.7975 21.4279 29.4286ZM20.285 35.1429C20.9162 35.1429 21.4279 34.6311 21.4279 34C21.4279 33.3689 20.9162 32.8571 20.285 32.8571C19.6538 32.8571 19.1421 33.3689 19.1421 34C19.1421 34.6311 19.6538 35.1429 20.285 35.1429ZM25.9993 34C25.9993 34.6311 25.4875 35.1429 24.8564 35.1429C24.2253 35.1429 23.7136 34.6311 23.7136 34C23.7136 33.3689 24.2253 32.8571 24.8564 32.8571C25.4875 32.8571 25.9993 33.3689 25.9993 34ZM29.4279 35.1429C30.0589 35.1429 30.5707 34.6311 30.5707 34C30.5707 33.3689 30.0589 32.8571 29.4279 32.8571C28.7968 32.8571 28.285 33.3689 28.285 34C28.285 34.6311 28.7968 35.1429 29.4279 35.1429Z"
              fill="#E3E5F2"
            />
          </g>
          <defs>
            <clipPath id="clip0_26_821">
              <rect
                width="34.2857"
                height="34.2857"
                fill="white"
                transform="translate(0.856445 0.857143)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={classes.sideBtn} onClick={props.onExport}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M6.57068 18V29.4286C6.57068 30.1863 6.8717 30.9131 7.40752 31.4489C7.94333 31.9847 8.67006 32.2857 9.42782 32.2857H26.5707C27.3284 32.2857 28.0552 31.9847 28.591 31.4489C29.1268 30.9131 29.4278 30.1863 29.4278 29.4286V18"
            stroke="#E3E5F2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.7136 9.42857L17.9993 3.71429L12.285 9.42857"
            stroke="#E3E5F2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.9993 3.71429V22.2857"
            stroke="#E3E5F2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={classes.sideBtn} onClick={props.onDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M29.1786 10.5938H24.9492L23.2037 8.04443C22.715 7.39653 21.9603 7 21.0978 7H15.9022C15.0397 7 14.2388 7.39653 13.7973 8.04443L12.0508 10.5938H7.82143C7.36579 10.5938 7 10.914 7 11.3125V12.0312C7 12.4311 7.36579 12.75 7.82143 12.75H8.64286V27.125C8.64286 28.713 10.1137 30 11.9286 30H25.0714C26.8863 30 28.3571 28.713 28.3571 27.125V12.75H29.1786C29.6355 12.75 30 12.4311 30 12.0312V11.3125C30 10.914 29.6355 10.5938 29.1786 10.5938ZM15.8252 9.28563C15.8766 9.20701 15.9792 9.15625 16.0871 9.15625H20.9129C21.022 9.15625 21.1247 9.20679 21.1761 9.2854L22.0732 10.5938H14.9268L15.8252 9.28563ZM25.0714 27.8438H11.9286C11.4749 27.8438 11.1071 27.522 11.1071 27.125V12.75H25.8929V27.125C25.8929 27.5203 25.5232 27.8438 25.0714 27.8438ZM18.5 25.6875C18.954 25.6875 19.3214 25.366 19.3214 24.9688V15.625C19.3214 15.2277 18.954 14.9062 18.5 14.9062C18.046 14.9062 17.6786 15.2297 17.6786 15.625V24.9688C17.6786 25.3641 18.0482 25.6875 18.5 25.6875ZM14.3929 25.6875C14.8446 25.6875 15.2143 25.3641 15.2143 24.9688V15.625C15.2143 15.2277 14.8469 14.9062 14.3929 14.9062C13.9388 14.9062 13.5714 15.2297 13.5714 15.625V24.9688C13.5714 25.3641 13.9411 25.6875 14.3929 25.6875ZM22.6071 25.6875C23.0612 25.6875 23.4286 25.366 23.4286 24.9688V15.625C23.4286 15.2277 23.0612 14.9062 22.6071 14.9062C22.1531 14.9062 21.7857 15.2297 21.7857 15.625V24.9688C21.7857 25.3641 22.1554 25.6875 22.6071 25.6875Z"
            fill="#E3E5F2"
          />
        </svg>
      </div>
      <div className={classes.sideBtn} onClick={props.onSave}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M18 3C15.2311 3 12.5243 3.82109 10.222 5.35942C7.91973 6.89776 6.12532 9.08426 5.06569 11.6424C4.00607 14.2006 3.72882 17.0155 4.26901 19.7313C4.80921 22.447 6.14258 24.9416 8.10051 26.8995C10.0584 28.8574 12.553 30.1908 15.2687 30.731C17.9845 31.2712 20.7994 30.9939 23.3576 29.9343C25.9157 28.8747 28.1022 27.0803 29.6406 24.778C31.1789 22.4757 32 19.7689 32 17C32 13.287 30.525 9.72601 27.8995 7.1005C25.274 4.475 21.713 3 18 3ZM25.2635 14.0816L16.3544 22.9907C16.1157 23.2293 15.792 23.3634 15.4545 23.3634C15.1171 23.3634 14.7934 23.2293 14.5547 22.9907L10.7365 19.1725C10.5047 18.9325 10.3764 18.611 10.3793 18.2773C10.3822 17.9436 10.5161 17.6244 10.7521 17.3884C10.988 17.1524 11.3072 17.0186 11.6409 17.0157C11.9747 17.0128 12.2961 17.1411 12.5362 17.3729L15.4545 20.2913L23.4638 12.282C23.7039 12.0502 24.0254 11.9219 24.3591 11.9248C24.6928 11.9277 25.012 12.0615 25.248 12.2975C25.4839 12.5335 25.6178 12.8527 25.6207 13.1864C25.6236 13.5201 25.4953 13.8416 25.2635 14.0816Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
