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

  );
}

export default UserProfileCard;