import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SocialLogins = () => {
  const {signInWithGoogle, signInWithGithub} = useAuth()
  const axiosPublic = useAxiosPublic()

  const navigate = useNavigate()
  const handleGoogleSignIn = ()=> {
    signInWithGoogle()
    .then(result=>{
        console.log(result.user);
        const userInfo = {
            email:result.user?.email,
            name:result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
    })
  }

  const handleGitHubSignIn =()=>{
    signInWithGithub()
    .then(result=>{
        const user = result.user;
        console.log(user)
        const userInfo = {
            email:user.email,
            name:user.displayName,
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
    })
  }
    return (
    <div>
      <h4 className="my-3">
        {" "}
        Login With{" "}
      </h4>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline mr-3 rounded-sm text-stone-400 bg-transparent hover:bg-mybrown"
      >
        <FaGoogle></FaGoogle>
      </button>
      <button
        onClick={handleGitHubSignIn}
        className="btn btn-outline mr-3 rounded-sm text-stone-400 bg-transparent hover:bg-mybrown"
      >
        <FaGithub></FaGithub>
      </button>
      <button
        // onClick={handleFacebookSignIn}
        className="btn btn-outline mr-3 rounded-sm text-stone-400 bg-transparent hover:bg-mybrown"
      >
        <FaFacebook></FaFacebook>
      </button>
    </div>
  );
};

export default SocialLogins;
