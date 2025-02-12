import { useContext } from "react";
import { auth, googleProvider, signInWithPopup } from "../../firebase/firebase";
import { ShoppingCartContext } from "../../contexts"; 

function GoogleSignIn() {
  const context = useContext(ShoppingCartContext);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      context.setUser({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors"
    >
      <img
        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
        alt="Google Logo"
        className="w-6 h-6"
      />
      <span>Sign in with Google</span>
    </button>
  );
}

export default GoogleSignIn;