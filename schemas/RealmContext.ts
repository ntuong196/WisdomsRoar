import {createRealmContext} from '@realm/react';
import Category from './Category';
import {Verse, FetchAllVersesType} from './Verse';

// Create a configuration object
const verseRealmContext = createRealmContext({
  schema: [Verse.schema],
  deleteRealmIfMigrationNeeded: true
});

const sharedRealmContext = createRealmContext({
  schema: [Category.schema, Verse.schema],
  deleteRealmIfMigrationNeeded: true
});

export {verseRealmContext, sharedRealmContext};