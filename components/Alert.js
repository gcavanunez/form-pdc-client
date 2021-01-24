import { useContext } from "react";
import authContext from "../context/auth/authContext";
// import appContext from "../context/app/appContext";

export default function Alert() {
  // Extraer mensaje de error para Usuarios
  const AuthContext = useContext(authContext);
  const { message } = AuthContext;

  // Extraer el mensaje de error de archivos
  // const AppContext = useContext(appContext);
  // const { message_uploads } = AppContext;

  return (
    <div className="bg-red-500 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto">
      {/* {message || mensaje_archivo} */}
      {message}
    </div>
  );
}
