import React from "react";
import { Container } from "../components/Container";

export function SubscribeExternalStoreExercise5() {
  const isOnline = useNewOnlineStatus();

  return (
    <Container title="Subscribe to external store">
      {isOnline && (
        <div className="bg-green-500 text-white py-1 px-4 rounded-full">
          Online
        </div>
      )}
      {!isOnline && (
        <div className="bg-red-500 text-white py-1 px-4 rounded-full">
          Offline
        </div>
      )}
    </Container>
  );
}

// function useOnlineStatus() {
//   const [isOnline, setIsOnline] = React.useState(true);

//   React.useEffect(() => {
//     function updateState() {
//       setIsOnline(navigator.onLine);
//     }

//     updateState();

//     window.addEventListener("online", updateState);
//     window.addEventListener("offline", updateState);
//     return () => {
//       window.removeEventListener("online", updateState);
//       window.removeEventListener("offline", updateState);
//     };
//   }, []);

//   return isOnline;
// }

const subscribeFn = (callback: () => void) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

const getSnapshot = () => navigator.onLine;

function useNewOnlineStatus() {
  return React.useSyncExternalStore(subscribeFn, getSnapshot);
}
