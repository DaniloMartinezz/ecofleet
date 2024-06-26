import React from "react";
import AvatarCircles from "../magicui/avatar-circles";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const AvatarCirclesDemo: React.FC = () => {
  return <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />;
};

export default AvatarCirclesDemo;
