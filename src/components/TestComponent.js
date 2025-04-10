import React from "react";

function TestComponent() {
  return (
    <div>
      <video title="time video" controls>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default TestComponent;
