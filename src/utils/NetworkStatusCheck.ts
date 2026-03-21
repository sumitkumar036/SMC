import { useNetworkStore } from "../store/globalStore";
import { toast } from "react-toastify";

const checkInternetConnection = async (): Promise<boolean> => {
  try {

    const response = await await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.ok;
  } catch {
    return false;
  }
};

export const startNetworkWatcher = () => {
  const { setOnline } = useNetworkStore.getState();

  const updateStatus = async () => {
    const isOnline = await checkInternetConnection();
    const prevStatus = useNetworkStore.getState().isOnline;

    if (prevStatus !== isOnline) {
      setOnline(isOnline);

      
      if (!isOnline) {
        toast.error("You are offline!");
      } else {
        toast.success("Back online!");
      }

      console.log(`Network changed: ${isOnline ? "online" : "offline"}`);
    }
  };

  // Initial check
  updateStatus();

  // Listen for browser events
  window.addEventListener("online", updateStatus);
  window.addEventListener("offline", updateStatus);

  // Return a cleanup function
  return () => {
    window.removeEventListener("online", updateStatus);
    window.removeEventListener("offline", updateStatus);
  };
};
