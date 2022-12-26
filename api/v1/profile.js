import profiles from "../../public/profiles.json";

export default function (req, res) {
  const randomId = Math.floor(Math.random() * 10);

  const data = profiles[randomId];

  if (!data) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }

  res.status(200).json({ data });
}
