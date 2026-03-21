import { useEffect } from "react";
import { LuRefreshCw  } from "react-icons/lu";
import { startNetworkWatcher } from "../utils/NetworkStatusCheck";
import { useNetworkStore } from "../store/globalStore";

const OfflinePage = () => {
  const online = useNetworkStore((state) => state.isOnline);

  useEffect(() => {
    const cleanup = startNetworkWatcher();
    return () => cleanup?.();
  }, [online]);

  if (online) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10 text-center max-w-md mx-4">
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
          You're Offline
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Please check your internet connection and try again.
        </p>

        <div className="flex items-center justify-center space-x-2 text-gray-400">
          <span>Waiting for network...</span>
          <LuRefreshCw  className="w-6 h-6 animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
