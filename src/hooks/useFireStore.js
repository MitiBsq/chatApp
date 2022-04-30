import { useState, useEffect } from "react";
import { projectFirestore } from '../firebase/config';

//Creating the custom hook that takes our data from firebase.. firestore database
function useFirestore(collection) {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        //const unsub + return is for unmounting
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt')
            .onSnapshot((snap) => {
                let msgs = [];
                snap.forEach(doc => {
                    msgs.push({ ...doc.data(), id: doc.id });
                });
                setDocs(msgs);
            })

        return () => unsub();
    }, [collection])

    return { docs };
}

export default useFirestore;