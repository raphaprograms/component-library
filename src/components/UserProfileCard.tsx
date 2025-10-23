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

function UserProfileCard({
  user, 
  showEmail, 
  showRole, 
  onEdit, 
  children}:UserProfileCardProps) {

  return (
    <>
      <div>
        <img src={user.avatarUrl ? user.avatarUrl : undefined} alt="avatar placeholder" />
        <div>
          <h2>{user.name}</h2>
          <p>{showEmail ? user.email : null}</p>
          <p>{showRole ? user.role : null}</p>
        </div>
      </div>
      <div>
        {onEdit && (
          <button
            onClick={onEdit ? () => onEdit(user.id) : undefined}
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