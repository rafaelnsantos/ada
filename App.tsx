import "react-native-gesture-handler";

import { QueryClientProvider, QueryClient } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/Router";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
