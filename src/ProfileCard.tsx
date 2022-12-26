const imgUrl = "https://randomuser.me/api/portraits/men/75.jpg";

export const ProfileCard: React.FC = () => {
  return (
    <div className="card">
      <img
        src={imgUrl}
        loading="eager"
        className="object-cover w-full rounded-md shadow-md"
      />
      <div className="text-lg py-2">Joe, 32</div>
      <div className="text-sm text-slate-600">Software Engineer</div>
      <div className="text-sm text-slate-600">San Francisco, CA</div>
    </div>
  );
};

export default ProfileCard;
