import { useState, type KeyboardEventHandler } from "react";

type StarRatingProps = {
  maxStars: number;
  currentRating: number;
  onRatingChange: React.Dispatch<React.SetStateAction<number>>;
};

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={["star-icon", filled ? "star-icon-filled" : ""].join(" ")}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  );
}

const StarRating = ({
  maxStars,
  currentRating,
  onRatingChange,
}: StarRatingProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);
  const stars = Array.from({ length: maxStars }, (_, index) => {
    return (
      <span
        key={index}
        onClick={() => onRatingChange(index + 1)}
        onMouseLeave={() => setHoveredIndex(null)}
        onMouseEnter={() => setHoveredIndex(index)}
        // make it focusable and tabbable
        tabIndex={0}
      >
        <Star
          filled={
            hoveredIndex != null ? index <= hoveredIndex : index < currentRating
          }
        />
      </span>
    );
  });
  return <div>{stars}</div>;
};
export default StarRating;
