import Category from "./Category";
import { Verse } from "./Verse";
import {verseRealmContext} from "../schemas/RealmContext";

const {useRealm} = verseRealmContext;
const realm = useRealm();
const verse1 = realm.create('Verse', {
    title: "CONSISTENT MINDFULNESS BRINGS IN UNDERSTANDING",
    favourite: false,
    date: "November 12, 2023",
    author: "Sayadaw U Tejaniya",
    detail : "We don't see more because we try to see more; we see more when the mind becomes more able to. If we want the mindfulness to be sharp, to be able to understand and see more, we just have to be mindful consistently - and persistence and time will bring in those things.",
    origin: "Swiss Retreat 2019 Interviews 1(1:19:15-1:19:55) with Sayadaw U Tejaniya",
    Category: "understanding"
})
realm.write(()=>verse1)
// moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(realm.path)