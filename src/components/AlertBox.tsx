
type AlertType = 'success' | 'error' | 'warning' | 'info';
 
interface AlertBoxProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  children?: React.ReactNode;
}

function AlertBox({type, message, onClose, children}: AlertBoxProps) {
    const alertStyles = { 
        success:
    }

    return (
   
    );
}

export default AlertBox;