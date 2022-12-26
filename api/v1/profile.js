export default async function (req, res) {
  const response = await fetch("/public/profiles.json");
  const profiles = await response.json();

  const randomId = Math.floor(Math.random() * 10);

  const data = profiles[randomId];

  if (!data) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }

  res.status(200).json({ data });
}
