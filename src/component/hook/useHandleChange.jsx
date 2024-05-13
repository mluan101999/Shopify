import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useHandleChange = (initialState) => {
  const isLogin = useSelector((state) => state.authentSlice.isLogin)
  const [formLogin, setFormLogin] = useState(initialState);
  const handleChange=(e)=> {
    const {name,value} = e.target
    setFormLogin({
      ...formLogin,
      [name]:value,
    })
  }
  useEffect(() => {
    if(isLogin){
      setFormLogin({
        ...formLogin,
        userName: "",
        password: "",
      });
    }
  },[isLogin])
  return {formLogin,handleChange,setFormLogin}
};
export default useHandleChange;