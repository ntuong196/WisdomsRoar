import { typeORMDriver } from 'react-native-quick-sqlite'
import { DataSource } from 'typeorm'
import { Verse } from './verse'
import { Author } from './author'
import { Category } from './category'

export const dataSource = new DataSource({
	database: 'wisdomsroar.db',
	entities: [Verse, Author, Category],
	location: '.',
	logging: [],
	synchronize: true,
	type: 'react-native',
	driver: typeORMDriver,
})

export const VerseRepository = dataSource.getRepository(Verse)
