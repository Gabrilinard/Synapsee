import AppRoutes from "./Routes.jsx"
import { AuthProvider } from "./contexts/auth";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () =>{
  return(
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}


export default  App;