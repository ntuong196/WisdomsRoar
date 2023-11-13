import Realm, {ObjectSchema} from 'realm';

export default class Category extends Realm.Object<Category> {
    _id!: Realm.BSON.ObjectId;
    name!: string;
    verses! :[];
    addedDate!: Date;
    // image!: string;

    static schema: ObjectSchema = {
        name: 'Category',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
            verses: 'Verse[]',
            addedDate: 'date'
        }
    }
}
