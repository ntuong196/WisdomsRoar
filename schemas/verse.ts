import Realm, {ObjectSchema} from 'realm';

// Define your object model
class Verse extends Realm.Object<Verse> {
    _id!: Realm.BSON.ObjectId;
    favourite!: boolean;
    date!: string;
    title!: string;
    author!: string;
    origin!: string;
    detail!: string;
    // image!: string;

    static schema: ObjectSchema = {
        name: 'Verse',
        properties: {
            _id: {type:'objectId', default: () => new Realm.BSON.ObjectId()},
            favourite: {type: 'bool', default: false},
            title: 'string',
            author: 'string',
            origin: 'string',
            detail: 'string',
            Category: { type : 'linkingObjects', objectType : 'Categories', property: 'verses' }
        },
        primaryKey: '_id',
    };
}

type FetchAllVersesType = {
    quotes: Verse[];
    fetchFavsOnly: boolean;
};

export {Verse, FetchAllVersesType};