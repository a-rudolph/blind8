import fs from "fs";
import path from "path";

const getProfiles = async (count) => {
  const response = await fetch(`https://randomuser.me/api/?results=${count}`);
  const data = await response.json();

  return data.results;
};

const seed = async () => {
  const profiles = await getProfiles(10);
  const profilesPath = path.join(process.cwd(), "public", "profiles.json");
  fs.writeFileSync(profilesPath, JSON.stringify(profiles));
};

seed();
