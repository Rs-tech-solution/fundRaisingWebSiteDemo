// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useUser } from "@/context/userContext";
// import { auth } from "../firebase/config";
// import styles from "./index.module.scss";
// import { toast } from "react-toastify";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { setUser } = useUser();
//   const router = useRouter();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(""); // Reset error message
//     console.log("Email:", email);
//     console.log("Password:", password);

//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("User created:", userCredential.user);
//       setUser(userCredential.user);
//       router.push("/login");
//       toast.success(" user registered successfully", {
//         position: "bottom-center",
//       });
//     } catch (error) {
//       console.error("Error signing up:", error.message);
//       setError(error.message);
//       toast.error();
//       error.message, { position: "bottom-center" };
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h2>Sign Up</h2>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <div className={styles.inputGroup}>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.inputGroup}>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className={styles.error}>{error}</p>}
//         <button type="submit" onClick={handleSubmit}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
