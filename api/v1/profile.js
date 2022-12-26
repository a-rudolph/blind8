const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

const BASE = "https://blind8-three.vercel.app";

const handler = async (req, res) => {
  const response = await fetch(`${BASE}/profiles.json`);
  const profiles = await response.json();

  const randomId = Math.floor(Math.random() * 10);

  const data = profiles[randomId];

  if (!data) {
    res.status(404).json({ message: "Profile not found" });
    return;
  }

  res.status(200).json({ data });
};

export default allowCors(handler);
