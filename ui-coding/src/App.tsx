import { useState } from "react";
import StarRating from "./components/star-rating/StarRating";
function App() {
  const [rating, setRating] = useState(1);
  return (
    <div>
      <StarRating
        maxStars={5}
        currentRating={rating}
        onRatingChange={setRating}
      />
    </div>
  );
}

export default App;
