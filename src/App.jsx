import AppRoutes from "./Routes.jsx"
import { AuthProvider } from "./contexts/auth";
const App = () =>{
  return(
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}


export default  App;