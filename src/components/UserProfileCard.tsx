interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

const img = 'https://t3.ftcdn.net/jpg/05/60/26/08/360_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.webp'

function UserProfileCard({
  user, 
  showEmail, 
  showRole, 
  onEdit, 
  children}:UserProfileCardProps) {

  return (
    <>
      <div>
        <img src={img} alt="avatar placeholder" />
        <div>
          <h2>{user.name}</h2>
          <p>{showEmail}</p>
          <p>{showRole}</p>
        </div>
      </div>
      <div>
        {onEdit && (
          <button
            onClick={user.id && onEdit}
            className="ml-4 text-gray-500 hover:text-gray-700"
          >
            Edit Profile
          </button>
        )}
      </div>
      {children}
    </>
  );
}

export default UserProfileCard;