import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { capitalizeFirstLetter } from "../utils/capitalizeFirstLetter";

const useFirebase = (categoryId) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        let q;
        if (categoryId) {
          const categoryCapitalized = capitalizeFirstLetter(categoryId);
          q = query(
            collection(db, "games"),
            where("genre", "==", categoryCapitalized)
          );
        } else {
          q = query(collection(db, "games"));
        }

        const querySnapshot = await getDocs(q);
        const productosFirebase = [];
        querySnapshot.forEach((doc) => {
          productosFirebase.push({ ...doc.data(), id: doc.id });
        });
        setData(productosFirebase);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [categoryId]);

  return [data, error, loading];
};

export default useFirebase;
