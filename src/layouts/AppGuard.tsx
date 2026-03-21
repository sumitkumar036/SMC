import { useNetworkStore } from "../store/globalStore";
import OfflinePage from "../pages/OfflinePage";


const AppGuardPage = ({ children }: { children: React.ReactNode }) => {
  const isOnline = useNetworkStore((s) => s.isOnline);

  if (!isOnline) {
    return <OfflinePage />;
  }

  return <>{children}</>;
};

export default AppGuardPage;
